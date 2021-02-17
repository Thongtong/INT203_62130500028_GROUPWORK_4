const app = {
    data() {
        return {
            pictures: [
                { path: './images/1.jfif', description: 'The Man' ,showFav: false },
                { path: './images/2.jfif', description: 'Dream Car' ,showFav: false},
                { path: './images/3.jfif', description:'Lover Food' ,showFav: false}
            ],
            path:"./images/1.jpeg"
        }
    },
    methods:{
        showFavIcon(index){
            this.pictures[index].showFav = !this.pictures[index].showFav;
        }
    },
    computed:{
        countShow(){
            return this.pictures.filter(s => s.showFav).length;
        }
    }
};
Vue.createApp(app).mount('#app');