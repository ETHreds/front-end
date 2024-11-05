<template>
    <div class="page-header">
        <div class="">
            <div class="row">
                <div class="col-12">
                    <h2>Page Title</h2>
                </div>
                <div class="col-12">
                    <q-breadcrumbs gutter="md" align="center">
                        <q-breadcrumbs-el label="Home"  to="/"/>
                        <q-breadcrumbs-el label="About Us" to="/about-us" />
                    </q-breadcrumbs>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

/*******************************/
/******* Page Header CSS *******/
/*******************************/
.page-header {
    position: relative;
    margin-bottom: 30px;
    padding: 50px 0;
    text-align: center;
    background: #aa9166;
}

.page-header h2 {
    position: relative;
    color: #121518;
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 5px;
}

.page-header h2::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 2px;
    left: calc(50% - 50px);
    bottom: 0;
    background: #121518;
}

@media (max-width: 767.98px) {
    .page-header h2 {
        font-size: 35px;
    }
    
    .page-header a {
        font-size: 18px;
    }
}



</style>