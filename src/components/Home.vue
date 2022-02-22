<template>
  <Navigationbar />
    <div><h1 v-if="first_name && last_name">Hi, {{this.first_name}} {{this.last_name}}. You have successfuly logged in. </h1>
    <h1 v-if="!(first_name && last_name)">Home</h1></div>
        
</template>

<script>
import Navigationbar from './Navigationbar.vue'
export default {
    name: 'Home',
    components:{
    Navigationbar,
    
  },
    data(){
        return {
            
            first_name:null,
            last_name:null
        }
    },
    created()
        {
           this.first_name=this.$route.params.first_name
           this.last_name=this.$route.params.last_name
        }
}
</script>
