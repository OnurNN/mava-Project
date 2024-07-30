<template>
    <div class="info">
      <form @submit.prevent="saveInfo">
        <div class="form-group">
          <label>Username</label>
          <input type="text" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="user.email" />
        </div>
        <div class="form-group">
          <label>First Name</label>
          <input type="text" v-model="user.firstName" />
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="text" v-model="user.lastName" />
        </div>
        <div class="form-group">
          <label>Birthday</label>
          <input type="date" v-model="user.birthday" />
        </div>
        <div class="form-group">
          <label>Gender</label>
          <div>
            <input type="radio" id="male" value="Male" v-model="user.gender" />
            <label for="male">Male</label>
            <input type="radio" id="female" value="Female" v-model="user.gender" />
            <label for="female">Female</label>
          </div>
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="tel" v-model="user.phone" />
        </div>
        <div class="form-group">
          <label>Website</label>
          <input type="url" v-model="user.website" />
        </div>
        <div class="form-actions">
          <button type="submit">Save</button>
          <button type="button" @click="cancelEdit">Cancel</button>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Info',
    data() {
      return {
        user: {
          username: 'Onur Bekteaş',
          email: 'onur1960@mail.com',
          firstName: 'Onur',
          lastName: 'Bektaş',
          birthday: '2000-02-19',
          gender: 'Male',
          phone: '+XXX XXX XXX XXXX',
          website: 'https://',
        },
      };
    },
    methods: {
      saveInfo() {
        // Save user info
        console.log('User info saved:', this.user);
      },
      cancelEdit() {
        // Reset user info or handle cancel action
        console.log('Edit canceled');
      },
    },
  });
  </script>
  
  <style scoped>
  .info {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="tel"],
  .form-group input[type="url"],
  .form-group input[type="date"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
  }
  
  .form-group div {
    display: flex;
    align-items: center;
  }
  
  .form-group div input[type="radio"] {
    margin-right: 5px;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
  }
  
  .form-actions button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .form-actions button[type="button"] {
    background-color: #6c757d;
  }
  </style>
  