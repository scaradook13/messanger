<script setup>
import Headers from './components/Header.vue'

</script>
<template>
  <div>
    <Headers />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>