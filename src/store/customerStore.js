import { defineStore } from 'pinia';
import { fetchCustomerDetails, CreateCustomer } from '@/services/customer/Customer';

export const useCustomerStore = defineStore('customerstore', {
  state: () => ({
    info: {
      id: '',
      full_name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
    },
    loading: false,
    error: null,
  }),

  actions: {
    async GetCustomerInfo() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetchCustomerDetails();
        if (response && Object.keys(response).length) {
          this.info = { ...this.info, ...response }; // Merge with existing info
        } else {
          console.log('No customer data from API, using persisted info:', this.info);
        }
      } catch (err) {
        console.error('Failed to fetch customer details:', err);
        this.error = 'Failed to load customer info. Please try again.';
      } finally {
        this.loading = false;
      }
    },

    async CustomerRecord(payload) {
      this.loading = true;
      this.error = null;
      try {
        const response = await CreateCustomer(payload);
        if (response.data.success) {
          this.info = { ...payload, id: response.data.id || this.info.id };
          return { success: true, message: response.data.message };
        } else {
          this.error = response.data.message || 'Failed to create customer record';
          return { success: false, message: response.data.message };
        }
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to create customer record';
        console.error('Error creating customer:', err);
       
      } finally {
        this.loading = false;
      }
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'customerstore',
        storage: localStorage,
        paths: ['info'], // Persist only the 'info' state
      },
    ],
  },
});