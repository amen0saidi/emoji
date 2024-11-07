<template>
  <v-container fluid>
    <!-- Go Back Button -->
    <v-row class="mb-4">
      <v-col cols="12" md="3">
        <v-btn color="primary" @click="$router.push('/')">
          Go Back to Home
        </v-btn>
      </v-col>
    </v-row>

    <!-- Score Display -->
    <v-row justify="end" class="mb-4">
      <v-col cols="12" md="3" class="text-right">
        <v-btn outlined color="primary" class="score-btn">
          Score: {{ score }}
        </v-btn>
      </v-col> <!-- Add this closing tag -->
    </v-row>

    <!-- Question Display -->
    <v-row v-if="isGameStarted && !isGameOver && currentQuestion" justify="center">
      <v-col cols="12" class="text-center">
        <v-img :src="currentQuestion.emojiImage" alt="Emoji" class="emoji-image" />
        <h3 class="mt-3">{{ currentQuestion.emoji }}</h3>
      </v-col>
    </v-row>

    <!-- Guess Input Section with Transition -->
    <transition name="slide-fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="isGameStarted && !isGameOver">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <v-text-field
              v-model="userGuess"
              label="Enter your answer"
              outlined
              dense
              @keyup.enter="checkAnswer"
              autofocus
              class="mb-2"
            />
            <v-btn @click="checkAnswer" color="primary" class="mt-2">Submit Answer</v-btn>
          </v-col>
        </v-row>
      </div>
    </transition>

    <!-- Hint Section -->
    <v-row v-if="isGameStarted && !isGameOver && hintsAvailable" justify="center">
      <v-col cols="12" class="text-center">
        <v-btn @click="showHint" color="secondary" class="mt-2">Get Hint</v-btn>
        <p v-if="displayedHint">{{ displayedHint }}</p>
      </v-col>
    </v-row>

    <!-- Incorrect Answer Info and Retry or Next Options -->
    <v-row v-if="isAnswerIncorrect" justify="center">
      <v-col cols="12" class="text-center">
        <v-alert type="error" class="mt-3">
          Incorrect! The correct answer is: {{ currentQuestion.answer }}
        </v-alert>
        <v-btn @click="getNextQuestion" color="primary">Next Question</v-btn>
      </v-col>
    </v-row>

    <!-- Play Again Button -->
    <v-row v-if="isGameOver && allQuestionsAnswered" justify="center">
      <v-col cols="12" class="text-center">
        <v-btn @click="startNewGame" color="secondary">Play Again</v-btn>
      </v-col>
    </v-row>

    <!-- Congratulatory Dialog -->
    <v-dialog v-model="showCongratulations" max-width="500" transition="dialog-bottom-transition">
      <v-card>
        <v-card-title class="text-h5 text-center">Congratulations!</v-card-title>
        <v-card-text class="text-center">
          <v-img src="congratulations-image.png" max-width="100" class="mb-2" />
          You have completed all questions with success! Your final score is: {{ score }}
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" @click="startNewGame">Play Again</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script>
export default {
  name: 'GameView',
  data() {
    return {
      questions: {
        TV: [
          { emojis: '👨‍👩‍👦🏠', answer: 'Modern Family', hints: ['Mockumentary style', 'Family dynamics', 'Diverse families'] },
{ emoji: '👽🎤', answer: 'The Voice', hints: ['Singing competition', 'Famous judges', 'Blind auditions'] },
{ emoji: '👑🎭', answer: 'The Crown', hints: ['Historical drama', 'Queen Elizabeth II', 'British monarchy'] },
{ emoji: '🐉⚔️', answer: 'Game of Thrones', hints: ['Dragons', 'Political intrigue', 'Based on a novel'] },
{ emoji: '🕵️‍♂️🔍', answer: 'Sherlock Holmes', hints: ['Detective', 'London', 'Based on Arthur Conan Doyle'] },
{ emoji: '⚡👦', answer: 'The Flash', hints: ['Super speed', 'DC Comics', 'Central City'] },
{ emoji: '👽🪐', answer: 'Stranger Things', hints: ['1980s', 'Parallel universe', 'Kids fighting monsters'] },
{ emoji: '🔫🕵️‍♀️', answer: 'Killing Eve', hints: ['Spy thriller', 'Female leads', 'Cat and mouse'] },
{ emoji: '👨‍🔬👽', answer: 'Breaking Bad', hints: ['Chemistry teacher', 'Drug trade', 'Transformation'] },
        ],
        Movies: [
          { emojis: '👑👸🐉', answer: 'Game of Thrones', hints: ['Fantasy series', 'Based on a book', 'Dragons involved'] },
{ emoji: '🦁👑', answer: 'Lion King', hints: ['Animation', 'King of the jungle', 'Circle of Life'] },
{ emoji: '🦕🦖', answer: 'Jurassic Park', hints: ['Dinosaurs', 'Theme park', 'Based on a novel'] },
{ emoji: '🤠🌵', answer: 'The Good, The Bad and The Ugly', hints: ['Western film', 'Clint Eastwood', 'Triad of characters'] },
{ emoji: '🌪️🏠', answer: 'Wizard of Oz', hints: ['Yellow brick road', 'Tornado', 'Follow the yellow brick road'] },
{ emoji: '👨‍🚀🌌', answer: 'Interstellar', hints: ['Space exploration', 'Time dilation', 'Love transcends time'] },
{ emoji: '👨‍🎤🎤', answer: 'A Star is Born', hints: ['Music career', 'Famous singer', 'Romantic drama'] },
{ emoji: '💔📝', answer: 'Love Actually', hints: ['Christmas movie', 'Multiple love stories', 'Set in London'] },
{ emoji: '🦇🦸‍♂️', answer: 'Batman', hints: ['Superhero', 'Gotham City', 'Dark Knight'] },
{ emoji:'🕷️ 🕸️', answer: 'Spider-Man', hints: ['Web-slinger', 'New York City', 'With great power...'] },

        ],
        Anime: [
          { emojis: '⚔️👹🌊🔥', answer: 'Demon Slayer', hints: ['Demon hunting', 'Sword fighting', 'Family bonds'] },
{ emoji: '👒🍖🏴‍☠️', answer: 'One Piece', hints: ['Pirates', 'Treasure hunt', 'Straw Hat Crew'] },
{ emoji: '1️⃣👊👨‍🦲', answer: 'One Punch Man', hints: ['Hero for fun', 'Overpowered protagonist', 'Monsters'] },
{ emoji: '📓✍', answer: 'Death Note', hints: ['Notebook', 'Justice', 'Shinigami'] },
{ emoji: '👧🐈', answer: 'My Neighbor Totoro', hints: ['Studio Ghibli', 'Forest spirits', 'Sisters'] },
{ emoji: '👦👻', answer: 'Yu Yu Hakusho', hints: ['Spirit detective', 'Fights', 'Supernatural'] },
{ emoji: '🌌🎇', answer: 'Your Name', hints: ['Body swap', 'Romance', 'Time travel'] },
{ emoji: '👑⚔️', answer: 'Attack on Titan', hints: ['Giants', 'Post-apocalyptic', 'Walls'] },
{ emoji: '🦊🍜🍥', answer: 'Naruto', hints: ['Ninja', 'Friendship', 'Nine-tailed fox'] },
{ emoji: '🔮🐉', answer: 'Dragon Ball', hints: ['Fighting', 'Power-ups', 'Seven mystical items'] },
{ emoji: '👒🌸', answer: 'Fruits Basket', hints: ['Zodiac curse', 'Family secrets', 'Romance'] },
{ emoji: '🚀🌠', answer: 'Cowboy Bebop', hints: ['Space bounty hunters', 'Jazz music', 'Dystopian'] },
{ emoji: '👹🦸', answer: 'My Hero Academia', hints: ['Superheroes', 'Quirks', 'Hero school'] },
{ emoji: '👹🎭', answer: 'Blue Exorcist', hints: ['Exorcism', 'Demonic powers', 'School life'] },
{ emoji: '🌊👦', answer: 'Spirited Away', hints: ['Magic', 'Bathhouse', 'Studio Ghibli'] },

        ],
        Games: [
          { emoji: '🍄👨‍🔧', answer: 'Super Mario', hints: ['Platformer', 'Rescuing princess', 'Mushrooms'] },
{ emoji: '🔫💣', answer: 'Call of Duty', hints: ['First-person shooter', 'Military', 'Multiplayer'] },
{ emoji: '🧟🔫', answer: 'Resident Evil', hints: ['Zombies', 'Horror', 'Umbrella Corporation'] },
{ emoji: '🐉⚔️', answer: 'The Elder Scrolls: Skyrim', hints: ['Fantasy', 'Open world', 'Dragonborn'] },
{ emoji: '🏝️🔨', answer: 'Minecraft', hints: ['Building', 'Survival', 'Blocks'] },
{ emoji: '👑⚔️', answer: 'The Legend of Zelda', hints: ['Adventure', 'Hyrule', 'Rescue the princess'] },
{ emoji: '🎸🧛', answer: 'Castlevania', hints: ['Vampires', 'Platformer', 'Gothic setting'] },
{ emoji: '🚗🏁', answer: 'Mario Kart', hints: ['Racing', 'Power-ups', 'Nintendo characters'] },
{ emoji: '👨‍🚀🌌', answer: 'Mass Effect', hints: ['Space adventure', 'Aliens', 'Commander Shepard'] },
{ emoji: '👾🛸', answer: 'Space Invaders', hints: ['Arcade classic', 'Aliens', 'Retro'] },
{ emoji: '🔮🎭', answer: 'Final Fantasy', hints: ['RPG', 'Fantasy', 'Turn-based combat'] },
{ emoji: '🌍🪓', answer: 'God of War', hints: ['Mythology', 'Action', 'Kratos'] },
{ emoji: '🔫🐍', answer: 'Metal Gear Solid', hints: ['Stealth', 'Espionage', 'Snake'] },
{ emoji: '🧙‍♂️⚔️', answer: 'World of Warcraft', hints: ['MMORPG', 'Fantasy', 'Azeroth'] },
{ emoji: '👻👑', answer: 'Dark Souls', hints: ['Difficult', 'Dark fantasy', 'Boss battles'] },
        ],
      },
      selectedCategory: '',
      currentQuestion: null,
      userGuess: '',
      score: 0,
      isGameStarted: false,
      isGameOver: false,
      hintsAvailable: true,
      displayedHint: '',
      hintIndex: 0,
      usedQuestions: [],
      allQuestionsAnswered: false,
      showCongratulations: false,
      isAnswerIncorrect: false, // New state to track incorrect answer
    };
  },
  mounted() {
    this.selectedCategory = this.$route.params.category;
    if (!this.questions[this.selectedCategory]) {
      console.error('Invalid category selected');
      return;
    }
    this.startNewGame();
  },
  methods: {
    startNewGame() {
      this.isGameStarted = true;
      this.isGameOver = false;
      this.score = 0;
      this.usedQuestions = [];
      this.allQuestionsAnswered = false;
      this.isAnswerIncorrect = false; // Reset incorrect answer state
      this.showCongratulations = false;
      this.getNextQuestion();
    },
    getNextQuestion() {
      const categoryQuestions = this.questions[this.selectedCategory];
      if (this.usedQuestions.length >= categoryQuestions.length) {
        this.isGameOver = true;
        this.allQuestionsAnswered = true;
        this.showCongratulations = true;
        return;
      }

      let newQuestion;
      do {
        newQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
      } while (this.usedQuestions.includes(newQuestion));

      this.usedQuestions.push(newQuestion);
      this.currentQuestion = newQuestion;
      this.userGuess = '';
      this.hintsAvailable = true;
      this.displayedHint = '';
      this.hintIndex = 0;
      this.isAnswerIncorrect = false; // Reset incorrect answer state
    },
    checkAnswer() {
      if (this.userGuess.trim().toLowerCase() === this.currentQuestion.answer.toLowerCase()) {
        this.score++;
        this.getNextQuestion();
      } else {
        // Mark answer as incorrect but don't stop the game
        this.isAnswerIncorrect = true;
      }
    },
    retryCurrentQuestion() {
      this.isAnswerIncorrect = false;
      this.userGuess = '';
      this.displayedHint = '';
      this.hintIndex = 0;
      this.hintsAvailable = true;
    },
    showHint() {
      if (this.hintIndex < this.currentQuestion.hints.length) {
        this.displayedHint = this.currentQuestion.hints[this.hintIndex];
        this.hintIndex++;
      } else {
        this.hintsAvailable = false;
      }
    },
    beforeEnter(el) {
      el.style.transform = 'translateY(50px)';
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight;
      el.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
      el.style.transform = 'translateY(0)';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'transform 0.3s ease-in, opacity 0.3s ease-in';
      el.style.transform = 'translateY(50px)';
      el.style.opacity = 0;
      done();
    },
  },
};
</script>

<style scoped>
/* Background and main container */
.game-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: 'Orbitron', sans-serif; /* Cyberpunk font */
  background-color: #111; /* Dark background */
  color: #e6e6e6; /* Light text color */
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff, #ff6f00);
  background-size: 400% 400%;
  animation: gradientAnimation 12s ease infinite; /* Neon gradient animation */
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.6), 0 0 70px rgba(0, 255, 255, 0.6); /* Enhanced Neon glow around background */
}

/* Slide fade effect for transitions */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

/* Emoji styling */
.emoji-image {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.6)); /* Neon glow effect */
}

/* Increase font size of emoji */
h3 {
  font-size: 8rem;
  color: #00ffcc; /* Neon color */
  text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff;
}

/* Score button */
.score-btn {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Button hover and active styles */
.v-btn:hover,
.v-btn:active {
  box-shadow: 0 0 20px #ff00ff, 0 0 40px #00ffff;
}

/* Alert message style */
.v-alert {
  background-color: #ff3333; /* Red alert for incorrect answers */
  color: white;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
}
</style>
