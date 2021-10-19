<template>
  <div>
    <Header />
    <h3>Home Page</h3>
    <h4>{{ joke }}</h4>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Home",
  components: {
    Header,
  },
  computed: {
    joke() {
      return this.$store.getters.getCurrentJoke;
    },
  },
};
</script>

<style>
</style>