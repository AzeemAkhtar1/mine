<template>
    <div class="datepage-container d-flex justify-content-center align-items-center vh-100">
      <div class="content-container text-center">
        <!-- Centered Image -->
        <div class="image-container">
          <img src="@/assets/date-ask.gif" alt="Date Invite" class="date-image">
        </div>
  
        <!-- Question Text -->
        <h2 class="question-text mt-4">Will you go on a date with me?</h2>
  
        <!-- Buttons -->
        <div class="button-group mt-4">
          <!-- Yes Button -->
          <button class="yes-button" @click="navigateToYesDatePage">Yes</button>
  
          <!-- No Button -->
          <button class="no-button" @click="navigateToNoDatePage">No</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DatePage",
    methods: {
      navigateToYesDatePage() {
        this.$router.push({ name: "YesDatePage" });
      },
      navigateToNoDatePage() {
        this.$router.push({ name: "NoDatePage" });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Full-page background */
  .datepage-container {
    background: linear-gradient(135deg, #f2a6a6 0%, #f56f7f 50%, #f29a94 100%);
    color: #ffffff;
    width: 100vw;
  }
  
  /* Content container styling */
  .content-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 25px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    transition: transform 0.5s;
  }
  
  /* Image styling */
  .image-container {
    text-align: center;
  }
  
  .date-image {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* Question text styling */
  .question-text {
    font-family: "Georgia", serif;
    color: #555;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 1rem;
  }
  
  /* Button Group styling */
  .button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  /* Yes Button styling */
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
  
  /* No Button styling */
  .no-button {
    background: linear-gradient(135deg, #757575, #a9a9a9);
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
    background: linear-gradient(135deg, #8c8c8c, #c4c4c4);
    transform: scale(1.05);
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
  }
  </style>
  