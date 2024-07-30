<template>
  <div class="calendar-container">
    <vue-cal
      :events="events"
      @cell-click="handleCellClick"
      class="custom-calendar"
      style="height: 800px"
    />
    <button class="add-event-button" @click="showEventForm = true">+</button>
    <div v-if="showEventForm" class="modal">
      <div class="modal-content">
        <span class="close" @click="showEventForm = false">&times;</span>
        <h2>Add Event</h2>
        <form @submit.prevent="addEvent">
          <label for="title">Title:</label>
          <input type="text" v-model="newEvent.title" required />

          <label for="start">Start Date and Time:</label>
          <input type="datetime-local" v-model="newEvent.start" required />

          <label for="end">End Date and Time:</label>
          <input type="datetime-local" v-model="newEvent.end" required />

          <label for="description">Description:</label>
          <textarea v-model="newEvent.description"></textarea>

          <button type="submit">Add Event</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

interface Event {
  start: string;
  end: string;
  title: string;
  description?: string;
}

export default defineComponent({
  name: 'Calendar',
  components: {
    VueCal,
  },
  data() {
    return {
      events: [
        {
          start: '2024-07-26 12:00',
          end: '2024-07-26 14:00',
          title: 'Meeting with client',
        },
        {
          start: '2024-07-27 09:00',
          end: '2024-07-27 10:00',
          title: 'Team Standup',
        },
        {
          start: '2024-07-28 18:00',
          end: '2024-07-28 19:00',
          title: 'Dinner with friends',
        },
      ] as Event[],
      showEventForm: false,
      newEvent: {
        title: '',
        start: '',
        end: '',
        description: '',
      } as Event,
    };
  },
  methods: {
    handleCellClick(date: string) {
      console.log('Cell clicked: ', date);
    },
    addEvent() {
      this.events.push({ ...this.newEvent });
      this.showEventForm = false;
      this.newEvent = {
        title: '',
        start: '',
        end: '',
        description: '',
      };
    },
  },
});
</script>

<style scoped>
.calendar-container {
  position: relative;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add-event-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
}

.add-event-button:hover {
  background-color: #0056b3;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input,
textarea {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

button[type="submit"] {
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
