<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl text-red-500">{{ error.statusCode }} Error</h1>
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <button
      class="mt-7 text-2xl bg-sky-500 px-7 py-4 rounded text-white"
      @click="handleError"
    >
      Go Back Home
    </button>
  </div>
</template>
<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>
