<template>
  <section id="galeria" class="py-12 md:py-20 bg-white">
    <div class="container mx-auto px-4 text-center mb-8">
      <h2 class="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
        Resultados e Procedimentos
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Confira alguns dos procedimentos realizados e seus resultados. Foco na
        naturalidade e harmonia facial.
      </p>
    </div>

    <!-- Grid de imagens -->
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in galleryImages"
          :key="index"
          class="relative group cursor-pointer"
          @click="openLightbox(index)"
        >
          <img
            :src="`/assets/img/procedures/procedimento(${item.id}).jpg`"
            :alt="item.alt"
            class="w-full h-60 object-cover rounded-md shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <!-- Overlay hover -->
          <div
            class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
          ></div>
          <!-- Título (opcional) -->
          <div
            class="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <h3 class="text-lg font-semibold drop-shadow">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <transition name="fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        @click.self="closeLightbox"
      >
        <div class="relative max-w-3xl w-full">
          <img
            :src="`/assets/img/procedures/procedimento(${currentImage?.id}).jpg`"
            :alt="currentImage?.alt"
            class="mx-auto rounded-md shadow-lg max-h-[80vh] object-contain"
          />
          <!-- Botão fechar -->
          <button
            class="absolute flex justify-center p-0 items-center w-10 h-10 top-2 right-2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition"
            @click="closeLightbox"
          >
            &times;
          </button>
          <!-- Título/legenda opcional no lightbox -->
          <div class="text-white mt-2 text-center" v-if="currentImage?.title">
            {{ currentImage.title }}
          </div>
          <div
            class="text-gray-300 text-sm text-center"
            v-if="currentImage?.description"
          >
            {{ currentImage.description }}
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface GalleryItem {
  id: number;
  alt: string;
  title?: string;
  description?: string;
}

// Exemplo de dados (use as imagens que você forneceu).
// Ajuste os caminhos conforme a pasta/public do seu projeto.
const galleryImages = ref<GalleryItem[]>([
  {
    id: 1,
    alt: "Procedimento de maquiagem",
    title: "Makeup e Harmonização",
    description:
      "Realce da beleza natural com maquiagem e harmonização facial.",
  },
  {
    id: 2,
    alt: "Antes e Depois",
    title: "Antes e Depois",
    description: "Resultado visível na região dos lábios após procedimento.",
  },
  {
    id: 3,
    alt: "Lábios Preenchidos",
    title: "Preenchimento Labial",
    description: "Aspecto hidratado e volume equilibrado.",
  },
  {
    id: 4,
    alt: "Close de Lábios",
    title: "Hidratação e Contorno",
    description: "Técnica que valoriza o contorno labial.",
  },
  {
    id: 5,
    alt: "Produtos Utilizados",
    title: "Produtos de Alta Qualidade",
  },
  {
    id: 6,
    alt: "Lábios com brilho",
    title: "Procedimento Labial",
    description: "Brilho e volume natural.",
  },
]);

// Estado do lightbox
const lightboxOpen = ref(false);
const currentIndex = ref<number | null>(null);

const openLightbox = (index: number) => {
  currentIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  currentIndex.value = null;
};

const currentImage = computed(() => {
  if (currentIndex.value !== null) {
    return galleryImages.value[currentIndex.value];
  }
  return null;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
