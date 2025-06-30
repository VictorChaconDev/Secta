<template>
  <!-- TÍTOL -->
    <div class="text-center text-4xl md:text-5xl lg:text-6xl font-now py-4 text-white">
      BEHIND THE SCENES
    </div>
  <div class="min-h-screen w-screen bg-black text-white p-10">
    <!-- Galería justificada tipo Flickr -->
    <div class="gallery">
     <div class="gallery">
      <img v-for="video in videos" :key="video.id"
      :src="video.url"
      >
    </div>
    </div>
    </div>
</template>
<script setup lang="ts">
const videos = [
  { id: 1, url: "/img/topSecret/behindTheScenes/BTS1.jpg" },
  { id: 2, url: "/img/topSecret/behindTheScenes/BTS2.jpg" },
  { id: 3, url: "/img/topSecret/behindTheScenes/BTS3.jpg" },
  { id: 4, url: "/img/topSecret/behindTheScenes/BTS4.jpg" },
  { id: 5, url: "/img/topSecret/behindTheScenes/BTS5.png" },
  { id: 6, url: "/img/topSecret/behindTheScenes/BTS6.png" },
  { id: 7, url: "/img/topSecret/behindTheScenes/BTS7.jpg" },
  { id: 9, url: "/img/topSecret/behindTheScenes/BTS9.jpg" },
  { id: 10, url: "/img/topSecret/behindTheScenes/BTS10.jpg" },
  { id: 11, url: "/img/topSecret/behindTheScenes/BTS11.png" },
  { id: 12, url: "/img/topSecret/behindTheScenes/BTS12.jpg" },
  { id: 13, url: "/img/topSecret/behindTheScenes/BTS13.png" },
  { id: 15, url: "/img/topSecret/behindTheScenes/BTS15.jpg" },
];

</script>
<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.gallery img {
  height: 500px;
  object-fit: cover;
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 100%;
  width: auto;
}
</style>