<template>
  <div>
    <!-- NAVBAR -->
    <header
      class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
    >
      <NuxtLink to="/" class="text-3xl font-mono">Cartrader</NuxtLink>
      <div v-if="user" class="flex">
        <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
        <p class="cursor-pointer" @click="logout">Logout</p>
      </div>
      <NuxtLink v-else to="/login">Login</NuxtLink>
    </header>

    <!-- NAVBAR -->
  </div>
</template>
<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  // 1) make user.value = null
  // 2) remove JWT from cookie browser
  const { error } = await supabase.auth.signOut();

  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: { event: "SIGNED OUT", session: null },
    });
  } catch (error) {
    console.log(error);
  }

  if (error) {
    console.log(error);
  }
  // 3) Navigate to HomePAge
  user.value = null;
  navigateTo("/");
};
</script>
