const app = Vue.createApp({
    data(){
        return{
            name: 'Rupesh',
            age: 39
            // img: 'https%3A%2F%2Fa4.pbase.com%2Fg6%2F64%2F268464%2F2%2F84683256.w5huBKc9.jpg&imgrefurl=https%3A%2F%2Fwww.pbase.com%2Fpeterbray%2Fimage%2F84683256&tbnid=3x0ankBTyWdNtM&vet=10CAMQxiAoAGoXChMIgOzSoJ3p7QIVAAAAAB0AAAAAEAY..i&docid=beSwcMLMooK82M&w=800&h=533&itg=1&q=bird%20images&ved=0CAMQxiAoAGoXChMIgOzSoJ3p7QIVAAAAAB0AAAAAEAY'
        }
    },
    methods:{
        calAge(){
            return this.age + 5;
        },

        favNum(){
            const randNum = Math.random();
            return randNum;
        }
    }
});

app.mount('#assignment');