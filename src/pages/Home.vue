<template>
  <!-- <-- start of hero section -->
  <section
    class="relative mx-2 h-[200vh] bg-fixed bg-center bg-no-repeat bg-cover overflow-hidden"
    style="
      background-image:
        linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0) 40%),
        url('./src/assets/hero.jpeg');
      backdrop-filter: blur(12px);
    "
  >
    <div class="absolute inset-0 flex justify-center items-center text-white text-center z-10 px-2 ">
      <div class="flex flex-col justify-center items-center max-w-2xl mx-auto bg-slate-500 bg-opacity-20 rounded-full p-6 shadow-2xl">
        <h2 class="drop-shadow-md leading-relaxed">
          Discover high-performance gym and sportswear designed to fuel your passion and elevate your workouts. Our gear is crafted for comfort, durability, and style.
        </h2>
        <p class="mt-6 text-lg md:text-xl drop-shadow-sm font-medium">
          Gear Up, Push Limits, Conquer Goals.
        </p>
        <button class="bg-white rounded-lg text-black mt-4 p-3" type="button">EXPLORE</button>
      </div>
    </div>
  </section>
  <!-- <-- end of hero section -->

   <!-- <-- new arrival section -->
   <Slider
    title="NEW ARRIVALS ✨"
    :items="products"
    :visibleItems="4"
  />
  <!-- <-- end of new arrival section -->
 
  <!-- <-- fast selling section -->
  <ProductShowcase
    title="FAST SELLING"
    :mainProduct="products[0]"
    :secondaryProduct="products[1]"
  />
  <!-- <-- end of fast selling section -->

  <!-- <-- POPULAR selling section -->
  <section class="mt-12 h-full bg-slate-300">
    <div class="flex flex-col ml-9  gap-6 w-1/3">
      <div class="mt-12">
        <h2 class="text-gray-900 text-balance text-justify text-3xl">POPULAR SELLING</h2>
      </div>
      <div>
        <div class="flex gap-4">
         
          <button class="bg-slate-950 text-gray-50 flex justify-center items-center p-5 w-50 rounded-full shadow-md h-10">Women</button>
          <button class="bg-slate-50 flex justify-center items-center p-5 h-10  text-gray-950 w-50 rounded-full shadow-md hover:bg-slate-950 hover:text-gray-50">Men</button>
        </div>
      </div>
    </div>
      <Slider
    :items="products"
    :visibleItems="4"
    
  />
  <div class="my-5 h-6">
  </div>
</section>


</template>

<script>
import Slider from "../components/Slider.vue";
import ProductShowcase from "../components/ProductShowcase.vue";

export default {
  components: {
    Slider,
    ProductShowcase,
  },
  data() {
    return {
      products: [
          {
            image: "/images/product/product1.jpeg",
            name: "Product 1",
            price: "$99.99",
            colors: ["bg-black", "bg-red-600", "bg-green-800", "bg-yellow-400"],
          },
          {
            image: "/images/product/product2.jpeg",
            name: "Product 2",
            price: "$89.99",
            colors: ["bg-black", "bg-red-600"],
          },
          {
            image: "/images/product/product3.jpeg",
            name: "Product 3",
            price: "$99.99",
            colors: ["bg-green-800", "bg-yellow-400"],
          },
          {
            image: "/images/product/product5.jpeg",
            name: "Product 5",
            price: "$99.99",
            colors: ["bg-black", "bg-yellow-600"],
          },

          {
            image: "/images//product/product1.jpeg",
            name: "Product 5",
            price: "$99.99",
            colors: ["bg-black", "bg-red-600"],
          },
          {
            image: "/images/product/product3.jpeg",
            name: "Product 7",
            price: "$99.99",
            colors: ["bg-black", "bg-blue-600"],
          },
          {
            image: "/images/product/product2.jpeg",
            name: "Product 8",
            price: "$99.99",
            colors: ["bg-black", "bg-green-600"],
          },
          {
            image: "/images/product/product1.jpeg",
            name: "Product 9",
            price: "$99.99",
            colors: ["bg-black", "bg-brown-600"],
          },
      ],

    }
  }
}
</script>


