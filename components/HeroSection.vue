<template>
    <section
      id="inicio"
      class="bg-gradient-to-br from-[#FFD0D0] via-white to-[#FFF9F9] py-12 md:py-24"
    >
      <div class="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
        <!-- Texto Hero -->
        <div class="order-2 md:order-1">
          <h1 class="text-4xl md:text-5xl font-extrabold text-secondary leading-tight mb-4">
            Sorria com confiança, <br class="hidden md:block" />
            realce sua beleza natural
          </h1>
          <p class="text-gray-700 text-lg md:text-xl mb-6 max-w-md">
            Sou a Dra. Giovana Miranda, especialista em Harmonização Orofacial.
            Cuido do seu sorriso e do seu bem-estar, com técnicas modernas
            e resultados naturais.
          </p>
          <button
            @click="scrollToProcedures"
            class="bg-rose text-white rounded-md px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            Conheça nossos procedimentos
          </button>
        </div>
        <!-- Imagem Hero -->
        <div class="order-1 md:order-2 flex justify-center">
          <img
            src="@/assets/images/hero.jpg"
            alt="Dra. Giovana Miranda"
            class="w-full h-auto max-w-md rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  function scrollToProcedures() {
    document
      .getElementById('procedimentos')
      ?.scrollIntoView({ behavior: 'smooth' })
  }
  </script>
  