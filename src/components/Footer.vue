<template>
    <div class="container-fluid">
        <div class="row bg-white rounded-lg mx-lg-5 mx-md-5 mx-sm-0 mx-0 mb-10 px-2 pb-3 pt-4">
            <div class="col-lg-4 col-sm-4 col-sm-12 col-12">
                <div class="font-bold fs-5 mainTxt text-uppercase">
                    Get in touch
                </div>
                <div class="font-bold text-muted mt-3" style="font-size:13px">
                    No. 231 (2nd Floor), <br> AungTagon St, 5 Qr, Dawbon Twp, <br> Yangon, Myanmar, 11241
                </div>
                <div class="font-bold text-muted" style="font-size: 13px">
                    +959 777 56 2256
                </div>
                <div class="font-bold fs-5 mainTxt text-uppercase mt-4">
                    Follow us
                </div>
                <div>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-facebook" class="text-primary me-2" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-instagram" class="text-danger me-2" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-youtube" class="text-red-500 me-2" />
                    </a>
                </div>
            </div>
            <div class="col-lg-8 col-sm-8 col-sm-12 col-12 mt-lg-0 mt-md-0 mt-sm-3 mt-4">
                <div class="font-bold fs-5 mainTxt text-uppercase">
                    Information
                </div>
                <div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 font-bold text-muted my-2" style="font-size:13px">
                            About us
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 font-bold text-muted my-2" style="font-size:13px">
                            Contact us
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 font-bold text-muted my-2" style="font-size:13px">
                            Products
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 font-bold text-muted my-2" style="font-size:13px">
                            FAQ
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 font-bold text-muted my-2" style="font-size:13px">
                            Privacy Policy
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 font-bold text-muted my-2" style="font-size:13px">
                            Terms and Conditions
                        </div>
                    </div>
                </div>
                <div class="font-bold fs-5 mainTxt text-uppercase mt-4">
                    Send advice to us
                </div>
                <div class="input-group mb-3 mt-2">
                    <input type="text" class="form-control shadow" placeholder="Type something..">
                    <button class="btn">
                        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1"
                            class="sparkle">
                            <path
                                d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z">
                            </path>
                        </svg>

                        <span class="text">Send</span>
                    </button>

                </div>
            </div>

            <div class="text-muted text-center mt-3" style="font-size:12px">
                Copyright © 2024 tech4mm.com
            </div>

        </div>
    </div>
    <!-- <div>
        <div class="bg-white mb-10 ms-1 p-3 flex" style="border-radius:15px">
            
        </div>
    </div> -->
</template>

<script setup>
</script>

<style scoped>
.btn {
  border: none;
  width: 10em;
  height: 2.3em;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #1C1A1C;
  cursor: pointer;
  transition: all 450ms ease-in-out;
}

.sparkle {
  fill: #AAAAAA;
  transition: all 800ms ease;
}

.text {
  font-weight: 600;
  color: #AAAAAA;
  font-size: medium;
}

.btn:hover {
  background: linear-gradient(0deg,#A47CF3,#683FEA);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
  inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
  0px 0px 0px 4px rgba(255, 255, 255, 0.2),
  0px 0px 180px 0px #9917FF;
  transform: translateY(-2px);
}

.btn:hover .text {
  color: white;
}

.btn:hover .sparkle {
  fill: white;
  transform: scale(1.2);
} 

.mainTxt {
    font-size: 72px;
    background: -webkit-linear-gradient(#8e81ff, #1b2428ae);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>