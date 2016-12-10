<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" />
    
    <p><input v-model="message" /></p>
    <h1 class="title">{{ message }}</h1>
    
    <router-link class="button" to="/about">About page</router-link>
    
  </section>
</template>

<script>
export default {
    data: () => ({    
        message: 'My Message 2'
    })
}
</script>

<style scoped>
.title {
  margin: 50px 0;
}
</style>
