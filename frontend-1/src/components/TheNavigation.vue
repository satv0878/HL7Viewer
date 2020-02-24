<template>
    <nav id="nav">
<router-link to="/" >Home</router-link> 
    <router-link to="/brazil" >Brazil</router-link>
     <router-link to="/hawai" >Hawaii</router-link>
      <router-link to="/jamaica" >Jamaica</router-link>
            <router-link to="/panama" >Panama</router-link>

    </nav>
</template>

<style scoped>

#nav {
display: flex;
justify-content: center

}

#nav a.router-link-exact-active {

  color:rebeccapurple;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  
}

#nav a {

font-weight: bold;
color:#2c3e50;
  padding:0 10px
}

</style>