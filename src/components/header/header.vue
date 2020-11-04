<template>
    <div class="header">
        <div class="caption">
            <div class="logo"></div>
            <span>云采购</span>
            <span>专供商家的采购平台</span>
        </div>
        
    </div>
</template>

<script>

export default {
    name: "Header",
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
.header{
    height: 60px;
    .caption{
        height: 60px;
        display: flex;
        align-items: center;
        .logo{
            width: 50px;
            height: 50px;
            background: url("~@/assets/logo.png") no-repeat;
            background-size: 100%;
            border-radius: 50%;
            margin-right: 20px;
        }
        &>span:nth-of-type(1){
            color: #333333;
            font-size: 16px;
            font-weight: 600;
            margin-right: 40px;
        }
    }
}
</style>