<template>
    <div class = 'detail'>
        <div class = 'content' style="margin-top: 48px">

        </div>
        <div class = 'content'>

        </div>
        <div class = "block"></div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
@import '../assets/less/theme_color.less';

.detail {
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .content {
        width: 100%;
        min-height: 60%;
        margin-top: 20px;
        background-color: @theme-component-color;
        border-radius: 20px;
    }

    .block {
        width: 100%;
        min-height: 10%;
    }
}
</style>
