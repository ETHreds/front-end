<template>
     <div class="service">
        <div class="section-header">
            <p>What we do</p>
            <h2>Our  Expertise Services</h2>
        </div>
               
        <div class="row q-col-gutter-xs">
            <div class="col-3 col-sm-4 col-xs-6" v-for="n in 5" :key="`xs-${n}`">
                <div class="service-item">
                    <q-icon class="icon" name="gavel" size="32px" />
                    <h3>Online Marketing</h3>
                    <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                    </p>
                    <a href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.service {
    position: relative;
    width: 100%;
    padding: 45px 0 15px 0;
}

.service .service-item {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    padding: 30px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, .1);
    transition: .3s;

}

.service .service-item:hover {
    border-color: transparent;
    box-shadow: 0 0 30px rgba(0, 0, 0, .1);
}

q-icon{
    font-size: 50px;
    margin-bottom: 20px;
}

.service .service-item h3 {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 1px;
}

.service .service-item p {
    margin-bottom: 10px;
    font-size: 16px;
}

.service .service-item a {
    position: relative;
    font-size: 16px;
    color: #0796fe;
    transition: .3s;
}

.service .service-item a::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 2px;
    bottom: -3px;
    left: 10%;
    background: #0796fe;
}

.service .service-item:hover a.btn {
    color: #092a49;
    background: #1d2434;
    border-color: #1d2434;
}


</style>