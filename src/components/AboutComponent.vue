<template>
     <!-- About Start -->
<div class="about ">
    <div class="row">
        <div class="col-md-6">
            <div class="about-img">
                <div class="about-img-1">
                    <img src="src/assets/images/about-1.jpg" alt="Image" >
                </div>
                <div class="about-img-2">
                    <img src="src/assets/images/about-2.jpg" alt="Image" >
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="section-header">
                <p>Learn About Us</p>
                <h2>25 Years Experience</h2>
            </div>
            <div class="about-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                </p>
                <a class="btn" href="">Learn More</a>
            </div>
        </div>
    </div>
</div>
        <!-- About End -->
</template>

<script setup>

</script>

<style scoped>
/*******************************/
/********** About CSS **********/
/*******************************/
.about {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 45px 0;

}

.about .section-header {
    margin-bottom: 30px;
    margin-left: 0;
}

.about .about-img {
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: .5s;

}

.about .about-img::after {
    position: absolute;
    content: "";
    top: 60px;
    right: 60px;
    bottom: 60px;
    left: 60px;
    background: transparent;
    border: 30px solid;
    border-image: repeating-linear-gradient( 45deg, rgba(0,0,0,.05), rgba(0,0,0,.05) .5%, rgba(0,0,0,.1) .5%, rgba(0,0,0,.1) 1%) 30;
    z-index: 1;
}

.about .about-img:hover::after {
    border-image: repeating-linear-gradient( 45deg, rgba(0,0,0,.1), rgba(0,0,0,.1) .5%, rgba(0,0,0,.05) .5%, rgba(0,0,0,.05) 1%) 30;
}

.about .about-img-1 {
    position: relative;
    height: 100%;
    height: 100%;
    margin: 0 150px 150px 0;
}

.about .about-img-2 {
    position: absolute;
    height: 100%;
    height: 100%;
    top: 150px;
    left: 150px;
    z-index: 1;
}

.about .about-img-1 img,
.about .about-img-2 img {
    position: relative;
    width: 100%;
}

.about .about-text p {
    font-size: 16px;
}

.about .about-text a.btn {
    position: relative;
    margin-top: 15px;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #092a49;
    border: 2px solid #092a49;
    border-radius: 0;
    background: none;
    transition: .3s;
}

.about .about-text a.btn:hover {
    color: #0796fe;
    background: #092a49;
}

@media (max-width: 767.98px) {
    .about .about-img {
        margin-bottom: 30px;
        height: auto;
    }
}

</style>