const app = Vue.createApp({
    template:`
    <div>
    <h1>Press a Key</h1>
    <input v-model='input' @change='check()' @input='check()' name="letter" type="text" id="input">
    </div>
    <div>
    <label v-if='show' for="letter">You pressed A</label>
    </div>
    `,
    data: function(){
        return{
            show:false,
            input:''
        }
    },
    methods:{
        check(){
            window.addEventListener('keydown',(event) =>{
                if(event.key == 'A' || event.key == 'a'){
                    this.show = true;
                }else{
                    this.show = false;
                }
            });
        },
    }
})

app.mount('#App')