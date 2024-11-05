<template>
    <div class="feature-top">
        <div class="row align-items-center">
            <div class="col-6 col-md-3">
                <div class="feature-item">
                    <q-icon class="icon" name="thumb_up" />
                    <h3>Legal</h3>
                    <p>Govt Approved</p>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="feature-item">
                    <q-icon class="icon" name="gavel" />
                    <h3>Attorneys</h3>
                    <p>Expert Attorneys</p>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="feature-item">
                    <q-icon class="icon" name="thumb_up" />
                    <h3>Success</h3>
                    <p>90+% Case Won</p>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="feature-item">
                    <q-icon class="icon" name="handshake" />
                    <h3>Support</h3>
                    <p>Quick Support</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.feature-top {
    position: relative;
    background: #121518;
    margin-bottom: 45px;
    color: antiquewhite;
}

.feature-top .col-md-3 {
    border-right: 1px solid rgba(255, 255, 255, .1);
    border-bottom: 1px solid rgba(255, 255, 255, .1);
}
/* 
@media (max-width: 575.98px) {
    .feature-top .col-md-3:nth-child(1n) {
        border-right: none;
    }
    
    .feature-top .col-md-3:last-child {
        border-bottom: none;
    }
}

@media (min-width: 576px) and (max-width: 767.98px) {
    .feature-top .col-md-3:nth-child(2n) {
        border-right: none;
    }
    
    .feature-top .col-md-3:nth-child(3n),
    .feature-top .col-md-3:nth-child(4n) {
        border-bottom: none;
    }
}

@media (min-width: 768px) {
    .feature-top .col-md-3 {
        border-bottom: none;
    }
    
    .feature-top .col-md-3:nth-child(4n) {
        border-right: none;
    }
} */
.feature-item {
    padding: 30px 0;
    text-align: center;
}

.icon {
    color: #aa9166;
    font-size: 35px;
    margin-bottom: 10px;
}

.feature-top .feature-item h3 {
    color: #ffffff;
    font-size: 30px;
    font-weight: 600;
}

.feature-top .feature-item p {
    color: #999999;
    margin: 0;
    font-size: 18px;
}

</style>