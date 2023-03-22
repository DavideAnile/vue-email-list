const { createApp } = Vue

createApp({
  data() {
    return {
      message: []
    }
  },


  mounted() {

    

        for(let i = 0;i < 10;i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) =>{
        
                console.log(res)
                this.message.push(res.data.response) 
            
            })
        }

        


  }

}).mount('#app')