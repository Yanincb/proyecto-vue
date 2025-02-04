<template>
<div class="container">
    <Sidebar> </Sidebar>
    <div class="content">
        <Router-View></Router-View>
    </div>
</div>

</template>
<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>
<style>
.container{
    display: flex;
}
.container{
    flex: 1;
    padding: 20px;
}

</style>