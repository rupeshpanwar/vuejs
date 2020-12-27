const app = Vue.connectApp({
    data(){
        return {
                number: 0 
        };

    },
    computed:{
        result() {
            if(this.number < 37){
                return 'not yet there';
            } else if(this.number == 37){
                return this.number ;
            } else{
                return 'still at higher side';
            }

        }
    },
    watch:{
        result(){
            setTimeout(function(){
                this.number = 0;
            }
                ,5000);
        }
    },
  
   methods: {
        addNum(num) {
            this.number = this.number  + num ;
        }
    }
});

app.mount('#assignment');