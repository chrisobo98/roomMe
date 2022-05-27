<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex-1">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>

export default {
  name: 'DefaultView',
  layout: 'DefaultView'
}
</script>
