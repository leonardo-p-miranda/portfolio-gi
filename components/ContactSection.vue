<template>
    <section id="contato" class="bg-white py-12 md:py-20">
      <div class="container mx-auto px-4 text-center max-w-xl">
        <h2 class="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
          Agende Sua Consulta
        </h2>
        <p class="text-gray-600 mb-8">
          Dê o primeiro passo para alcançar a estética facial dos seus sonhos.
        </p>
  
        <form
          @submit.prevent="handleSubmit"
          class="space-y-4 text-left"
        >
          <div>
            <label for="name" class="block mb-1 font-medium text-gray-700">Nome</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label for="phone" class="block mb-1 font-medium text-gray-700">Telefone</label>
            <input
              v-model="form.phone"
              type="tel"
              id="phone"
              required
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              placeholder="(xx) 9xxxx-xxxx"
            />
          </div>
          <div>
            <label for="email" class="block mb-1 font-medium text-gray-700">Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              placeholder="voce@email.com"
            />
          </div>
          <div>
            <label for="message" class="block mb-1 font-medium text-gray-700">Mensagem</label>
            <textarea
              v-model="form.message"
              id="message"
              rows="4"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              placeholder="Como podemos ajudar?"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-primary text-white p-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue'
  
  const form = reactive({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  
  function handleSubmit() {
    alert(`Obrigado, ${form.name}! Recebemos seu contato e retornaremos em breve.`)
    form.name = ''
    form.phone = ''
    form.email = ''
    form.message = ''
  }
  </script>
  