<template>
  <div>
    <h3>Copyright &copy;{{ getYear() }} Project Management</h3>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
</style>