<template>
 
    <router-view />

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'App',
  });
  </script>
  
  <style >
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  

  
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color: #2c3e50;
    color: #fff;
  }
  
  </style>
  