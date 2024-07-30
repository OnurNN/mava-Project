<template>
    <div class="forget-password-container">
      <div class="forget-password-card">
        <div class="logo"><img src="../assets/logo-5e942556.svg" alt="logo"></div>
        <form @submit.prevent="sendResetLink">
          <div class="input-group">
            <input type="email" v-model="email" placeholder="E-mail" required />
          </div>
          <button type="submit" class="reset-button">SEND RESET LINK</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'ForgetPassword',
    setup() {
      const email = ref('');
  
      const sendResetLink = () => {
        console.log('Sending reset link to:', email.value);
        // Add your logic to send a reset link to the email
      };
  
      return {
        email,
        sendResetLink,
      };
    },
  });
  </script>
  
  <style scoped>
  .forget-password-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2c3e50;
  }
  
  .forget-password-card {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 350px;
  }
  
  .logo {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .logo img {
    width: 50px;
    height: 50px;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .reset-button {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #34495e;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }
  </style>
  