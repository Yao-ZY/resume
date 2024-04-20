<template>
    <div class = 'card'>
        <img class = 'top' src="../assets/images/card_top.png" alt="">
        <div class = 'content'>

        </div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
@import '../assets/less/theme_color.less';

.card {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .top {
        width: 60%;
        height: 12%;
        float:left;

    }

    .content {
        height: 88%;
        background-color: @theme-component-color;
        border-radius: 20px;
        margin-top:-3%;
    }
}
</style>
