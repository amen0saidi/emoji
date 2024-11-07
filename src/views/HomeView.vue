<template>
  <v-container fluid class="home-container">
    <v-row justify="center" class="mb-4">
      <v-col cols="12" md="6" class="text-center">
        <h2 class="title animated fadeIn">Welcome to the Emoji Quiz!</h2>
      </v-col>
    </v-row>

    <!-- Category Selection -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="6" class="d-flex flex-column align-center">
        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="Select a category"
          outlined
          class="category-select mb-4"
        ></v-select>

        <v-btn
          :disabled="!selectedCategory"
          @click="startGame"
          color="primary"
          class="start-btn animated fadeInUp"
        >
          Start Game
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      categories: ['TV', 'Movies', 'Anime', 'Games'], // Updated categories
      selectedCategory: '',
    };
  },
  methods: {
    startGame() {
      this.$router.push({
        name: 'Game',
        params: {
          category: this.selectedCategory,
        },
      });
    },
  },
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: 'Orbitron', sans-serif; /* Cyberpunk font */
  background-color: #000; /* Black background */
  color: #e6e6e6; /* Light text color */
  background: linear-gradient(45deg, #1a1a1a, #000); /* Subtle dark gradient */
  animation: backgroundAnimation 10s ease infinite; /* More subtle background animation */
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.3), 0 0 50px rgba(0, 255, 255, 0.3); /* Light neon glow around the background */
}

.text-center {
  text-align: center;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  color: #00ffcc; /* Neon cyan */
  text-transform: uppercase;
  text-shadow: 0 0 15px #00ffcc, 0 0 30px #00ffcc, 0 0 45px #00ffcc; /* Neon glow effect */
}

.category-select {
  width: 720px;
  max-width: 400px;
  background-color: #333; /* Dark background for select */
  border: 2px solid #00ffcc; /* Neon border */
  color: #00ffcc; /* Neon text color */
  font-weight: bold;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 15px #00ffcc, 0 0 25px #00ffcc; /* Neon glow around select */
}

.category-select .v-select__selections {
  color: #e6e6e6; /* Light color for text */
}

.start-btn {
  width: 100%;
  max-width: 400px; /* Adjust width like the select */
  height: 70px; /* Adjust height for consistency */
  padding: 1rem; /* Consistent padding */
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 1px; /* Subtle letter spacing for balance */
  background-color: #333; /* Dark background like the select */
  color: #00ffcc; /* Neon cyan text like the title */
  border: 2px solid #00ffcc; /* Neon cyan border */
  border-radius: 5px;
  text-transform: uppercase;
  box-shadow: 0 0 15px #00ffcc, 0 0 25px #00ffcc; /* Neon glow like the select */
  transition: all 0.3s ease;
}

.start-btn:hover {
  background-color: #333; /* Keep background consistent on hover */
  color: #ff00ff; /* Neon pink text on hover */
  border-color: #ff00ff; /* Neon pink border on hover */
  box-shadow: 0 0 25px #ff00ff, 0 0 50px #ff00ff; /* Neon pink glow on hover */
}

.start-btn:disabled {
  background-color: #444;
  color: #666; /* Darker color for disabled text */
  border-color: #444;
  box-shadow: none;
}

.animated {
  animation-duration: 1s;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes backgroundAnimation {
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
