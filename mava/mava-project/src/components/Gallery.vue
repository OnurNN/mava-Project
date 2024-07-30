<template>
  <div class="gallery-container">
    <div class="header">
      <h1>Gallery</h1>
      <p>Photos</p>
    </div>
    <div class="photos">
      <div class="photo" v-for="photo in photos" :key="photo.id">
        <img :src="photo.src" :alt="photo.alt" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import photo1 from '../assets/photo-1.jpg'

export default defineComponent({
  name: 'Gallery',
  data() {
    return {
      photos: [
        { id: 1, src: photo1, alt: 'Photo 1' },
        
        // Add more photo objects here
      ],
    };
  },
});
</script>

<style scoped>
.gallery-container {
  width: 100%;
  padding: 20px;
}

.header {
  background-color: #5c9ded;
  padding: 20px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

.photos {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 200px;
  height: 150px;
}

.photo {
  flex: 1 1 calc(25% - 10px);
  box-sizing: border-box;
}

.photo img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
