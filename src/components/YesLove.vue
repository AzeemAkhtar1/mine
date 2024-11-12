<template>
    <div class="yeslove-container d-flex justify-content-center align-items-center vh-100">
      <div class="content-container text-center">
        <!-- I Love You Too GIF -->
        <div class="gif-container">
          <img src="@/assets/iloveyou.gif" alt="I Love You Too" class="love-gif" style="margin-right: 50px;">
          <img src="@/assets/loveyou.gif" alt="I Love You Too" class="love-gif">
        </div>
  
        <!-- Next Button -->
        </div>
        <center><button class="next-button mt-4" @click="navigateToDatePage">One more question, Click here...</button></center>
      
    </div>
  </template>
  
  <script>
  export default {
    name: "YesLove",
    methods: {
      navigateToDatePage() {
        this.$router.push({ name: "DatePage" });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Full-page background */
  .yeslove-container {
    background: linear-gradient(135deg, #f2a6a6 0%, #f56f7f 50%, #f29a94 100%);
    color: #ffffff;
    width: 100vw;
  }
  
  /* Content container styling */
  .content-container {
    max-width: 100%;
    padding: 2rem;
    border-radius: 25px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    transition: transform 0.5s;
  }
  
  /* GIF styling */
  .gif-container {
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin: 0 50px;
  }
  
  .love-gif {
    width: 40%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }
  
  /* Next Button Styling */
  .next-button {
    background: white;
    color: #ff6b81;
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  }
  
  .next-button:hover {
    background: linear-gradient(135deg, #ff7c8f, #ffab8d);
    color: white;
    transform: scale(1.05);
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
  }
  </style>
  