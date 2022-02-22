<template>
<div class="auth-wrapper">
        <div class="auth-inner">
    <form @submit.prevent="handleSubmit">
        <h3>Set New Password</h3>
    <div class="form-group">
            <label>Enter your Email</label>
            <input required type="email" v-model="state.email" class="form-control" placeholder="Email" />
            <small class="error-message" v-if="v$.email.$error" >
                {{v$.email.$errors[0].$message}}*
         </small>
        </div>
        <div class="form-group">
            <label>New Password</label>
            <input required type="password" v-model="state.password" class="form-control" placeholder="Password" />
            <small class="error-message" v-if="v$.password.$error" >
                {{v$.password.$errors[0].$message}}*
            </small>
        </div>
        <div class="form-group">
            <label>Confirm New Password</label>
            <input required type="password" v-model="state.confirm_password" class="form-control" placeholder="Confirm Password" />
            <small class="error-message" v-if="v$.confirm_password.$error" >
                {{v$.confirm_password.$errors[0].$message}}*
            </small>
        </div>
        <button class="btn btn-primary btn-block">Change Password</button>
    </form>
     </div>
    </div>
</template>

<script>
import axios from 'axios'
import useValidate from '@vuelidate/core'
import {required, email,minLength,sameAs } from '@vuelidate/validators'
import {reactive, computed} from 'vue'
export default {
    name:'ForgotPassword',
    setup()
   {
       const state= reactive({
           email:'',
       password:'',
       confirm_password:'',
       })
       const rules= computed(()=>{
           return {
           email:{required, email},
       password:{required, minLength: minLength(6)},
       confirm_password:{required, sameAs: sameAs(state.password)},
           }
       })

       const v$=useValidate(rules,state)
       return{
            state,
            v$
       }
   },
    
    methods:{
        async handleSubmit(){
            const forgotdata={
                email:this.state.email,
                password:this.state.password,
                confirm_password:this.state.confirm_password
            }
            this.v$.$validate()
            const response= await axios.put(`api/v1/student/${this.state.email}?password=${this.state.password}`)
            this.$router.push('/login')
            console.log("emailconfirm", forgotdata);
            console.log("Response", response);
        }
    }
}
</script>