const app = Vue.createApp({
            data(){
                return{
                    boxSelectedA: false,
                    boxSelectedB: false,
                    boxSelectedC: false,
                };
            },
            computed:{
                boxAclassed(){
                   return {active: this.boxSelectedA}
                }
            },

            methods:{
                boxSelected(box){
                    if(box === 'A'){
                        this.boxSelectedA = !this.boxSelectedA ;
                    } else if(box === 'B'){
                        this.boxSelectedB = !this.boxSelectedA ;
                    } else if(box === 'C'){
                        this.boxSelectedC = !this.boxSelectedA ;
                    }
                    
                }
            }
});

app.mount('#styling');