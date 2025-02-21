<template>
    <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div class="flex items-center justify-between h-16 px-4 sm:px-8">
        <!-- LOGO EM IMAGEM -->
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/assets/img/logo.jpg"
            alt="Logo Dra. Giovana Miranda"
            class="h-8 object-contain"
          />
        </NuxtLink>
  
        <!-- Botão hamburguer (mobile) -->
        <button
          class="sm:hidden text-gray-700 focus:outline-none"
          @click="isOpen = !isOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
  
        <!-- Navegação normal (desktop) -->
        <nav class="hidden sm:flex gap-6 items-center">
          <NuxtLink to="/#inicio" class="hover:text-rose-600 font-medium">Início</NuxtLink>
          <NuxtLink to="/#sobre" class="hover:text-rose-600 font-medium">Sobre Mim</NuxtLink>
          <NuxtLink to="/#procedimentos" class="hover:text-rose-600 font-medium">Procedimentos</NuxtLink>
          <NuxtLink to="/#contato" class="hover:text-rose-600 font-medium">Contato</NuxtLink>
          <!-- CTA -->
          <button
            @click="scrollToContact"
            class="bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-600"
          >
            Agendar
          </button>
        </nav>
      </div>
  
      <!-- Menu mobile -->
      <transition name="fade">
        <div
          v-if="isOpen"
          class="sm:hidden bg-white border-t border-gray-200"
        >
          <nav class="flex flex-col gap-4 p-4">
            <NuxtLink
              to="/#inicio"
              class="hover:text-rose-600 font-medium"
              @click="closeMenu"
            >
              Início
            </NuxtLink>
            <NuxtLink
              to="/#sobre"
              class="hover:text-rose-600 font-medium"
              @click="closeMenu"
            >
              Sobre Mim
            </NuxtLink>
            <NuxtLink
              to="/#procedimentos"
              class="hover:text-rose-600 font-medium"
              @click="closeMenu"
            >
              Procedimentos
            </NuxtLink>
            <NuxtLink
              to="/#contato"
              class="hover:text-rose-600 font-medium"
              @click="closeMenu"
            >
              Contato
            </NuxtLink>
            <button
              @click="() => { scrollToContact(); closeMenu(); }"
              class="bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-600"
            >
              Agendar
            </button>
          </nav>
        </div>
      </transition>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  
  function scrollToContact() {
    const el = document.getElementById('contato')
    el?.scrollIntoView({ behavior: 'smooth' })
  }
  
  function closeMenu() {
    isOpen.value = false
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  