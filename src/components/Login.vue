<template>
<div class="auth-wrapper">
        <div class="auth-inner">
    <form @submit.prevent="handleSubmit">
        <h3> Login</h3>
        <div class="form-group">
            <label>Email</label>
            <input required type="email" v-model="email" class="form-control" placeholder="Email" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input required type="password" v-model="password" class="form-control" placeholder="Password" />
        </div>

        <button class="btn btn-primary btn-block">Login</button>
        <p class="forgot-password text-right">
            <router-link to='/forgotpassword'>Forgot Password</router-link>
        </p>
    </form>
    </div>
    </div>
</template>

<script>
 import axios from 'axios'
export default {
   name: 'Login',
   data(){
       return {
           email: '',
           password: '',
       }
   },
   methods: {
        handleSubmit(){
          const logindata={
               email: this.email,
           password: this.password
          }
           axios.post('api/v1/student/login',logindata).then((res)=>{
                console.log("responsewhensuccesss", res)
                console.log(res.data.first_name)
                console.log(res.data.last_name)
                //  this.$router.push({name:"Home", params:{first_name:res.data.first_name, last_name:res.data.last_name}})
                 this.$router.push('/userhome')
          }).catch((err)=>{
              alert(err.response.data.message)
          })
        
         
          
       }
   }
}
</script>