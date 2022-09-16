<script>
export default {
  created() {
    setTimeout(() => {
      this.$router.push({ name: "home" });
    }, 2000);
  },
};
</script>

<template>
  <div class="columns is-full">
    <div class="column is-full m-6">
      <h1 class="title">404</h1>
      <h2 class="subtitle">Not Found</h2>
    </div>
  </div>
</template>
