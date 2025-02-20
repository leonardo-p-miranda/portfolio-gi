<template>
    <section class="w-full bg-white py-12 px-4">
      <div class="container mx-auto text-center max-w-4xl">
        <h2 class="text-3xl font-bold text-pink-600 mb-8">Depoimentos</h2>
        <swiper
          :modules="[Navigation, Pagination]"
          navigation
          pagination
          space-between="16"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-gray-50 rounded-md shadow p-6 mx-2 hover:shadow-lg transition-all hover-scale"
          >
            <p class="italic text-gray-700 mb-4 animate-fade-in">
              “{{ testimonial.text }}”
            </p>
            <span class="font-semibold text-gray-800">— {{ testimonial.author }}</span>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination } from 'swiper'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  
  interface Testimonial {
    text: string
    author: string
  }
  const testimonials: Testimonial[] = [
    { text: 'Tive uma experiência incrível...', author: 'Maria S.' },
    { text: 'Profissional atenciosa...', author: 'Renata L.' },
    { text: 'O resultado ficou perfeito...', author: 'Camila P.' },
  ]
  </script>
  