// https://flynn.boolean.careers/exercises/api/random/mail
console.log('Vue Email List');
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        emails: [],
        newEmails: [],
        n: 10
      }
    },
    methods: {
        fetchEmail(n){
            for(let i = 0; i < n; i++){
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        console.log(response.data.response);
                        this.emails.push(response.data.response);
                        console.log(this.emails);
                        console.log(this.emails.length);
                    })
                    
            } 
            this.emails = [];
        },
        
    },
    created() {
       
    },
    computed: {

    },
    mounted(){
       
    },
    updated(){
        
    }
  }).mount('#app')