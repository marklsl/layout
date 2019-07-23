<!--'flex'排版-->
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
       display: flex;
        flex-direction:column;
   }
    .head_box{
        height: 20%;
        width: 100%;
        background-color: darkgray;
        display: flex;
    }
    .content_box{
        height: 80%;
        width: 100%;
        display: flex;
        flex-direction:row;
    }

    .vertical_box{
       display: flex;
       width: 20%;
       height: 100%;
       flex-direction:column;
   }
    .blue_box{
        height: 30%;
        background-color: dodgerblue;
    }
    .green_box{
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
    }
    .end_box{
        background-color: orangered;
        height: 10%;
        width: 100%;
    }
</style>
