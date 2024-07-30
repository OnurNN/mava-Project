<template>
    <div class="photo">
      <div class="photo-grid">
        <div class="photo-item" v-for="photo in photos" :key="photo.id">
          <img :src="photo.url" :alt="photo.alt" />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import photo from '../../assets/photo-1.jpg'
  import fotoğraf from '../../assets/fotoğraf.jpg'; 
  
  export default defineComponent({
    name: 'Photo',
    data() {
      return {
        photos: [
          { id: 1, url: photo, alt: 'Photo 1' },
          { id: 2, url: fotoğraf, alt: 'Photo 2' },
          
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  .photo {
    display: flex;
    flex-direction: column;
  }
  
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
  
  .photo-item img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }
  </style>
  