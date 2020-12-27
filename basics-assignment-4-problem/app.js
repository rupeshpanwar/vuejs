const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            paraVisible: true,
            inputGBG: '',
        }
    },

    computed: {
        paraClasses() {
            return { user1: this.inputClass === 'user1', 
            user2: this.inputClass === 'user2',
            visible: this.paraVisible,
            hidden: !this.paraVisible
        }
        }
    },
    methods: {
        changeAppearance() {
            this.paraVisible = !this.paraVisible;

        }
    }

});

app.mount('#assignment');