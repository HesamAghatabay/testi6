<template>
  <q-page padding>
    <!-- content -->
    <h5>Register Page</h5>
    <div class="row q-gutter-md q-my-sm">
      <div class="col">
        <q-input outlined v-model="name" label="Name" />
      </div>
      <div class="col">
        <q-input outlined v-model="phone" label="Phone" />
      </div>
      <div class="col">
        <q-input outlined v-model="email" label="Email" />
      </div>
    </div>
    <div class="row q-gutter-md">
      <div class="col">
        <q-input outlined v-model="password" label="Password" />
      </div>
      <div class="col">
        <q-input outlined v-model="confirmpassword" label="Confirm Password" />
      </div>
      <q-btn color="deep-orange" glossy label="Register" @click="register" />
    </div>
  </q-page>
</template>

<script setup>
import { Notify } from 'quasar'
import { api } from 'src/boot/axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')
const confirmpassword = ref('')
const router = useRouter()

function register() {
  if (!name.value || !phone.value || !email.value || !password.value || !confirmpassword.value) {
    Notify.create({
      position: 'top',
      message: 'please fulling all parametrs!',
      color: 'negative',
    })
  } else {
    api
      .post('api/register', {
        name: name.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
      })
      .then((r) => {
        router.push('login')
        console.log(r.data)
      })
  }
}
</script>
