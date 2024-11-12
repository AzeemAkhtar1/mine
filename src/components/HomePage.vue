<template>
  <div class="homepage-container d-flex justify-content-center align-items-center vh-100">
    <div class="content-container text-center">
      <!-- Inline Row for Profile Pictures and Heart Animation -->
      <div class="d-flex justify-content-center align-items-center picture-row">
        <!-- Your Picture Card -->
        <div class="card my-card animate-bottom">
          <img src="@/assets/my-picture.jpeg" alt="My Picture" class="card-img rounded-circle">
        </div>

        <!-- Heart GIF in the Middle -->
        <div class="heart-container">
          <img src="@/assets/heart1.gif" alt="Heart" class="heart-bounce">
        </div>

        <!-- Fiancée's Picture Card -->
        <div class="card my-card animate-top">
          <img src="@/assets/her-avatar.jpeg" alt="Her Picture" class="card-img rounded-circle">
        </div>
      </div>


      <!-- Welcome Message -->
    <center>
      <h1 class="welcome-message mt-4">Welcome to Our Special Journey!</h1>
      
      <!-- Start Button -->
      <button class="start-button mt-4" @click="navigateToNextPage">Let's Start</button>
    </center>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    navigateToNextPage() {
      this.$router.push({ name: "NextPage" });
    },
  },
};
</script>

<style scoped>
/* Full-page background */
.homepage-container {
  background: linear-gradient(135deg, #f2a6a6 0%, #f56f7f 50%, #f29a94 100%);
  color: #ffffff;
  width: 100vw;
}

/* Content container styling */
.content-container {
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 25px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  transition: transform 0.5s;
}

/* Picture row styling for inline display */
.picture-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Card styling */
.my-card {
  background-color: #ffa6c9;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s;
  width: 250px;
  height: 250px;
}

/* Card hover effect */
.my-card:hover {
  transform: scale(1.5);
}

.card-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

/* Heart bounce animation */
.heart-container img.heart-bounce {
  height: 200px;
  width: 250px;
  animation: bounce 1.5s infinite;
  padding-left: 50px;
  padding-right: 50px;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Entry animations for cards */
.animate-top {
  animation: slideInTop 1.2s forwards;
}

.animate-bottom {
  animation: slideInBottom 1.2s forwards;
}

@keyframes slideInTop {
  0% { opacity: 0; transform: translateY(-100px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideInBottom {
  0% { opacity: 0; transform: translateY(100px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Welcome message styling */
.welcome-message {
  font-family: "Georgia", serif;
  color: #555;
  font-weight: 600;
  font-size: 1.8rem;
  margin-top: 1rem;
}

/* Start Button styling */
.start-button {
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

.start-button:hover {
  background: linear-gradient(135deg, #ff7c8f, #ffab8d);
  transform: scale(1.05);
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .content-container {
    padding: 1.5rem;
  }
  .heart-container img.heart-bounce {
    width: 50px;
  }
}
</style>
