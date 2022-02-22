<template>
<div class="auth-wrapper">
        <div class="auth-inner">
      <form @submit.prevent="handleSubmit" >
        <h3> Sign Up</h3>
        <div class="form-group">
            <label>First Name</label>
            <input required type="text" v-model="state.first_name" class="form-control" placeholder="First Name" />
           <small class="error-message" v-if="v$.first_name.$error" >
                {{v$.first_name.$errors[0].$message}}*
            </small>
        </div>
         
        <div class="form-group">
            <label>Last Name</label>
            <input required type="text" v-model="state.last_name" class="form-control" placeholder="Last Name" />
        <small class="error-message" v-if="v$.last_name.$error" >
                {{v$.last_name.$errors[0].$message}}*
        </small>
        </div>
        
         <div class="form-group">
            <label>Email</label>
            <input required type="email" v-model="state.email" class="form-control" placeholder="Email" />
         <small class="error-message" v-if="v$.email.$error" >
                {{v$.email.$errors[0].$message}}*
         </small>
        </div>
       
        <div class="form-group">
            <label>Password</label>
            <input required type="password" v-model="state.password" class="form-control" placeholder="Password" />
            <small class="error-message" v-if="v$.password.$error" >
                {{v$.password.$errors[0].$message}}*
            </small>
        </div>
        
        <div class="form-group">
            <label>Confirm Password</label>
            <input required type="password" v-model="state.confirm_password" class="form-control" placeholder="Confirm Password" />
             <small class="error-message" v-if="v$.confirm_password.$error" >
                {{v$.confirm_password.$errors[0].$message}}*
            </small>
        </div>
       
        <div>
            <button class="btn btn-primary btn-block">Sign Up</button>
        </div>
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
   name: 'Signup',
   setup()
   {
       const state= reactive({
           first_name:'',
           last_name:'',
           email:'',
       password:'',
       confirm_password:'',
       })
       const rules= computed(()=>{
           return {
               first_name:{required},
           last_name:{required},
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
//    data(){
//        return {
//            v$:useValidate(),
//            first_name:'',
//            last_name:'',
//            email:'',
//        password:'',
//        confirm_password:'',
//        }
//    },
//    validations()
//    {
//        return {
//            first_name:{required},
//            last_name:{required},
//            email:{required},
//        password:{required},
//        confirm_password:{required},
//        }
//    },
   methods:{
         async handleSubmit(){
           const signupdata={
               first_name:this.state.first_name,
               last_name:this.state.last_name,
               email:this.state.email,
               password:this.state.password   
           }

           this.v$.$validate()
           if(this.v$.$error){
              console.log("form not submitted")
           }
           else
         {
         const response= await axios.post('api/v1/student/signup',signupdata);
         console.log("response",response)
         this.$router.push('/login')
          }
           
           console.log("properties",this.v$)
           
          console.log("SignupData", signupdata)
           
       }
   }
}
</script>