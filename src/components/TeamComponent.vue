<template>
   <div class="team">
    <div class="container">
            <div class="section-header">
                <p>Meet Our Advisors</p>
                <h2>Our Professional Consulting Team</h2>
            </div>
            <div class="row q-col-gutter-xs">
                <div class="col-md-3 col-sm-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src="/src/assets/images/about-1.jpg" alt="Team Image">
                        </div>
                        <div class="team-text">
                            <h2>Donald John</h2>
                            <p>Founder & CEO</p>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src="/src/assets/images/about-1.jpg" alt="Team Image">
                        </div>
                        <div class="team-text">
                            <h2>Adam Phillips</h2>
                            <p>Chef Executive</p>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src="/src/assets/images/about-1.jpg" alt="Team Image">
                        </div>
                        <div class="team-text">
                            <h2>Thomas Olsen</h2>
                            <p>Chef Advisor</p>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src="/src/assets/images/about-1.jpg" alt="Team Image">
                        </div>
                        <div class="team-text">
                            <h2>James Alien</h2>
                            <p>Advisor</p>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- Team End -->
        
</template>

<script setup>

</script>

<style scoped>
.team {
    position: relative;
    width: 100%;
    padding: 45px 0 15px 0;
}

.team .team-item {
    position: relative;
    margin-bottom: 75px;
}

.team .team-img {
    position: relative;
}

.team .team-img img {
    width: 100%;
}

.team .team-text {
    position: absolute;
    width: calc(100% - 30px);
    height: 96px;
    bottom: -46px;
    left: 15px;
    /* padding: 25px 15px; */
    text-align: center;
    background: rgba(256, 256, 256, .9);
    box-shadow: 0 0 30px rgba(0, 0, 0, .1);
    transition: .3s;
    overflow: hidden;
    /* background: red; */
}

.team .team-text h2 {
    color: #0796fe;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: -10px;
}

.team .team-text p {
    margin-bottom: 20px;
    color: #092a49;
}

.team .team-social {
    position: relative;
    font-size: 0;
}

.team .team-social a {
    display: inline-block;
    width: 35px;
    height: 35px;
    margin: 0 3px;
    padding: 5px 0;
    text-align: center;
    font-size: 14px;
    color: #092a49;
    border: 2px solid #092a49;
    transition: .3s;
}

.team .team-social a:hover {
    color: #0796fe;
    border-color: #0796fe;
}

.team .team-item:hover .team-text {
    height: 160px;
}


</style>