// https://flynn.boolean.careers/exercises/api/random/mail
console.log('Vue Email List');
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        emails: [],
        newEmails: []
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
                    })      
            } 
            setTimeout(()=> {
                this.newEmails = this.emails;
                this.emails = [];
                console.log(this.newEmails);
            } ,1000)
        },
        
    },
    created() {
       
    },
    mounted(){
        // this.fetchEmail(10)
    },
    updated(){
        
    }
  }).mount('#app')