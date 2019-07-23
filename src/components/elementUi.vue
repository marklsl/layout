<!--'element'响应式排版-->
<template>
    <div class="element_ui">
        <el-row>
            <el-col :xs="0" :sm="1" :md="2" :lg="20" :xl="12"><div class="blue_box grid-big-content"></div></el-col>
            <el-col :xs="24" :sm="23" :md="22" :lg="4" :xl="12">
                <el-row :xs="24" :sm="10" :md="14" :lg="13" :xl="6"><div class="yellow_box grid-sml-content"></div></el-row>
                <el-row :xs="24" :sm="14" :md="10" :lg="11" :xl="18"><div class="red_box grid-sml-content"></div></el-row>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
    .blue_box{
        background-color: blue;
    }
    .red_box{
        background-color: red;
    }
    .yellow_box{
        background-color: black;
    }
    .grid-sml-content{
        min-height: 136px;
    }
    .grid-big-content{
        min-height: 272px;
    }
</style>
