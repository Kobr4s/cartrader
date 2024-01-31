<template>
  <div
    class="font-serif text-2xl rounded-full flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-[1000px] text-2xl focus:outline-none"
      :class="cityError ? 'border-red-500 border border-4' : ''"
      placeholder="Search by City ..."
      v-model="city"
    />
    <button class="bg-sky-400 px-10 text-white" @click="handleSearch">
      Search
    </button>
  </div>
</template>
<script setup>
const city = ref("");
const cityError = ref(false);

const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  navigateTo(`city/${city.value}/car`);
};
</script>
