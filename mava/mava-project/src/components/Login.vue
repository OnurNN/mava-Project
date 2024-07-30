<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo"><img src="../assets/logo-5e942556.svg" alt="log"></div>
      <form @submit.prevent="login">
        <div class="input-group">
          <input type="text" v-model="username" placeholder="Username" required />
        </div>
        <div class="input-group">
          <input type="password" v-model="password" placeholder="Password" required />
        </div>
        <div class="options">
          <label>
            <input type="checkbox" v-model="rememberMe" /> Remember Me
          </label>
          <a @click.prevent="goToForgetPassword" href="#">Forgot Password?</a>
        </div>
        <button type="submit" class="login-button">LOGIN</button>
        <div class="divider">
          <span>or</span>
        </div>
      </form>
      <div class="social-login">
        <button @click="loginWithGoogle" class="google-login">Log in with Google</button>
        <button @click="loginWithFacebook" class="facebook-login">Log in with Facebook</button>
      </div>
      <div class="sign-up">
        Don't have an account? <a @click.prevent="goToSignIn" href="#">Sign in</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  setup() {
    const username = ref('');
    const password = ref('');
    const rememberMe = ref(false);
    const router = useRouter();

    const login = () => {
      console.log('Logging in:', { username: username.value, password: password.value, rememberMe: rememberMe.value });

      // Simulate a successful login
      if (username.value && password.value) {
        router.push('/home'); // Redirect to the home page
      }
    };

    const loginWithGoogle = () => {
      console.log('Logging in with Google');
      // Add your Google login logic here
    };

    const loginWithFacebook = () => {
      console.log('Logging in with Facebook');
      // Add your Facebook login logic here
    };

    const goToSignIn = () => {
      router.push('/SignIn'); 
    };

    const goToForgetPassword = () => {
      router.push('/ForgetPassword'); 
    };

    return {
      username,
      password,
      rememberMe,
      login,
      loginWithGoogle,
      loginWithFacebook,
      goToSignIn,
      goToForgetPassword,
    };
  },
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2c3e50;
}

.login-card {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px; /* Adjust the width as needed */
}

.logo {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.logo img{
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
  margin-bottom: 0.5rem;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: grey;
}

.options label {
  display: flex;
  align-items: center;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #34495e;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.divider {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: grey;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #aaa;
}

.divider::before {
  margin-right: 0.5rem;
}

.divider::after {
  margin-left: 0.5rem;
}

.social-login {
  margin-top: 1rem;
}

.social-login button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.google-login {
  background-color: #db4437;
  color: #fff;
}

.facebook-login {
  background-color: #3b5998;
  color: #fff;
}

.sign-up {
  margin-top: 1rem;
  color: grey;
}

.sign-up a {
  padding-left: 20px;
  color: #3498db;
  text-decoration: none;
}
</style>