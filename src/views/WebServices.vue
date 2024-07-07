<template>

  <a href="#" class="scrollBtn" style="position:fixed;bottom:20px;right:30px;z-index:6">
    <svg class="svgIcon" viewBox="0 0 384 512">
      <path
        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z">
      </path>
    </svg>
  </a>

  <div class="container mb-10">

    <h2 class="text-center text-white mt-10 font-bold mb-4">Web Services</h2>

    <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div class="bg-white p-6 shadow-lg transform transition duration-500 hover:scale-105"
                    style="border-radius:20px">
                    <div class="flex justify-center">
                        <img src="../images/web_design.png" class="w-50">
                    </div>
                    <h3 class="text-2xl font-bold my-3">Design & Development</h3>
                    <p class="mx-3">We provide best Software Service for any type of business as strategy, management.
                    </p>

                </div>
                <div class="bg-white p-6 shadow-lg transform transition duration-500 hover:scale-105"
                    style="border-radius:20px">
                    <div class="flex justify-center">
                        <img src="../images/hosting.png" class="w-50">
                    </div>
                    <h3 class="text-2xl font-bold my-3">Hosting & Maintenance</h3>
                    <p class="mx-3">We provide best Software Service for any type of business as strategy, management.
                    </p>

                </div>
                <div class="bg-white p-6 shadow-lg transform transition duration-500 hover:scale-105"
                    style="border-radius:20px">
                    <div class="flex justify-center">
                        <img src="../images/custom_web_app.png" class="w-50">
                    </div>
                    <h3 class="text-2xl font-bold my-3">Custom Web Applications</h3>
                    <p class="mx-3">We provide best Software Service for any type of business as strategy, management.
                    </p>

                </div>
            </div>
        </div>


    <h2 class="mt-10 text-white text-center font-bold">Pricing and plans</h2>
    <div class="row mt-4">
      <div class="col-lg-3 my-2 col-md-4 col-sm-6 col-6">
        <img @click="setImage" src="../images/standard.jpg" class="w-100 rounded-lg shadow cursor-pointer"
          data-bs-target="#imageShow" data-bs-toggle="modal">
      </div>
      <div class="col-lg-3 my-2 col-md-4 col-sm-6 col-6">
        <img @click="setImage" src="../images/premiun.jpg" class="w-100 rounded-lg shadow cursor-pointer"
          data-bs-target="#imageShow" data-bs-toggle="modal">
      </div>
      <div class="col-lg-3 my-2 col-md-4 col-sm-6 col-6">
        <img @click="setImage" src="../images/special.jpg" class="w-100 rounded-lg shadow cursor-pointer"
          data-bs-target="#imageShow" data-bs-toggle="modal">
      </div>
      <div class="col-lg-3 my-2 col-md-4 col-sm-6 col-6">
        <img @click="setImage" src="../images/business.jpg" class="w-100 rounded-lg shadow cursor-pointer"
          data-bs-target="#imageShow" data-bs-toggle="modal">
      </div>
      <div class="col-lg-3 my-2 col-md-4 col-sm-6 col-6">
        <img @click="setImage" src="../images/advanced.jpg" class="w-100 rounded-lg shadow cursor-pointer"
          data-bs-target="#imageShow" data-bs-toggle="modal">
      </div>
      <div class="modal zoom-in" id="imageShow" style="backdrop-filter:blur(5px)">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body bg-body-tertiary rounded" style="position:relative">
              <img :src="image" class="w-100">
              <button class="button rounded-circle" data-bs-dismiss="modal"
                style="position:absolute;top:20px;right:20px">
                <span class="X"></span>
                <span class="Y"></span>
                <div class="close">Close</div>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const image = ref('');

const setImage = (e) => {
  image.value = e.target.src;
}

</script>

<style scoped>
.scrollBtn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
}

.svgIcon {
  width: 12px;
  transition-duration: 0.3s;
}

.svgIcon path {
  fill: white;
}

.scrollBtn:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: rgb(181, 160, 255);
  align-items: center;
}

.scrollBtn:hover .svgIcon {
  /* width: 20px; */
  transition-duration: 0.3s;
  transform: translateY(-200%);
}

.scrollBtn::before {
  position: absolute;
  bottom: -20px;
  content: "Back to Top";
  color: white;
  /* transition-duration: .3s; */
  font-size: 0px;
}

.scrollBtn:hover::before {
  font-size: 13px;
  opacity: 1;
  bottom: unset;
  /* transform: translateY(-30px); */
  transition-duration: 0.3s;
}

.button {
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  background: rgba(180, 83, 107, 0.11);
  border-radius: 5px;
  transition: background 0.5s;
}

.X {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 1.5px;
  background-color: rgb(255, 255, 255);
  transform: translateX(-50%) rotate(45deg);
}

.Y {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 1.5px;
  background-color: #fff;
  transform: translateX(-50%) rotate(-45deg);
}

.close {
  position: absolute;
  display: flex;
  padding: 0.8rem 1.5rem;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  top: -70%;
  left: 50%;
  width: 3em;
  height: 1.7em;
  font-size: 12px;
  background-color: rgb(19, 22, 24);
  color: rgb(187, 229, 236);
  border: none;
  border-radius: 3px;
  pointer-events: none;
  opacity: 0;
}

.button:hover {
  background-color: rgb(211, 21, 21);
}

.button:active {
  background-color: rgb(130, 0, 0);
}

.button:hover>.close {
  animation: close 0.2s forwards 0.25s;
}

@keyframes close {
  100% {
    opacity: 1;
  }
}
</style>