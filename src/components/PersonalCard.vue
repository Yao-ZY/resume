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
@import '../assets/less/card_style.less';
</style>
