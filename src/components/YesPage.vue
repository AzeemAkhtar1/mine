<template>
  <div class="itempage-container d-flex justify-content-center align-items-center vh-100">
    <div class="content-container text-center">
      <!-- Heading that changes with the image -->
      <h2 class="display-text mb-4">{{ itemText }}</h2>

      <!-- Card with Image and "No" Button -->
      <div class="item-card">
        <!-- Image based on the current index -->
        <div class="image-container">
          <template v-if="currentIndex === 0">
            <img src="../assets/choclates.png" alt="Chocolate" class="item-image" />
          </template>
          <template v-if="currentIndex === 1">
            <img src="../assets/burger.png" alt="Burger" class="item-image" />
          </template>
          <template v-if="currentIndex === 2">
            <img src="../assets/pizza.png" alt="Pizza" class="item-image" />
          </template>
          <template v-if="currentIndex === 3">
            <img src="../assets/icecream.png" alt="Ice Cream" class="item-image" />
          </template>
        </div>

        <!-- "No, I don't want it" Button on the right side of the image -->
        
      </div>

      <!-- "Yes" Button at the bottom -->
      <div class="button-group mt-4">
        <button class="no-button mt-4" @click="changeItem">
          No, I don't want it
        </button> 
        
        <button class="yes-button" @click="agree">
          Yes, I agree now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemPage",
  data() {
    return {
      // List of items with text
      items: [
        { text: "Chocolate for you" },
        { text: "Burger for you" },
        { text: "Pizza for you" },
        { text: "Ice Cream for you" },
      ],
      currentIndex: 0, // Start with the first item
    };
  },
  computed: {
    // Get the current text based on the current index
    itemText() {
      return this.items[this.currentIndex].text;
    },
  },
  methods: {
    // Change both the text and the image
    changeItem() {
      // Increment the index and loop back to the start if at the end
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    // Redirect to the ThankYou page
    agree() {
      this.$router.push({ name: "ThankyouPage" });
    },
  },
};
</script>

<style scoped>
/* Full-page background */
.itempage-container {
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

/* Text styling */
.display-text {
  font-family: "Georgia", serif;
  color: #555;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

/* Item Card styling */
.item-card {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

/* Image styling */
.image-container {
  text-align: center;
}

.item-image {
  width: 80%;
  /* height: auto; */
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
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
