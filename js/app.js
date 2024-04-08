// https://flynn.boolean.careers/exercises/api/random/mail
console.log('Vue Email List');
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        emails: []
      }
    },
    methods: {
        fetchEmail(n){
            for(let i = 0; i < n; i++){
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        console.log(response.data.response)
                        this.emails.push(response.data.response)
                        console.log(this.emails)
                    })
            }
        }
    },
    created() {
        this.fetchEmail(10)
    }
  }).mount('#app')