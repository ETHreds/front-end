<template>
     <!-- Top Bar Start -->
     <div class="top-bar">
            <div class="row">
            <div class="col-12 col-md-4">
              <div class="logo">
                <a href="index.html">
                    <h1>Magolo</h1>
                    <!-- <img src="img/logo.jpg" alt="Logo"> -->
                </a>
              </div>
            </div>
            <div class=" gt-sm col-8">
              <div class="top-bar-right">
                <div class="text">
                    <h2>8:00 - 5:00</h2>
                    <p>Opening Hour Mon - Fri</p>
                </div>
                <div class="text">
                    <h2>+254 725 677 133</h2>
                    <p>Call Us For Free Consultation</p>
                </div>
                <div class="social">
                    <a href=""><q-icon name="facebook" /></a>
                    <a href=""><q-icon name="facebook" /></a>
                    <a href=""><q-icon name="facebook" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

            <!-- Top Bar End -->
</template>
<style>
.q-toolbar{
  padding: 0;
}
.top-bar {
    position: relative;
    height: 90px;
    background: #000000;
}

.top-bar .logo {
    padding: 15px 0;
    text-align: left;
    overflow: hidden;
    border: 2px yellow solid;
}

.top-bar .logo h1 {
    margin: 0;
    color: #aa9166;
    font-size: 75px;
    line-height: 55px;
    font-weight: 800;
}

.top-bar .logo img {
    max-width: 100%;
    max-height: 60px;
}

.top-bar .top-bar-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.top-bar .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90px;
    padding: 0 20px;
    text-align: center;
    border-left: 1px solid rgba(255, 255, 255, .15);
}

.top-bar .text h2 {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 25px;
    margin: 0;
}

.top-bar .text p {
    color: #ffffff;
    font-size: 13px;
    margin: 0;
}

.top-bar .social {
    display: flex;
    height: 90px;
    font-size: 0;
    justify-content: flex-end;
}

.top-bar .social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 100%;
    font-size: 22px;
    color: #ffffff;
    border-right: 1px solid rgba(255, 255, 255, .15);
}

.top-bar .social a:first-child {
    border-left: 1px solid rgba(255, 255, 255, .15);
}

.top-bar .social a:hover {
    color: #aa9166;
    background: #ffffff;
}

@media (min-width: 992px) {
    .top-bar {
        padding: 0 60px;
    }
}

@media (max-width: 991.98px) {
    .top-bar .logo {
        text-align: center;
    }

    .top-bar .social,
    .top-bar .gt-sm {
        display: none;
    }
}

</style>
