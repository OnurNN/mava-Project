<template>
  <div class="profile-container">
    <div class="profile-header">
      <img class="profile-background" src="../../assets/photo-1.jpg" alt="Background Image" />
      <div class="profile-details">
        <img class="profile-picture" src="../../assets/fotoğraf.jpg" alt="Profile Picture" />
        <h2 class="profile-name">Onur Bektaş</h2>
      </div>
    </div>
    <div class="profile-content">
      <div class="profile-tabs">
        <button :class="{ active: currentTab === 'Timeline' }" @click="currentTab = 'Timeline'">Timeline</button>
        <button :class="{ active: currentTab === 'Info' }" @click="currentTab = 'Info'">Info</button>
        <button :class="{ active: currentTab === 'Photo' }" @click="currentTab = 'Photo'">Photo</button>
      </div>
      <div class="profile-tab-content">
        <Timeline v-if="currentTab === 'Timeline'" />
        <Info v-if="currentTab === 'Info'" />
        <Photo v-if="currentTab === 'Photo'" />
      </div>  
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Timeline from './Timeline.vue';
import Info from './Info.vue';
import Photo from './Photo.vue';

export default defineComponent({
  name: 'Profile',
  components: {
    Timeline,
    Info,
    Photo,
  },
  setup() {
    const currentTab = ref('Timeline');

    return {
      currentTab,
    };
  },
});
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
}

.profile-header {
  position: relative;
}

.profile-background {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.profile-details {
  position: absolute;
  bottom: 0;
  left: 20px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  padding: 10px;
  border-radius: 10px;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid white;
  margin-right: 15px;
}

.profile-name {
  margin-left: 20px;
  color: black;
}

.profile-content {
  margin-top: 60px;
  padding: 20px;
}

.profile-tabs {
  display: flex;
  border-bottom: 1px solid #e9ecef;
}

.profile-tabs button {
  padding: 10px 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.profile-tabs button.active {
  border-bottom: 2px solid #007bff;
  font-weight: bold;
}

.profile-tab-content {
  margin-top: 20px;
}
</style>
