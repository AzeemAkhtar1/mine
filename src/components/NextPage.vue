<template>
  <div class="nextpage-container d-flex justify-content-center align-items-center vh-100">
    <div class="content-container text-center">
      <!-- Picture with the question -->
      <div class="question-container">
        <img src="@/assets/do-you-love-me.png" alt="Do you love me?" class="question-img">
        <h1 class="question-text mt-4">Do you love me?</h1>
      </div>

      <!-- Buttons -->
      <div class="button-group mt-4">
        <!-- Yes Button -->
        <button class="yes-button" @click="navigateToYesLove">Yes</button>

        <!-- No Button (moves around when hovered) -->
        <button class="no-button" @mouseover="moveNoButton">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextPage",
  methods: {
    navigateToYesLove() {
      this.$router.push({ name: "YesLove" });
    },
    moveNoButton() {
      const noButton = this.$el.querySelector(".no-button");
      // Generate random positions for "No" button within the container
      const randomX = Math.floor(Math.random() * (this.$el.clientWidth - noButton.clientWidth));
      const randomY = Math.floor(Math.random() * (this.$el.clientHeight - noButton.clientHeight));
      noButton.style.position = "absolute";
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
    },
  },
};
</script>

<style scoped>
/* Full-page background */
.nextpage-container {
  background: linear-gradient(135deg, #f2a6a6 0%, #f56f7f 50%, #f29a94 100%);
  color: #ffffff;
  width: 100vw;
}

/* Content container styling */
.content-container {
  margin: 0 auto;
  max-width: 500px;
  padding: 2rem;
  border-radius: 25px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  transition: transform 0.5s;
}

/* Question container styling */
.question-container {
  text-align: center;
}

.question-img {
  width: 80%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.question-text {
  font-family: "Georgia", serif;
  color: #555;
  font-weight: 600;
  font-size: 1.8rem;
}

/* Button Group Styling */
.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

/* Yes Button Styling */
.yes-button {
  background: linear-gradient(135deg, #ff6b81, #ff937c);
  color: #fff;
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
}

.yes-button:hover {
  background: linear-gradient(135deg, #ff7c8f, #ffab8d);
  transform: scale(1.05);
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
}

/* No Button Styling (Moving Button) */
.no-button {
  background: #ff9c9c;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
}

.no-button:hover {
  background: #ffb3b3;
  transform: scale(1.05);
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
  /* Prevent the "No" button from being clicked by moving it */
  position: absolute;
}
</style>
