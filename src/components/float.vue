<!--'float'排版-->
<template>
    <div class="box_class">
        <div class="head_box"></div>
        <div class="content_box">
            <div class="vertical_box">
                <div class="blue_box"></div>
                <span class="green_box"></span>
                <div class="red_box"></div>
            </div>
            <div class="content_dis"></div>
        </div>
        <div class="end_box"></div>
    </div>
</template>
<style scoped>
    .box_class{
        width: 800px;
        height: 500px;
    }
    .head_box{
        height: 20%;
        width: 100%;
        background-color: darkgray;
    }
    .content_box{
        height: 80%;
        width: 100%;
    }
    .content_box:after{
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .vertical_box{
        float: left;
        width: 20%;
        height: 100%;
    }
    .blue_box{
        height: 30%;
        background-color: dodgerblue;
    }
    .green_box{
        display: block;
        height: 30%;
        background-color: aquamarine;
    }
    .red_box{
        height: 40%;
        background-color: coral;
    }
    .content_dis{
        background-color: moccasin;
        height: 100%;
        width: 80%;
        float: right;
    }
    .end_box{
        background-color: orangered;
        height: 10%;
        width: 100%;
    }
</style>
