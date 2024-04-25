<template>
    <div class = 'card'>
        <img class = 'top' src="../assets/images/card_top.png" alt="">
        <div class = 'content'>
            <div class = 'avatar'>
                <div class = 'avatar_background'>
                    <img src="../assets/images/avatar.jpg" alt="avatar">
                </div>
            </div>
            <div class = 'name'>Yao Zhang</div>
            <div class = 'career'>Web developer | Full stack</div>
            <div class = 'line'></div>
            <div class = 'detail'>
                <div class = 'address'>
                    <div class = 'title'>
                        Address:
                    </div>
                    <div class = 'detail_content'>
                        VIC, Victoria 3168
                    </div>
                </div>
                <div class = 'phone'>
                    <div class = 'title'>
                        Phone:
                    </div>
                    <div class = 'detail_content'>
                        (+61) 0432911368
                    </div>
                </div>
                <div class = 'email'>
                    <div class = 'title'>
                        Email:
                    </div>
                    <div class = 'detail_content'>
                        zhangyao.jk@gmail.com
                    </div>
                </div>
            </div>
            <div class = 'skill'>
                <div class = 'skill_text'>Skills</div>
                <div class = 'skill_content'>
                   <div class = 'subSkill'>
                        <el-progress type="circle" 
                            :percentage="85" 
                            :color="color" 
                            :width="progress_width"
                            :define-back-color="back_color"
                            :text-color="text_color"
                            :stroke-width="stroke_width" />
                        <div class = 'subSkill_name'>
                            HTML
                        </div>
                    </div>
                    <div class = 'subSkill'>
                        <el-progress type="circle" 
                            :percentage="85" 
                            :color="color" 
                            :width="progress_width"
                            :define-back-color="back_color" 
                            :text-color="text_color"
                            :stroke-width="stroke_width"/>
                        <div class = 'subSkill_name'>
                            CSS(less)
                        </div>
                    </div>
                    <div class = 'subSkill'>
                        <el-progress type="circle" 
                            :percentage="85" 
                            :color="color" 
                            :width="progress_width"
                            :define-back-color="back_color"
                            :text-color="text_color"
                            :stroke-width="stroke_width" />
                        <div class = 'subSkill_name'>
                            JS(ES6)
                        </div>
                    </div>
                    <div class = 'subSkill'>
                        <el-progress type="circle" 
                            :percentage="90" 
                            :color="color" 
                            :width="progress_width"
                            :text-color="text_color"
                            :define-back-color="back_color" 
                            :stroke-width="stroke_width"/>
                        <div class = 'subSkill_name'>
                            Vue
                        </div>
                    </div> 
                </div>
                <el-button class = 'button' type="primary" round>
                    DOWNLOAD CV
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            progress_width: 52,
            stroke_width: 3,
            color: '#1DA56C',
            back_color: '#646464',
            text_color: '#646464'
        }
    }
}

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

        .avatar {
            width: 100%;
            height: 25%;
            display: flex;
            justify-content: center;
            align-items: center;

            .avatar_background {
                width: 120px;
                height: 120px;
                background: #E2E2E2;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;

                img {
                    width: 93%;
                    height: 93%;
                    border-radius: 50%;
                }
            }
        }

        .name {
            margin-top:10px;
        }

        .career {
            margin-top: 12px;
            color: @theme-color;
        }

        .line {
            width: 80%;
            height: 1px;
            background-color: #E2E2E2;
            margin:auto;
            margin-top: 18px;
        }

        .detail {
            width: 80%;
            margin: auto;
            margin-top: 26px;

            .address, .phone, .email {
                display: flex;
                justify-content: space-between;
                margin-top:14px;
            }

            .detail_content {
                font-weight: 300;
            }
        }

        .skill {
            width: 90%;
            margin: auto;
            background-color: #ECEFF3;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 20px;
            margin-top: 26px;

            .skill_text {
                margin-left: -75%;
                margin-top: 14px;
            }

            .skill_content {
                width:100%;
                display: flex;
                flex-direction: row;
                margin-top: 16px;
                overflow-x: auto;
                overflow-y: hidden;

                .subSkill:first-child {
                    margin-left:20px;
                }

                .subSkill:last-child {
                    margin-right:20px;
                }

                .subSkill {
                    width: 25%;
                    height: 100%;
                    margin-left:10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .el-progress {
                        width: 100%;
                        height: 60%;
                        color: @theme-color;
                    }

                    .subSkill_name {
                        font-size: 12px;
                        font-weight: 500;
                        text-align: center;
                        margin-top: 10px;
                        margin-bottom: 13px;
                    }
                }
            }

            .button {
                width: 70%;
                background-color: @theme-color;
                margin-top: 15px;
                margin-bottom: 15px;
                font-weight: 700;
            }
            
        }

    }
}

.card .content .skill .skill_content .subSkill .el-progress[data-v-b5e75cc0] {
    width: 100%;
    height: 60%;
    color: #1DA56C;
    justify-content: center;
    display: flex;
}
</style>
