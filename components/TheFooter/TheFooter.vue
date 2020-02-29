<template>
    <!-- Footer code by Aimee的 -->
<section>
        <div class="fcontainer footBack">
            <p>Code hosted on <a href="https://github.com/Asthriona/Ashriona-Blog" target="_blank">GitHub</a>. Website hosted by <a href="https://SiriusMediaGroup.com" target="_blank" rel="noopener noreferrer">Sirius Media Group</a> DNS Powered by <a href="https://Asthriona.com" target="_blank" rel="noopener noreferrer">Asthriona ltd.</a>.</p>
            <p>Blog Uptime: <span v-html='longTime'>{{longTime}}</span><span class="timeJump">(●'◡'●)ﾉ♥</span></p>
            <p>© 2019 - {{ new Date().getFullYear() }} <a href="https://Asthriona.com">Asthriona</a>. Powered by <a href="https://vuejs.org/" target="_blank">Vue</a>. Theme By <a href="https://Asthriona.com/" target="_blank">Asthriona</a>.</p>
            <p><span>Made with</span>❤️ <span>by Asthriona.</span></p>
        </div>
</section>
</template>

<script>
    export default {
        data() { c
            return {
                longTime:'',
            }
        },
        methods: { 
            runTime:function(){
                var that = this;
                var oldTime =new Date('2019/08/24 00:00:00');
                var timer = setInterval(function(){
                    var nowTime = new Date();
                    var longTime = nowTime - oldTime;
                    var days = parseInt(longTime / 1000 / 60 / 60 / 24 , 10); 
                      var hours = parseInt(longTime / 1000 / 60 / 60 % 24 , 10);
                      var minutes = parseInt(longTime / 1000 / 60 % 60, 10);
                      var seconds = parseInt(longTime / 1000 % 60, 10);
                      that.longTime = days+" Days " + hours+" Hours " + minutes+" Minutes and "+seconds+" seconds";
                },1000)
            }
        },
        components: {

        },
        created() {
          
            var that = this;
            that.runTime();
        }
    }
</script>

