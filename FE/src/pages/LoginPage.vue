<template>
  <q-page padding>
    <!-- content -->
    <h5>Login Page</h5>
    <div class="row">
      <div class="col">
        <q-input outlined v-model="phone" label="Phone" />
      </div>
      <div class="col">
        <q-input outlined v-model="password" label="Password" />
      </div>
    </div>
          <q-btn color="deep-orange" glossy label="Login" @click="login" />
  </q-page>
</template>

<script setup>
import { ref } from 'node:process';
import { api } from 'src/boot/axios';



const phone = ref('')
const password = ref('')

function login(){
  api.post('api/login',)
}


</script>
