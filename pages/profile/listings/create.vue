<template>
  <div>
    <div>
      <h1 class="text-6xl mt-24">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CarAdTextarea
        title="Description"
        name="description"
        placeholder="Enter a description"
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" />
    </div>
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

const { makes } = useCars();

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null,
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Série 3",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2024",
  },
  {
    id: 3,
    title: "Miles *",
    name: "mile",
    placeholder: "6800",
  },
  {
    id: 4,
    title: "Cities *",
    name: "city",
    placeholder: "Liege",
  },
  {
    id: 5,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 6,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];
</script>
