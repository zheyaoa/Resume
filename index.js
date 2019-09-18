import data from "./info.json";
import "./styles/font/iconfont.css";
import avatar from "./images/avatar.jpeg";
import "./styles/index.css";
import "./styles/reset.css";
Vue.component('title-wrapper',{
    template: `   
        <div class="sec-title-wrapper">
            <div class='iconfont-big' :class="icon"></div>
            <div class="sec-title">
                <h3>
                    <div class="sec-zh" v-html="zh"></div>
                    <div class="sec-en" v-html="en"></div>
                </h3>
            </div>
        </div>`,
    props:{
        zh:String,
        en:String,
        icon:String
    }
});

window.app = new Vue({
  el: "#app",
  data,
  created() {
    this.avatar = avatar;
  }
});

