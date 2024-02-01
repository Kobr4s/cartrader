<template>
  <div>
    <!-- CAR DETAIL PAGE -->
    <div v-if="car">
      {{ car }}
      <CarDetailHero :car="car" />
      <CarDetailAttributes :features="car.features" />
      <CarDetailDescription :description="car.description" />
      <CarDetailContact />
    </div>
    <!-- CAR DETAIL PAGE -->
  </div>
</template>
<script setup>
const route = useRoute();
const { cars } = useCars();

const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.name),
});

const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id);
  });
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID of ${route.params.id} does not exist`,
  });
}

definePageMeta({
  layout: "custom",
});
</script>
