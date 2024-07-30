<template>
    <div class="sign-in-container">
      <div class="sign-in-card">
        <div class="logo"><img src="../assets/logo-5e942556.svg" alt="logo"></div>
        <form @submit.prevent="signIn">
          <div class="input-group">
            <input type="text" v-model="name" placeholder="Name" required />
          </div>
          <div class="input-group">
            <input type="email" v-model="email" placeholder="E-mail" required />
          </div>
          <div class="input-group">
            <input type="password" v-model="password" placeholder="Password" required />
          </div>
          <div class="input-group">
            <input type="password" v-model="confirmPassword" placeholder="Password (confirm)" required />
          </div>
          <div class="options">
            <label>
              <input type="checkbox" v-model="termsAccepted" required /> I read and accept terms
            </label>
          </div>
          <button type="submit" class="sign-in-button">SIGN IN</button>
        </form>
        <div class="login-link">
          Already have an account? <a @click.prevent="goToLogin" href="#">Login</a>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'SignIn',
    setup() {
      const name = ref('');
      const email = ref('');
      const password = ref('');
      const confirmPassword = ref('');
      const termsAccepted = ref(false);
      const router = useRouter();
  
      const signIn = () => {
        console.log('Signing in:', { name: name.value, email: email.value, password: password.value, confirmPassword: confirmPassword.value, termsAccepted: termsAccepted.value });
        // Add your sign-in logic here
      };
  
      const goToLogin = () => {
        router.push('/'); // Redirect to the Login page
      };
  
      return {
        name,
        email,
        password,
        confirmPassword,
        termsAccepted,
        signIn,
        goToLogin,
      };
    },
  });
  </script>
  
  <style scoped>
  .sign-in-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2c3e50;
  }
  
  .sign-in-card {
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
  
  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    color: grey;
  }
  
  .options label {
    display: flex;
    align-items: center;
  }
  
  .sign-in-button {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #34495e;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .login-link {
    margin-top: 1rem;
    color: grey;
  }
  
  .login-link a {
    padding-left: 5px;
    color: #3498db;
    text-decoration: none;
  }
  </style>
  