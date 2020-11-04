<template>
    <div class="navlink">
        <router-link v-for="(item,index) in barList" :key="index" :to="{name:item.name}">
            {{item.meta.title}}
        </router-link>
    </div>
</template>

<script>

export default {
    name: "Crumb",
    data(){
        return{
            barList:[]
        }
    },
    watch:{
        $route:{
            handler(val){
                if(this.barList.length ==1){
                    this.barList.push(val)
                }else{
                    this.barList.forEach((item,index)=>{
                        if(item.name === val.name){
                            this.barList.splice(index)
                        }
                    })
                    this.barList.push(val)
                }
            },
            deep: true
        }
    },
    created(){
        this.barList.push(this.$route)
    },
}
</script>

<style lang="less" scoped>
.navlink{
    a{
        display: inline-block;
        margin-right: 40px;
        text-align: center;
        line-height: 60px;
        color: #838A9D;
        font-weight: 400;
    }
    .router-link-active{
        color:  #409EFF;
        border-bottom: 2px solid #409EFF;
    }
}
</style>