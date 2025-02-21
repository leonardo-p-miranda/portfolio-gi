<template>
    <section id="procedimentos" class="bg-[#FFF9F9] py-12 md:py-20">
      <!-- Cabeçalho da seção -->
      <div class="container mx-auto px-4 text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
          Nossos Procedimentos
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Técnicas avançadas e produtos de alta qualidade para resultados naturais
          e satisfatórios.
        </p>
      </div>
  
      <!-- Grid de Cards -->
      <div class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in procedures"
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          data-aos="fade-up"
        >
          <!-- Imagem corrigida -->
          <div class="relative">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 hover:opacity-0"
            ></div>
          </div>
          <!-- Conteúdo do card -->
          <div class="p-6 flex flex-col">
            <h3 class="text-xl font-bold text-primary mb-2">
              {{ item.title }}
            </h3>
            <ul class="text-left text-gray-600 list-disc list-inside mb-2">
              <li v-for="(benefit, i) in item.benefits" :key="i">
                {{ benefit }}
              </li>
            </ul>
            <p class="text-gray-500 mt-auto">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // 1) Import each image directly from public folder
  import tbImage from '/assets/img/procedures/tb.jpg'
  import facialImage from '/assets/img/procedures/preenchimento-facial.jpg'
  import labialImage from '/assets/img/procedures/preenchimento-labial.jpg'
  
  // 2) Define the interface (same as before).
  interface Procedure {
    title: string;
    benefits: string[];
    description: string;
    image: string;
  }
  
  // 3) Use the imports in your data array.
  const procedures: Procedure[] = [
    {
      title: 'TB',
      benefits: ['Suavização de Rugas', 'Não Invasivo', 'Resultados Duradouros'],
      description: 'Tratamento para rugas, bruxismo e enxaqueca.',
      image: tbImage,
    },
    {
      title: 'Preenchimento Facial',
      benefits: ['Restauração de Volume', 'Redução de Rugas', 'Efeito Imediato'],
      description: 'Uso de ácido hialurônico ou outras substâncias para preencher sulcos.',
      image: facialImage,
    },
    {
      title: 'Preenchimento Labial',
      benefits: ['Aumento de Volume', 'Hidratação', 'Correção de Assimetrias'],
      description: 'Proporciona lábios mais volumosos e definidos.',
      image: labialImage,
    },
  ];
  </script>
  