<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <FormComp />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import FormComp from './components/FormComp.vue'


export default defineComponent({
    name: "App",
    components: { SideBar, FormComp }
});
</script>

<style>


</style>
