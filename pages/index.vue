<template>
  <HeroSection />
  <AboutSection />
  <ProceduresSection />
  <TestimonialsSection />
  <ContactSection />
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ProceduresSection from '~/components/ProceduresSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import ContactSection from '~/components/ContactSection.vue'

definePageMeta({
  layout: 'default'
})
</script>