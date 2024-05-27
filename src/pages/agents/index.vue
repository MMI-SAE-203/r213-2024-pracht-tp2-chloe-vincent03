<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
/* import { ref, onMounted } from 'vue';
import { getAllAgents } from '@/backend'; 

const agents = ref([])

onMounted(async () => {
  agents.value = await getAllAgents()
}) */
</script>

<template>
  <div>
    <h1 class="text-xl">Tous les agents</h1>
   <!--  <ul>
      <li v-for="agent in agents" :key="agent.id">
        {{ agent.nom }} - {{ agent.email }}
      </li>
    </ul> -->
  </div>
</template>