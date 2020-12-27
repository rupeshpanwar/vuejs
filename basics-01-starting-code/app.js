const app = Vue.createApp({
                data(){
                    return{
                        courseGoalA: 'learn Vue and have fun app!',
                        courseGoalB: '<h2>master Vue and build crazy app!</h2>',
                        vueLink: 'https://vuejs.org'
                    }
                },
                methods:{
                    outputGoal(){
                        const randomNumber = Math.random();
                        if(randomNumber < 0.5){
                            return this.courseGoalA;
                        }else{
                            return this.courseGoalB;
                        }
                    }
                }
}

);

app.mount('#user-goal');