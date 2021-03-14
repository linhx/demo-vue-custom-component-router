<template>
  <div>
    <h4>{{ message }}</h4>

    <router-link to="/home">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello Vue-custom-element!'
      };
    },
    created() {
      console.log('demo-basic created()');
    }
  };
</script>
