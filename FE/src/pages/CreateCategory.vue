<template>
  <q-page padding>
    <!-- content -->
    <h5>Create Category Page</h5>
    <div class="row">
      <div class="col">
        <q-input outlined v-model="name" label="Name" />
      </div>
      <div class="col">
        <q-input outlined v-model="dascription" label="Dascription" />
      </div>
    </div>
    <q-btn color="deep-orange q-ma-md" glossy label="Create" @click="create" />
  </q-page>
</template>

<script setup>
import { Notify } from 'quasar'
import { api } from 'src/boot/axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const dascription = ref('')
const router = useRouter()

function create() {
  if (!name.value || !dascription.value) {
    Notify.create({
      position: 'top',
      message: 'plese fulling all items',
      color: 'negative',
    })
  } else {
    api
      .post('api/category', {
        name: name.value,
        dascription: dascription.value,
      })
      .then((r) => {
        router.push('category')
        Notify.create({
          position: 'top',
          message: r.data,
          color: 'positive',
        })
      })
      .catch((e) => {
        Notify.create({
          position: 'top',
          message: e,
          color: 'negative',
        })
      })
  }
}
</script>
