const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: ''
    };
  },
  watch:{
    name(value){
      if(value === ''){
        this.fullName = '';
      }
      else{
        this.fullName = value + ' ' + 'panwar';
      }
    }

  },
  computed:{
  //  fullName(){
    //   console.log('running again...');
    //   if(this.name == ''){
    //     return '';
    //   }
    //   return this.name + '' + 'panwar';
    // }

  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
