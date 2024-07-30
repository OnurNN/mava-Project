<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <div class="logo">
        <h2><img src="../assets/logo-5e942556.svg" alt="log">Mava Project</h2>
      </div>
      <nav class="sidebar-nav">
        <div class="dropdown">
          <a @click="toggleDropdown">
            <span class="dashboard-icon">Dashboard</span>
            <span :class="{'arrow-up': showDropdown, 'arrow-down': !showDropdown}"></span>
          </a>
          <div v-if="showDropdown" class="dropdown-content">
            <a @click="changeContent('Analytical')">Analytical</a>
            <a @click="changeContent('Ecommerce')">eCommerce</a>
            <a @click="changeContent('Crypto')">Crypto</a>
          </div>
        </div>
        <a @click="changeContent('Calendar')">Calendar</a>
        <a @click="changeContent('Contacts')">Contacts</a>
        <a @click="changeContent('Gallery')">Gallery</a>
        <a @click="changeContent('Cards')">Cards</a>
        <a @click="changeContent('Mail')">Mail</a>
        <a @click="changeContent('Ecommerce')">eCommerce</a>
        <a @click="changeContent('Layout')">Layout</a>
        <a @click="changeContent('Themes')">Themes</a>
        <a @click="changeContent('MultiLevel')">Multi Level</a>
        <a @click="changeContent('Icons')">Icons</a>
        <a @click="changeContent('MultiLanguage')">Multi Language</a>
        <a @click="changeContent('Typography')">Typography</a>
      </nav>
    </aside>
    <div class="main-content">
      <header class="main-header">
        <div class="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div class="user-info">
          <span @click="changeContent('Profile')">Onur Bektaş</span>
          <div class="dropdown-profile">
            <a @click="toggleDropdownProfile">
              <span class="dashboard-icon"><img src="../assets/fotoğraf.jpg" alt="log"></span>
            </a>
            <div v-if="showDropdownProfile" class="dropdown-content-profile">
              <a @click="changeContent('Profile')">Profile</a>
              <a @click="changeContent('Calendar')">Calendar</a>
              <a @click="changeContent('Contacts')">Contacts</a>
            </div>
          </div>
        </div>
      </header>
      <div class="content">
        <component :is="currentComponent"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Analytical from './Analytical.vue';
import Ecommerce from './Ecommerce.vue';
import Crypto from './Crypto.vue';
import Profile from './profile/Profile.vue';
import Calendar from './Calendar.vue';
import Contacts from './Contacts.vue';
import Cards from './Cards.vue';
import Gallery from './Gallery.vue';



export default defineComponent({
  name: 'Home',
  components: {
    Analytical,
    Ecommerce,
    Crypto,
    Profile,
    Calendar,
    Contacts,
    Cards,
    Gallery,
   
   
  },
  setup() {
    const currentComponent = ref('Analytical');
    const showDropdown = ref(false);
    const showDropdownProfile = ref(false);

    function changeContent(componentName: string) {
      currentComponent.value = componentName;
      showDropdown.value = false;
      showDropdownProfile.value = false;
    }

    function toggleDropdown() {
      showDropdown.value = !showDropdown.value;
      showDropdownProfile.value = false;
    }

    function toggleDropdownProfile() {
      showDropdownProfile.value = !showDropdownProfile.value;
      showDropdown.value = false;
    }

    return {
      currentComponent,
      showDropdown,
      showDropdownProfile,
      changeContent,
      toggleDropdown,
      toggleDropdownProfile,
    };
  },
});
</script>

<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
  background-color: #f1f3f4;
  color: black;
}

.sidebar {
  width: 250px;
  background-color: #f1f3f4;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #000000;
  overflow-y: auto;
}

.logo h2 {
  margin-bottom: 10px;
  color: #000000;
  background-color: #f1f3f4;
}
.logo img {
  width: 25px;
  height: 25px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
}

.sidebar-nav a {
  padding: 10px;
  color: #000000;
  text-decoration: none;
  background-color: #f1f3f4;
  align-items: center;
}

.sidebar-nav a:hover {
  background-color: #f1f3f4;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f1f3f4;
  border-bottom: 1px solid #e9ecef;
}

.search input {
  padding: 5px 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info span {
  margin-left: 10px;
  color: #2b3d52;
}

.user-info img {
  width: 30px;
  height: 30px;
}

.content {
  padding: 20px;
  background-color: #f1f3f4;
  flex: 1;
  overflow-y: auto;
}

.dropdown {
  position: relative;
  padding-bottom: 10px;
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: 50%;
  
}
.dropdown-content-profile{
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: 50%;
}

.dropdown-content a {
  padding: 10px;
  color: #000000;
  text-decoration: none;
}

.dropdown-content a:hover {
  background-color: #f1f3f4;
}

.dashboard-icon {
  margin-right: 35px;
  border-radius: 50%;
  
}

.arrow-up::after {
  content: "▲";
  font-size: 0.8em;
}

.arrow-down::after {
  content: "▼";
  font-size: 0.8em;
}
</style>
