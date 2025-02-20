<template>
    <section id="procedimentos" class="bg-[#FFF9F9] py-12 md:py-20">
      <div class="container mx-auto px-4 text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
          Nossos Procedimentos
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Técnicas avançadas e produtos de alta qualidade para resultados naturais e satisfatórios.
        </p>
      </div>
  
      <div
        class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(item, index) in procedures"
          :key="index"
          class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col"
        >
          <h3 class="text-xl font-bold text-primary mb-2">
            {{ item.title }}
          </h3>
          <ul class="text-left text-gray-600 list-disc list-inside mb-2">
            <li v-for="b in item.benefits" :key="b">{{ b }}</li>
          </ul>
          <p class="text-gray-500 mt-auto">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  interface Procedure {
    title: string
    benefits: string[]
    description: string
  }
  
  const procedures: Procedure[] = [
    {
      title: 'TB',
      benefits: ['Suavização de Rugas', 'Não Invasivo', 'Resultados Duradouros'],
      description: 'Tratamento para rugas, bruxismo e enxaqueca.'
    },
    {
      title: 'Preenchimento Facial',
      benefits: ['Restauração de Volume', 'Redução de Rugas', 'Efeito Imediato'],
      description: 'Uso de ácido hialurônico ou outras substâncias para preencher sulcos.'
    },
    {
      title: 'Preenchimento Labial',
      benefits: ['Aumento de Volume', 'Hidratação', 'Correção de Assimetrias'],
      description: 'Proporciona lábios mais volumosos e definidos.'
    },
  ]
  </script>
  