<style>
.footBack{
    color:#888;
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
    width:100%;
    min-height: 50px;
    margin-top: 25px;
    position: absolute;
}
.fcontainer{
    width:100%;
    background: #232323;
    padding:15px 10px 10px 10px;
    box-sizing: border-box;
    width: 100%!important;
}
.footBack .footer-img{
    height:368px;
    z-index: 1;
    position: relative;
    width:100%;
    bottom:-74px;
    pointer-events:none;
}
.footBackHui{
    /*min-height: 50px;*/
    margin-top: -50px;
    z-index: -1;
}
.footBackHui .footer-img{
    position: relative;
    width:100%;
    bottom:0;
    width:100%;
    height:auto;
    bottom:-10px;
    /*z-index: 0;*/
}
.footBackHui .footer-img img{
    width:100%;
    height:auto;
    margin:0;

}
.footBack p{
    margin:5px 0;
    z-index: 3;
}
.footBack a{
    color:#795548;
    z-index: 3;
}
.footBack a:hover{
    color:#000;
}
.footBack .fheart{
    width:25px;
    height:25px;
    margin-top:-10px;
    top:5px;
    position: relative;
    vertical-align: baseline;
    -webkit-animation: heartScale 1.33s ease-in-out infinite;
    animation: heartScale 1.33s ease-in-out infinite;
}
@keyframes heartScale {
    0%{transform: scale(1)}
    50%{transform: scale(0.8)}
    100%{transform: scale(1)}
}
@-webkit-keyframes heartScale {
    0%{transform: scale(1)}
    50%{transform: scale(0.8)}
    100%{transform: scale(1)}
}
.timeJump{
    animation:my-face 5s infinite ease-in-out;
    -webkit-animation:my-face 5s infinite ease-in-out;
    display:inline-block;
	margin:0 5px;
}
@-webkit-keyframes my-face {
	2% {
	-webkit-transform:translate(0,1.5px) rotate(1.5deg);
	-moz-transform:translate(0,1.5px) rotate(1.5deg);
	-ms-transform:translate(0,1.5px) rotate(1.5deg);
	-o-transform:translate(0,1.5px) rotate(1.5deg);
	transform:translate(0,1.5px) rotate(1.5deg)
}
4% {
	-webkit-transform:translate(0,-1.5px) rotate(-.5deg);
	-moz-transform:translate(0,-1.5px) rotate(-.5deg);
	-ms-transform:translate(0,-1.5px) rotate(-.5deg);
	-o-transform:translate(0,-1.5px) rotate(-.5deg);
	transform:translate(0,-1.5px) rotate(-.5deg)
}
6% {
	-webkit-transform:translate(0,1.5px) rotate(-1.5deg);
	-moz-transform:translate(0,1.5px) rotate(-1.5deg);
	-ms-transform:translate(0,1.5px) rotate(-1.5deg);
	-o-transform:translate(0,1.5px) rotate(-1.5deg);
	transform:translate(0,1.5px) rotate(-1.5deg)
}
8% {
	-webkit-transform:translate(0,-1.5px) rotate(-1.5deg);
	-moz-transform:translate(0,-1.5px) rotate(-1.5deg);
	-ms-transform:translate(0,-1.5px) rotate(-1.5deg);
	-o-transform:translate(0,-1.5px) rotate(-1.5deg);
	transform:translate(0,-1.5px) rotate(-1.5deg)
}
10% {
	-webkit-transform:translate(0,2.5px) rotate(1.5deg);
	-moz-transform:translate(0,2.5px) rotate(1.5deg);
	-ms-transform:translate(0,2.5px) rotate(1.5deg);
	-o-transform:translate(0,2.5px) rotate(1.5deg);
	transform:translate(0,2.5px) rotate(1.5deg)
}
12% {
	-webkit-transform:translate(0,-.5px) rotate(1.5deg);
	-moz-transform:translate(0,-.5px) rotate(1.5deg);
	-ms-transform:translate(0,-.5px) rotate(1.5deg);
	-o-transform:translate(0,-.5px) rotate(1.5deg);
	transform:translate(0,-.5px) rotate(1.5deg)
}
14% {
	-webkit-transform:translate(0,-1.5px) rotate(1.5deg);
	-moz-transform:translate(0,-1.5px) rotate(1.5deg);
	-ms-transform:translate(0,-1.5px) rotate(1.5deg);
	-o-transform:translate(0,-1.5px) rotate(1.5deg);
	transform:translate(0,-1.5px) rotate(1.5deg)
}
16% {
	-webkit-transform:translate(0,-.5px) rotate(-1.5deg);
	-moz-transform:translate(0,-.5px) rotate(-1.5deg);
	-ms-transform:translate(0,-.5px) rotate(-1.5deg);
	-o-transform:translate(0,-.5px) rotate(-1.5deg);
	transform:translate(0,-.5px) rotate(-1.5deg)
}
18% {
	-webkit-transform:translate(0,.5px) rotate(-1.5deg);
	-moz-transform:translate(0,.5px) rotate(-1.5deg);
	-ms-transform:translate(0,.5px) rotate(-1.5deg);
	-o-transform:translate(0,.5px) rotate(-1.5deg);
	transform:translate(0,.5px) rotate(-1.5deg)
}
20% {
	-webkit-transform:translate(0,-1.5px) rotate(2.5deg);
	-moz-transform:translate(0,-1.5px) rotate(2.5deg);
	-ms-transform:translate(0,-1.5px) rotate(2.5deg);
	-o-transform:translate(0,-1.5px) rotate(2.5deg);
	transform:translate(0,-1.5px) rotate(2.5deg)
}
22% {
	-webkit-transform:translate(0,.5px) rotate(-1.5deg);
	-moz-transform:translate(0,.5px) rotate(-1.5deg);
	-ms-transform:translate(0,.5px) rotate(-1.5deg);
	-o-transform:translate(0,.5px) rotate(-1.5deg);
	transform:translate(0,.5px) rotate(-1.5deg)
}
24% {
	-webkit-transform:translate(0,1.5px) rotate(1.5deg);
	-moz-transform:translate(0,1.5px) rotate(1.5deg);
	-ms-transform:translate(0,1.5px) rotate(1.5deg);
	-o-transform:translate(0,1.5px) rotate(1.5deg);
	transform:translate(0,1.5px) rotate(1.5deg)
}
26% {
	-webkit-transform:translate(0,.5px) rotate(.5deg);
	-moz-transform:translate(0,.5px) rotate(.5deg);
	-ms-transform:translate(0,.5px) rotate(.5deg);
	-o-transform:translate(0,.5px) rotate(.5deg);
	transform:translate(0,.5px) rotate(.5deg)
}
28% {
	-webkit-transform:translate(0,.5px) rotate(1.5deg);
	-moz-transform:translate(0,.5px) rotate(1.5deg);
	-ms-transform:translate(0,.5px) rotate(1.5deg);
	-o-transform:translate(0,.5px) rotate(1.5deg);
	transform:translate(0,.5px) rotate(1.5deg)
}
30% {
	-webkit-transform:translate(0,-.5px) rotate(2.5deg);
	-moz-transform:translate(0,-.5px) rotate(2.5deg);
	-ms-transform:translate(0,-.5px) rotate(2.5deg);
	-o-transform:translate(0,-.5px) rotate(2.5deg);
	transform:translate(0,-.5px) rotate(2.5deg)
}
32% {
	-webkit-transform:translate(0,1.5px) rotate(-.5deg);
	-moz-transform:translate(0,1.5px) rotate(-.5deg);
	-ms-transform:translate(0,1.5px) rotate(-.5deg);
	-o-transform:translate(0,1.5px) rotate(-.5deg);
	transform:translate(0,1.5px) rotate(-.5deg)
}
34% {
	-webkit-transform:translate(0,1.5px) rotate(-.5deg);
	-moz-transform:translate(0,1.5px) rotate(-.5deg);
	-ms-transform:translate(0,1.5px) rotate(-.5deg);
	-o-transform:translate(0,1.5px) rotate(-.5deg);
	transform:translate(0,1.5px) rotate(-.5deg)
}
36% {
	-webkit-transform:translate(0,-1.5px) rotate(2.5deg);
	-moz-transform:translate(0,-1.5px) rotate(2.5deg);
	-ms-transform:translate(0,-1.5px) rotate(2.5deg);
	-o-transform:translate(0,-1.5px) rotate(2.5deg);
	transform:translate(0,-1.5px) rotate(2.5deg)
}
38% {
	-webkit-transform:translate(0,1.5px) rotate(-1.5deg);
	-moz-transform:translate(0,1.5px) rotate(-1.5deg);
	-ms-transform:translate(0,1.5px) rotate(-1.5deg);
	-o-transform:translate(0,1.5px) rotate(-1.5deg);
	transform:translate(0,1.5px) rotate(-1.5deg)
}
40% {
	-webkit-transform:translate(0,-.5px) rotate(2.5deg);
	-moz-transform:translate(0,-.5px) rotate(2.5deg);
	-ms-transform:translate(0,-.5px) rotate(2.5deg);
	-o-transform:translate(0,-.5px) rotate(2.5deg);
	transform:translate(0,-.5px) rotate(2.5deg)
}
42% {
	-webkit-transform:translate(0,2.5px) rotate(-1.5deg);
	-moz-transform:translate(0,2.5px) rotate(-1.5deg);
	-ms-transform:translate(0,2.5px) rotate(-1.5deg);
	-o-transform:translate(0,2.5px) rotate(-1.5deg);
	transform:translate(0,2.5px) rotate(-1.5deg)
}
44% {
	-webkit-transform:translate(0,1.5px) rotate(.5deg);
	-moz-transform:translate(0,1.5px) rotate(.5deg);
	-ms-transform:translate(0,1.5px) rotate(.5deg);
	-o-transform:translate(0,1.5px) rotate(.5deg);
	transform:translate(0,1.5px) rotate(.5deg)
}
46% {
	-webkit-transform:translate(0,-1.5px) rotate(2.5deg);
	-moz-transform:translate(0,-1.5px) rotate(2.5deg);
	-ms-transform:translate(0,-1.5px) rotate(2.5deg);
	-o-transform:translate(0,-1.5px) rotate(2.5deg);
	transform:translate(0,-1.5px) rotate(2.5deg)
}
48% {
	-webkit-transform:translate(0,-.5px) rotate(.5deg);
	-moz-transform:translate(0,-.5px) rotate(.5deg);
	-ms-transform:translate(0,-.5px) rotate(.5deg);
	-o-transform:translate(0,-.5px) rotate(.5deg);
	transform:translate(0,-.5px) rotate(.5deg)
}
50% {
	-webkit-transform:translate(0,.5px) rotate(.5deg);
	-moz-transform:translate(0,.5px) rotate(.5deg);
	-ms-transform:translate(0,.5px) rotate(.5deg);
	-o-transform:translate(0,.5px) rotate(.5deg);
	transform:translate(0,.5px) rotate(.5deg)
}
52% {
	-webkit-transform:translate(0,2.5px) rotate(2.5deg);
	-moz-transform:translate(0,2.5px) rotate(2.5deg);
	-ms-transform:translate(0,2.5px) rotate(2.5deg);
	-o-transform:translate(0,2.5px) rotate(2.5deg);
	transform:translate(0,2.5px) rotate(2.5deg)
}
54% {
	-webkit-transform:translate(0,-1.5px) rotate(1.5deg);
	-moz-transform:translate(0,-1.5px) rotate(1.5deg);
	-ms-transform:translate(0,-1.5px) rotate(1.5deg);
	-o-transform:translate(0,-1.5px) rotate(1.5deg);
	transform:translate(0,-1.5px) rotate(1.5deg)
}
56% {
	-webkit-transform:translate(0,2.5px) rotate(2.5deg);
	-moz-transform:translate(0,2.5px) rotate(2.5deg);
	-ms-transform:translate(0,2.5px) rotate(2.5deg);
	-o-transform:translate(0,2.5px) rotate(2.5deg);
	transform:translate(0,2.5px) rotate(2.5deg)
}
58% {
	-webkit-transform:translate(0,.5px) rotate(2.5deg);
	-moz-transform:translate(0,.5px) rotate(2.5deg);
	-ms-transform:translate(0,.5px) rotate(2.5deg);
	-o-transform:translate(0,.5px) rotate(2.5deg);
	transform:translate(0,.5px) rotate(2.5deg)
}
60% {
	-webkit-transform:translate(0,2.5px) rotate(2.5deg);
	-moz-transform:translate(0,2.5px) rotate(2.5deg);
	-ms-transform:translate(0,2.5px) rotate(2.5deg);
	-o-transform:translate(0,2.5px) rotate(2.5deg);
	transform:translate(0,2.5px) rotate(2.5deg)
}
62% {
	-webkit-transform:translate(0,-.5px) rotate(2.5deg);
	-moz-transform:translate(0,-.5px) rotate(2.5deg);
	-ms-transform:translate(0,-.5px) rotate(2.5deg);
	-o-transform:translate(0,-.5px) rotate(2.5deg);
	transform:translate(0,-.5px) rotate(2.5deg)
}
64% {
	-webkit-transform:translate(0,-.5px) rotate(1.5deg);
	-moz-transform:translate(0,-.5px) rotate(1.5deg);
	-ms-transform:translate(0,-.5px) rotate(1.5deg);
	-o-transform:translate(0,-.5px) rotate(1.5deg);
	transform:translate(0,-.5px) rotate(1.5deg)
}
66% {
	-webkit-transform:translate(0,1.5px) rotate(-.5deg);
	-moz-transform:translate(0,1.5px) rotate(-.5deg);
	-ms-transform:translate(0,1.5px) rotate(-.5deg);
	-o-transform:translate(0,1.5px) rotate(-.5deg);
	transform:translate(0,1.5px) rotate(-.5deg)
}
68% {
	-webkit-transform:translate(0,-1.5px) rotate(-.5deg);
	-moz-transform:translate(0,-1.5px) rotate(-.5deg);
	-ms-transform:translate(0,-1.5px) rotate(-.5deg);
	-o-transform:translate(0,-1.5px) rotate(-.5deg);
	transform:translate(0,-1.5px) rotate(-.5deg)
}
70% {
	-webkit-transform:translate(0,1.5px) rotate(.5deg);
	-moz-transform:translate(0,1.5px) rotate(.5deg);
	-ms-transform:translate(0,1.5px) rotate(.5deg);
	-o-transform:translate(0,1.5px) rotate(.5deg);
	transform:translate(0,1.5px) rotate(.5deg)
}
72% {
	-webkit-transform:translate(0,2.5px) rotate(1.5deg);
	-moz-transform:translate(0,2.5px) rotate(1.5deg);
	-ms-transform:translate(0,2.5px) rotate(1.5deg);
	-o-transform:translate(0,2.5px) rotate(1.5deg);
	transform:translate(0,2.5px) rotate(1.5deg)
}
74% {
	-webkit-transform:translate(0,-.5px) rotate(.5deg);
	-moz-transform:translate(0,-.5px) rotate(.5deg);
	-ms-transform:translate(0,-.5px) rotate(.5deg);
	-o-transform:translate(0,-.5px) rotate(.5deg);
	transform:translate(0,-.5px) rotate(.5deg)
}
76% {
	-webkit-transform:translate(0,-.5px) rotate(2.5deg);
	-moz-transform:translate(0,-.5px) rotate(2.5deg);
	-ms-transform:translate(0,-.5px) rotate(2.5deg);
	-o-transform:translate(0,-.5px) rotate(2.5deg);
	transform:translate(0,-.5px) rotate(2.5deg)
}
78% {
	-webkit-transform:translate(0,-.5px) rotate(1.5deg);
	-moz-transform:translate(0,-.5px) rotate(1.5deg);
	-ms-transform:translate(0,-.5px) rotate(1.5deg);
	-o-transform:translate(0,-.5px) rotate(1.5deg);
	transform:translate(0,-.5px) rotate(1.5deg)
}
80% {
	-webkit-transform:translate(0,1.5px) rotate(1.5deg);
	-moz-transform:translate(0,1.5px) rotate(1.5deg);
	-ms-transform:translate(0,1.5px) rotate(1.5deg);
	-o-transform:translate(0,1.5px) rotate(1.5deg);
	transform:translate(0,1.5px) rotate(1.5deg)
}
82% {
	-webkit-transform:translate(0,-.5px) rotate(.5deg);
	-moz-transform:translate(0,-.5px) rotate(.5deg);
	-ms-transform:translate(0,-.5px) rotate(.5deg);
	-o-transform:translate(0,-.5px) rotate(.5deg);
	transform:translate(0,-.5px) rotate(.5deg)
}
84% {
	-webkit-transform:translate(0,1.5px) rotate(2.5deg);
	-moz-transform:translate(0,1.5px) rotate(2.5deg);
	-ms-transform:translate(0,1.5px) rotate(2.5deg);
	-o-transform:translate(0,1.5px) rotate(2.5deg);
	transform:translate(0,1.5px) rotate(2.5deg)
}
86% {
	-webkit-transform:translate(0,-1.5px) rotate(-1.5deg);
	-moz-transform:translate(0,-1.5px) rotate(-1.5deg);
	-ms-transform:translate(0,-1.5px) rotate(-1.5deg);
	-o-transform:translate(0,-1.5px) rotate(-1.5deg);
	transform:translate(0,-1.5px) rotate(-1.5deg)
}
88% {
	-webkit-transform:translate(0,-.5px) rotate(2.5deg);
	-moz-transform:translate(0,-.5px) rotate(2.5deg);
	-ms-transform:translate(0,-.5px) rotate(2.5deg);
	-o-transform:translate(0,-.5px) rotate(2.5deg);
	transform:translate(0,-.5px) rotate(2.5deg)
}
90% {
	-webkit-transform:translate(0,2.5px) rotate(-.5deg);
	-moz-transform:translate(0,2.5px) rotate(-.5deg);
	-ms-transform:translate(0,2.5px) rotate(-.5deg);
	-o-transform:translate(0,2.5px) rotate(-.5deg);
	transform:translate(0,2.5px) rotate(-.5deg)
}
92% {
	-webkit-transform:translate(0,.5px) rotate(-.5deg);
	-moz-transform:translate(0,.5px) rotate(-.5deg);
	-ms-transform:translate(0,.5px) rotate(-.5deg);
	-o-transform:translate(0,.5px) rotate(-.5deg);
	transform:translate(0,.5px) rotate(-.5deg)
}
94% {
	-webkit-transform:translate(0,2.5px) rotate(.5deg);
	-moz-transform:translate(0,2.5px) rotate(.5deg);
	-ms-transform:translate(0,2.5px) rotate(.5deg);
	-o-transform:translate(0,2.5px) rotate(.5deg);
	transform:translate(0,2.5px) rotate(.5deg)
}
96% {
	-webkit-transform:translate(0,-.5px) rotate(1.5deg);
	-moz-transform:translate(0,-.5px) rotate(1.5deg);
	-ms-transform:translate(0,-.5px) rotate(1.5deg);
	-o-transform:translate(0,-.5px) rotate(1.5deg);
	transform:translate(0,-.5px) rotate(1.5deg)
}
98% {
	-webkit-transform:translate(0,-1.5px) rotate(-.5deg);
	-moz-transform:translate(0,-1.5px) rotate(-.5deg);
	-ms-transform:translate(0,-1.5px) rotate(-.5deg);
	-o-transform:translate(0,-1.5px) rotate(-.5deg);
	transform:translate(0,-1.5px) rotate(-.5deg)
}
    0%,100% {
    	-webkit-transform:translate(0,0) rotate(0);
    	-moz-transform:translate(0,0) rotate(0);
    	-ms-transform:translate(0,0) rotate(0);
    	-o-transform:translate(0,0) rotate(0);
    	transform:translate(0,0) rotate(0)
    }
}
</style>