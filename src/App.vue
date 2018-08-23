<template>
  <div id="app">
    <v-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/global/Header'

export default {
  components: {
    'v-header': Header
  }
}
</script>
