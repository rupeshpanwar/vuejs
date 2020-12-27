const app = Vue.createApp({

    data() {
            return {
                    userInput : '',
                    confirmedUserInput: ''
            };
    },

    methods: {
        showAlert() {
            alert('Alert!!!!');
        },

        saveInput(event){
                this.userInput = event.target.value;
        },

        confirmedInput(){
            this.confirmedUserInput = this.userInput;
        }
    }
});

app.mount('#assignment');