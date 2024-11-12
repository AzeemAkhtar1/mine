<template>
    <div class="datepage-container d-flex justify-content-center align-items-center vh-100">
      <div class="content-container text-center">
        <!-- Centered Image -->
        <div class="image-container">
          <img src="@/assets/cry.gif" alt="Date Invite" class="date-image">
        </div>
  
        <!-- Question Text -->
        <center><h2 class="question-text mt-4">It's Okay</h2></center>
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


  </style>
  