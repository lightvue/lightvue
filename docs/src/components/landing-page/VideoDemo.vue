<template>
<div id="app">
    <button id="btn1" class="button" @click="showmodal = true"></button>
    <transition name="fade" appear>
        <div class="modal-overlay" v-if="showmodal" @click="showmodal = false">
        </div>
    </transition>
    <transition name="slide" appear>
        <div class="modal" v-if="showmodal" >
            <iframe width="600" height="300" src="https://www.youtube.com/embed/fjYPDdf4rGA?rel=0" title="LightVue introduction Video" frameborder="0"></iframe>
            <button class="button" @click="showmodal = false">x</button>
        </div>
    </transition>
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app{
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
#btn1{
    position: absolute;
    left: 50%;
    top: 150%;
    transform: translate(-50%,0%);
  z-index: 999;
  width: 100px;
  height: 100px;
  border-radius: 50%;
background-image: url(https://media.istockphoto.com/vectors/play-button-icon-vector-id1194415465?k=20&m=1194415465&s=612x612&w=0&h=GzotgW8-97uNwXyiPk8OSFv54Gs47VVACKCOQAgqvhY=);
background-position: center;
background-size: cover;
cursor: pointer;
outline: none;
border: 1px solid black;

}
.modal-overlay{
    background-color: #9999997c;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
 right: 0;
 min-height: 900vh;
 z-index: 99;
}
.fade-enter-active,
.fade-leave-active{
    transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.modal{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    right: 0%;
    bottom: 0;
    width: 100%;
 max-width: 500px;
    z-index: 99999999;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal .button{
    position: absolute;
    top: -5%;
    outline: none;
    border: 1px solid white;
    border-radius: 50%;
    font-size: 25px;
    width: 50px;
    height: 50px;
    right: -5%;
    transition: opacity .5s;
    transition: 0.4s ease-out;
    cursor: pointer;
}
</style>

<script>
export default {
    name:"dialogue",
    data(){
        return{
            showmodal:false
        }
    }
}
</script>

