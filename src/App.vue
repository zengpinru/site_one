<template>
  <div id="app">
    <v-header/>
    <router-view/>
    <v-footer/>
  </div>
</template>

<script>
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>
