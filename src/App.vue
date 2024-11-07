<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #1a1a1a, #000); /* Subtle dark gradient */
  animation: backgroundAnimation 10s ease infinite; /* More subtle background animation */
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.3), 0 0 50px rgba(0, 255, 255, 0.3); 
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
