<template>
  <section class="py-12 md:py-20 bg-gray-50">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-extrabold text-secondary mb-6">
        Depoimentos
      </h2>
      <p class="max-w-xl mx-auto text-gray-600 mb-10">
        Veja o que nossos pacientes dizem sobre seus novos sorrisos.
      </p>

      <div
        class="flex w-full justify-center overflow-x-auto gap-8 snap-x snap-mandatory px-2 py-2"
      >
        <div
          v-for="(item, idx) in testimonials"
          :key="idx"
          class="flex-shrink-0 snap-center bg-white rounded-xl shadow-md p-6 w-[320px] flex flex-col items-center"
        >
          <!-- Foto do Paciente -->
          <img
            :src="item.photo"
            alt="Foto da paciente {{ item.author }}"
            class="w-20 h-20 rounded-full object-cover border-4 border-rose-500 mb-4"
          />
          <!-- Texto do Depoimento -->
          <p class="text-gray-700 italic mb-4">“{{ item.text }}”</p>
          <!-- Nome do Paciente -->
          <span class="block font-semibold text-secondary">
            — {{ item.author }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Testimonial {
  text: string;
  author: string;
  photo: string;
}

import patient1 from '../public/assets/img/patient1.jpg'
import patient2 from '../public/assets/img/patient2.jpg'
import patient3 from '../public/assets/img/patient3.jpg'

const testimonials: Testimonial[] = [
  {
    text: "A Dra. Giovana transformou meu sorriso e minha autoestima!",
    author: "Maria S.",
    photo: patient1,
  },
  {
    text: "Profissional atenciosa, explica cada detalhe e me passou muita confiança.",
    author: "Renata L.",
    photo: patient2,
  },
  {
    text: "Resultados incríveis, super recomendo!",
    author: "Camila P.",
    photo: patient3,
  },
];
</script>
