<template>
  <div class="timeline">
    <div class="post" v-for="post in posts" :key="post.id">
      <img class="post-picture" :src="post.picture" alt="Profile Picture" />
      <div class="post-details">
        <h3 class="post-name">{{ post.name }}</h3>
        <p class="post-date">{{ post.date }}</p>
        <p class="post-content">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import fotoğraf from '../../assets/fotoğraf.jpg'; 

export default defineComponent({
  name: 'Timeline',
  data() {
    return {
      posts: [
        {
          id: 1,
          picture: fotoğraf, 
          name: 'Onur Bektas',
          date: '28/07/2024 22:43',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum finibus maximus.',
        },
        {
          id: 1,
          picture: fotoğraf, 
          name: 'Onur Bektas',
          date: '28/07/2024 22:43',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum finibus maximus.asdasdasdsadsadasdasdasdasd',
        },

        
      ],
    };
  },
});
</script>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
}

.post {
  display: flex;
  margin-bottom: 20px;
}

.post-picture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.post-details {
  margin-left: 20px;
}

.post-name {
  font-size: 16px;
  font-weight: bold;
}

.post-date {
  font-size: 12px;
  color: gray;
}

.post-content {
  margin-top: 5px;
}
</style>
