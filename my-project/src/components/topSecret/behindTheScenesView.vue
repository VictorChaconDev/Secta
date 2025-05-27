<template>
  <div class="min-h-screen w-screen bg-black text-white p-10">
    <!-- Galería justificada tipo Flickr -->
    <div class="gallery">
      <img src="/img/topSecret/behindTheScenes/BTS1.jpg" alt="BTS1" />
      <img src="/img/topSecret/behindTheScenes/BTS2.jpg" alt="BTS2" />
      <img src="/img/topSecret/behindTheScenes/BTS3.jpg" alt="BTS3" />
      <img src="/img/topSecret/behindTheScenes/BTS4.jpg" alt="BTS4" />
      <img src="/img/topSecret/behindTheScenes/BTS5.png" alt="BTS5" />
      <img src="/img/topSecret/behindTheScenes/BTS6.png" alt="BTS6" />
      <img src="/img/topSecret/behindTheScenes/BTS7.jpg" alt="BTS7" />
      <img src="/img/topSecret/behindTheScenes/BTS9.jpg" alt="BTS9" />
      <img src="/img/topSecret/behindTheScenes/BTS10.jpg" alt="BTS10" />
      <img src="/img/topSecret/behindTheScenes/BTS11.png" alt="BTS11" />
      <img src="/img/topSecret/behindTheScenes/BTS12.jpg" alt="BTS12" />
      <img src="/img/topSecret/behindTheScenes/BTS13.png" alt="BTS13" />
      <img src="/img/topSecret/behindTheScenes/BTS15.jpg" alt="BTS15" />
    </div>
  </div>
</template>

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
