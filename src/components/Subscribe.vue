<template>
    <section class="bg-pink-100 py-12 h-96 flex justify-center items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <!-- Text Content -->
          <div class="text-center pt-4">
            <h2 class="text-3xl text-gray-950 mb-4 ">{{ title }}</h2>
            <p class="text-lg text-gray-700 text-balance flex justify-center items-center">{{ description }}</p>
          </div>
  
          <!-- Form -->
          <div class="bg-white rounded-3xl p-6 shadow-md mb-3">
            <form @submit.prevent="handleSubmit" class="flex md:flex-col flex-col gap-3">
              <div class="flex-1">
                <label for="newsletter-email" class="sr-only">Email Address</label>
                <input
                  id="newsletter-email"
                  v-model="email"
                  type="email"
                  placeholder="Enter your email"
                  class="w-full p-2 text-center border text-gray-900 border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-primary focus:border-transparent"
                  :aria-describedby="emailError ? 'newsletter-error' : null"
                  aria-label="Enter your email to subscribe to our newsletter"
                  required
                />
                <p
                  v-if="emailError"
                  id="newsletter-error"
                  class="text-red-600 text-xs mt-1"
                  role="alert"
                >
                  Please enter a valid email address.
                </p>
              </div>
  
              <button
                type="submit"
                class="cartBtn w-full sm:w-auto"
                :disabled="isSubmitting"
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                aria-label="Subscribe to newsletter"
              >
                <span v-if="isSubmitting" class="animate-spin">⏳</span>
                <span v-else>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useToast } from 'vue-toastification'; 
  import api from '@/services/axios'; 
  
  const toast = useToast();
  
  // Props
  defineProps({
    title: {
      type: String,
      default: 'Stay Updated!🌟',
    },
    description: {
      type: String,
      default:
        'Stay in the loop with exclusive offers, new arrivals, and fitness tips from CHEELUXNG. Join our community and elevate your activewear game!',
    },
  });
  
  // Emits
  const emit = defineEmits(['subscribe']);
  
  // State
  const email = ref('');
  const emailError = ref(false);
  const isSubmitting = ref(false);
  
  // Handle form submission
  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email.value)) {
      emailError.value = true;
      toast.error('Please enter a valid email address.', {
        timeout: 3000,
        closeOnClick: true,
        pauseOnHover: true,
      });
      return;
    }
  
    isSubmitting.value = true;
    emailError.value = false;
  
    try {
      await api.post('subscribe', { email: email.value });
      emit('subscribe', email.value);
      toast.success('Subscribed! Check your inbox for exclusive offers.', {
        timeout: 4000,
        closeOnClick: true,
        pauseOnHover: true,
      });
      email.value = '';
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Subscription failed:', error);
    } finally {
      isSubmitting.value = false;
    }
  };
  </script>
  