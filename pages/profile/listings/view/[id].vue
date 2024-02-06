<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
  </div>
</template>
<script setup>
definePageMeta({
  layout: "custom",
  /*
    Permet de protéger les pages afin de savoir si l'utisateur est connecté 
    => voir repertoire middleware fichier auth.js
  */
  middleware: ["auth"],
});
</script>
