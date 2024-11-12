<template>
    <div class="datepage-container d-flex justify-content-center align-items-center vh-100">
      <div class="content-container text-center">
        <!-- Centered Image -->
        <div class="image-container">
          <img src="@/assets/loveyou.gif" alt="Date Invite" class="date-image">
        </div>
  
        <!-- Question Text -->
        <center><h2 class="question-text mt-4">Thank you! Now Fill this Form</h2></center>
        

        <div class="contact_section_2">
               <!-- Update form action and method as per Formspree's instruction -->
               <form action="https://formspree.io/f/xwpeglnl" method="POST">
                  <div class="mail_section_1">
                     <!-- Add 'name' attributes to each input -->
                     <input type="text" class="mail_text" placeholder="Your Name" name="name" required><br>
                     <input type="email" class="mail_text" placeholder="Your Email" name="email" required><br>
                     <input type="date" class="mail_date" placeholder="Date for date" name="date" required><br>
                     <textarea class="massage-bt" placeholder="Write Any Concise Special Message For Me?" rows="5" name="message" required></textarea>
                     <div class="send_bt">
                        <button type="submit" class="btn btn-primary">Send Now</button>
                     </div>
                  </div>
               </form>
            </div>


        <br>
        <!-- Buttons -->
        <div class="button-group mt-4">
          <!-- Yes Button -->
          <center><button class="yes-button" @click="navigateToYesPage">I have Something For you! Click..</button></center>
  
        </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "DatePage",
    methods: {
      navigateToYesPage() {
        this.$router.push({ name: "YesPage" });
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

  .yes-button {
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
  