<template>
  <nav style="position:sticky;top:0;z-index:3">
    <div class="px-lg-5 px-md-5 px-sm-2 px-2 pt-3 poppins-bold flex justify-between items-center">

      <RouterLink class="text-decoration-none" to="/">

        <div class="flex items-center">
          <img src="../images/tech4mm.png" />
          <h4 class="text-white font-bold">Tech4mm_</h4>
        </div>

      </RouterLink>

      <div class="bg-white rounded-pill shadow px-2 d-lg-block d-md-none d-sm-none d-none" style="padding-top:5px">
        <div class="poppins-bold bg-transparent">
          <ul class="list-group list-group-horizontal bg-transparent">
            <li class="list-group-item border-0 bg-transparent">
              <RouterLink class="text-decoration-none text-[#A26CF8]" v-if="route.path == '/'" to="/">Home</RouterLink>
              <RouterLink class="link text-decoration-none" v-else to="/">Home</RouterLink>
            </li>
            <li class="list-group-item border-0 bg-transparent cursor-pointer"
              v-if="route.path == '/web_services' || route.path == '/software_services'">
              <span class="dropdown me-1">
                <span class="text-[#A26CF8]" data-bs-toggle="dropdown">Our services</span>

                <ul class="dropdown-menu mt-3" style="transition: 0.2s">
                  <li>
                    <RouterLink class="text-decoration-none text-black" to="/">
                      <button class="ps-2 font-normal my-1">
                        Software services
                      </button>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="text-decoration-none text-black" to="/web_services">
                      <button class="ps-2 font-normal my-1">
                        Web services
                      </button>
                    </RouterLink>
                  </li>
                </ul>
              </span>
              <font-awesome-icon class="text-[#A26CF8]" style="font-size:12px;margin-bottom:1px"
                icon="fa-solid fa-caret-down" />
            </li>
            <li class="list-group-item border-0 bg-transparent cursor-pointer link" v-else>
              <span class="dropdown me-1">
                <span class="" data-bs-toggle="dropdown">Our services</span>

                <ul class="dropdown-menu mt-3" style="transition: 0.2s">
                  <li>
                    <RouterLink class="text-decoration-none text-black" to="/">
                      <button class="ps-2 font-normal my-1">
                        Software services
                      </button>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="text-decoration-none text-black" to="/web_services">
                      <button class="ps-2 font-normal my-1">
                        Web services
                      </button>
                    </RouterLink>
                  </li>
                </ul>
              </span>
              <font-awesome-icon style="font-size:12px;margin-bottom:1px" icon="fa-solid fa-caret-down" />
            </li>
            <li class="list-group-item border-0 bg-transparent">
              <RouterLink class="link text-decoration-none" to="/">Showcases</RouterLink>
            </li>
            <li class="list-group-item border-0 bg-transparent hover:text-[#A06CF5]">
              <RouterLink class="link text-decoration-none" to="/">Blog</RouterLink>
            </li>
            <li class="list-group-item border-0 bg-transparent hover:text-[#A06CF5]">
              <RouterLink class="text-decoration-none text-[#A26CF8]" v-if="route.path == '/about_us'" to="/about_us">
                About us</RouterLink>
              <RouterLink class="link text-decoration-none" v-else to="/about_us">About us</RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex items-center">
        <!-- <Button text="Contact us" classes="bg-black text-white"/> -->
        <button class="contactBtn">Contact us
        </button>
        <label class="hamburger d-lg-none d-md-none d-sm-block d-block">
          <input type="checkbox">
          <svg class="w-75 ms-1" viewBox="0 0 32 32" data-bs-toggle="offcanvas" href="#offcanvas">
            <path class="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
            </path>
            <path class="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <div class="offcanvas offcanvas-end w-75" id="offcanvas">
          <div class="offcanvas-header w-100">

            <RouterLink class="text-decoration-none w-100" to="/">

              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <img src="../images/tech4mm.png" />
                  <h4 class="text-black poppins-bold">Tech4mm_</h4>
                </div>
                <div>
                  <button class="btn btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
              </div>

            </RouterLink>

          </div>
          <div class="offcanvas-body">
            <ul class="list-group">
              <li class="list-group-item">
                <RouterLink class="text-decoration-none text-black" to="/">
                  <button class="ps-2 my-1">
                    <font-awesome-icon icon="fa-solid fa-house" class="text-[#A072F6]" /> Home
                  </button>
                </RouterLink>
              </li>
              <li class="list-group-item">
                <button @click="show = !show" class="ps-2 my-1" data-bs-toggle="dropdown">
                  <font-awesome-icon :icon="['fas', 'list-check']" class="me-1 text-[#A072F6]" /> Our services
                </button>
                <div v-if="show" class="my-1 border">
                  <RouterLink class="text-decoration-none text-black" to="/">
                    <button class="ps-2 my-1 font-bold ms-4" style="font-size:13px">
                      Software services
                    </button>
                  </RouterLink>
                </div>
                <div v-if="show" class="my-1 border">
                  <RouterLink class="text-decoration-none text-black" to="/web_services">
                    <button class="ps-2 my-1 font-bold ms-4" style="font-size:13px">
                      Web services
                    </button>
                  </RouterLink>
                </div>
              </li>
              <li class="list-group-item">
                <RouterLink class="text-decoration-none text-black" to="/">
                  <button class="ps-2 my-1">
                    <font-awesome-icon icon="fa-solid fa-box" class="me-2 text-[#A072F6]" /> Showcases
                  </button>
                </RouterLink>
              </li>
              <li class="list-group-item">
                <RouterLink class="text-decoration-none text-black" to="/">
                  <button class="ps-2 my-1">
                    <font-awesome-icon icon="fa-solid fa-scroll" class="me-1 text-[#A072F6]" /> Blog
                  </button>
                </RouterLink>
              </li>
              <li class="list-group-item">
                <RouterLink class="text-decoration-none text-black" to="/">
                  <button class="ps-2 my-1">
                    <font-awesome-icon icon="fa-solid fa-address-card" class="me-1 text-[#A072F6]" /> About us
                  </button>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </nav>

</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute();
import { ref } from 'vue';

const show = ref(false);

console.log(show.value);

</script>

<style scoped>
.hamburger {
  cursor: pointer;
}

.hamburger input {
  display: none;
}

.hamburger svg {
  /* The size of the SVG defines the overall size */
  height: 3em;
  /* Define the transition for transforming the SVG */
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  /* Define the transition for transforming the Stroke */
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-top-bottom {
  stroke-dasharray: 12 63;
}

/* .hamburger input:checked+svg {
  transform: rotate(-45deg);
}

.hamburger input:checked+svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
} */


.link {
  color: black;
}

.link:hover {
  color: #A26CF8
}

img {
  width: 50px;
}

.contactBtn {
  width: 130px;
  height: 40px;
  font-size: 1.1em;
  cursor: pointer;
  background-color: #171717;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: all .4s;
}

.contactBtn:hover {
  border-radius: 5px;
  transform: translateY(-10px);
  box-shadow: 0 7px 0 -2px #f85959,
    0 15px 0 -4px #39a2db,
    0 16px 10px -3px #39a2db;
}

.contactBtn:active {
  transition: all 0.2s;
  transform: translateY(-5px);
  box-shadow: 0 2px 0 -2px #f85959,
    0 8px 0 -4px #39a2db,
    0 12px 10px -3px #39a2db;
}
</style>