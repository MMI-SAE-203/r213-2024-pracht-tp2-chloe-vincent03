<script setup lang="ts">
//
const maisonsListe: {
    adresse: string;
    collectionId: string;
    collectionName: string;
    created: string;
    favori: boolean;
    id: string;
    img: string;
    nbChambres: number;
    nbSdb: number;
    nomMaison: string;
    prix: number; 
    surface: number;
    updated: string; 
}[]
    = [
{
"adresse": "123 Rue Principal, La Bresse, France",
"collectionId": "0aesb5qgfw90s9p",
"collectionName": "maison",
"created": "2024-04-12 12:19:12.128Z",
"favori": true,
"id": "3sdvb1bll0exj1r",
"image": "alejandra_cifre_gonzalez_ylyn5r4vxc_a_unsplash_DQTkb8vEbX.jpg",
"nbChambres": 4,
"nbSdb": "3",
"nomMaison": "Villa Belle Vue",
"prix": 350000,
"surface": 250,
"updated": "2024-04-12 12:38:32.561Z"
},
{
"adresse": "456 Avenue Centrale, Paris, France",
"collectionId": "0aesb5qgfw90s9p",
"collectionName": "maison",
"created": "2024-04-12 12:20:34.322Z",
"favori": false,
"id": "ohy4f6m48bwoyi6",
"image": "naomi_hebert_mp0bga_s_d1c_unsplash_SViqKt3rWS.jpg",
"nbChambres": 2,
"nbSdb": "1",
"nomMaison": "Appartement Moderne",
"prix": 200000,
"surface": 120,
"updated": "2024-04-12 12:45:03.391Z"
},
{
"adresse": "789 Chemin Rural, Chatauroux, France",
"collectionId": "0aesb5qgfw90s9p",
"collectionName": "maison",
"created": "2024-04-12 12:22:06.288Z",
"favori": true,
"id": "sc5q0fwnvokyw77",
"image": "lawrence_hookham_o_qv67_m_9ctc_unsplash_2sq3Cnjjs1.jpg",
"nbChambres": 3,
"nbSdb": "2",
"nomMaison": "Maison de Campagne",
"prix": 280000,
"surface": 200,
"updated": "2024-04-12 12:44:40.606Z"
},
{
"adresse": "10 Boulvard Prestige, Belfort, France",
"collectionId": "0aesb5qgfw90s9p",
"collectionName": "maison",
"created": "2024-04-12 12:34:23.258Z",
"favori": true,
"id": "5wee8qmny1kp9rz",
"image": "mostafa_safadel_c_hj_axn_jk_w_q_unsplash_UOicIBTHIS.jpg",
"nbChambres": 3,
"nbSdb": "4",
"nomMaison": "Penthouse de Luxe",
"prix": 800000,
"surface": 300,
"updated": "2024-04-12 12:34:23.258Z"
},
{
"adresse": "Rue de Genève 123, Genève, Suisse",
"collectionId": "0aesb5qgfw90s9p",
"collectionName": "maison",
"created": "2024-04-12 12:37:53.387Z",
"favori": false,
"id": "n518i43o8d2xjvq",
"image": "grant_uhp_yknq_zw_e8_unsplash_F6izCGxXIo.jpg",
"nbChambres": 2,
"nbSdb": "1",
"nomMaison": "Appartement classique",
"prix": 200000,
"surface": 100,
"updated": "2024-04-12 12:37:53.387Z"
}
]
</script>



<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
