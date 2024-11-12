<template>
    <div class="yeslove-container d-flex justify-content-center align-items-center vh-100">
      <div class="content-container text-center">
        <!-- I Love You Too GIF -->
        <center><h2 class="question-text mt-4">Thank you!</h2></center>
        <div class="gif-container">
          <img src="@/assets/thankyou.gif" alt="Thankyou" class="thankyou-gif">
        </div>
  
        <!-- Next Button -->
        <center><button class="next-button mt-4" @click="navigateToGiftPage">Gift For You... Click here!</button></center>
      
        </div>
        
    </div>
  </template>
  
  <script>
  export default {
    name: "YesLove",
    methods: {
      navigateToGiftPage() {
        this.$router.push({ name: "GiftPage" });
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
    margin: 0 auto;
    max-width: 50%;
    padding: 2rem;
    border-radius: 25px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    transition: transform 0.5s;
  }
  
  /* GIF styling */
  .gif-container {
    width: 100%;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin: 0 auto;
  }
  
  .thankyou-gif {
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
  
   /* Question text styling */
   .question-text {
    font-family: "Georgia", serif;
    color: #555;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 1rem;
  }
  

  .next-button:hover {
    background: linear-gradient(135deg, #ff7c8f, #ffab8d);
    color: white;
    transform: scale(1.05);
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
  }
  </style>
  