<template>
    <div class="feature">
        <div class="">
        <div class="row align-items-end">
            <div class="col-md-6">
                <div class="feature-img">
                    <img src="/src/assets/images/no-bg.png" alt="Image">
                </div>
            </div>
            <div class="col-md-6">
                <div class="section-header">
                    <p>Your best legal choice</p>
                    <h2>Why choose us</h2>
                </div>
                <div class="row align-items-center feature-item">
                    <div class="col-4">
                        <div class="feature-icon">
                            <i class="fa fa-gavel"></i>
                        </div>
                    </div>
                    <div class="col-8">
                        <h3>Best law practices</h3>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                        </p>
                    </div>
                </div>
                <div class="row align-items-center feature-item">
                    <div class="col-5">
                        <div class="feature-icon">
                            <i class="fa fa-balance-scale"></i>
                        </div>
                    </div>
                    <div class="col-7">
                        <h3>Efficiency & Trust</h3>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                        </p>
                    </div>
                </div>
                <div class="row align-items-center feature-item">
                    <div class="col-5">
                        <div class="feature-icon">
                            <i class="far fa-smile"></i>
                        </div>
                    </div>
                    <div class="col-7">
                        <h3>Results you deserve</h3>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>

.feature {
    position: relative;
    width: 100%;
    padding: 45px 0;
}

.feature .col-md-6 {
    height: 100%;
}

.feature .feature-img {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
}

.feature .feature-img::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 70%;
    top: 30%;
    left: 0;
    border: 30px solid;
    border-image: repeating-linear-gradient( 45deg, rgba(0,0,0,.05), rgba(0,0,0,.05) .5%, rgba(0,0,0,.1) .5%, rgba(0,0,0,.1) 1%) 30;
    z-index: 1;
}

.feature .feature-img:hover::after {
    border-image: repeating-linear-gradient( 45deg, rgba(0,0,0,.1), rgba(0,0,0,.1) .5%, rgba(0,0,0,.05) .5%, rgba(0,0,0,.05) 1%) 30;
}

.feature .feature-img img {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    margin: 0 30px 30px 30px;
    z-index: 2;
}

@media (max-width: 767.98px) {
    .feature .feature-img {
        margin-bottom: 45px;
    }
}
</style>