
<template>
  <div id="app">
    <nav class="navbar">
      <!-- <router-link to="/" class="nav-link">Home</router-link> -->
    </nav>
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Navbar Styling */
.navbar {
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #00796b;
}

.nav-link {
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #b2dfdb;
}

/* Global App styling */
#app {
  font-family: 'Poppins', sans-serif;
}
</style>



