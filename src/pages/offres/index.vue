<script setup lang="ts">
//
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue';
import { MaisonRecord } from '@/types';

const maisonsListe= await pb.collection('maison').getFullList();
</script>
 

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <ul>
  <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-black hover:text-sky-400"
    >
      {{ uneMaison.nomMaison }}
    </RouterLink>
  </li>
</ul>
</template>

