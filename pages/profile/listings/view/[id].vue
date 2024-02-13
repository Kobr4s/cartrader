<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
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

const route = useRoute();

const { data: messages } = useFetch(
  `/api/car/listings/${route.params.id}/message`
);
</script>
