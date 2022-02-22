<template>
  <!-- <Navigationbar /> -->
  
  <router-view />
        
</template>

<script>

// import Navigationbar from './components/Navigationbar.vue'

export default {
  name: 'App',
  // components:{
  //   Navigationbar,
    
  // }
}
</script>

<style>
*{
  box-sizing: border-box; 
}

body{
  background: #1C8EF9 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

body, html,#app,#root,.auth-wrapper{
  width: 100%;
  height: 100%;
}
#app{
  text-align: center;
}

.navbar-light{
  margin-top: 2px;
  background-color: #ffff;
  box-shadow: 0px, 14px, 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  
}

.auth-inner{
  width: 450px;
  margin: auto;
  background: #ffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding-top: 40px;
  padding-left: 30px;
  padding-bottom: 40px;
  padding-right: 30px;
  border-radius: 15px;
  transition: all .3s;
  display: flex;
  text-align: left;
  flex-direction: column;
}
.auth-wrapper .form-control:focus{
  border-color: #167bff;
  box-shadow: none;
}
.auth-wrapper h3{
text-align: left;
margin: 0;
padding-bottom: 20px;
}
.form-control, .form-group{
  padding-top: 5px;
  padding-bottom: 5px;
}
.btn{
  margin-top: 20px;
}
.error-message{
  color: #d10909;
}
</style>
