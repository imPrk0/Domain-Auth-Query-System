<template>
    <div>
        <h1 id="title">域名授权查询系统</h1>
        <router-link to="/">如果不想查询，而是想看下首页，那么就请点我</router-link><br />
        <input v-model="domain" /><br /><br />
        <button @click="authQ()">点我查询这个域名是否授权了</button><br />
        <!-- <p v-if="code === 99">你倒是查呀！</p>
        <a v-else-if="code === 100" href="https://space.bilibili.com/295854704" target="_blank">该域名未授权，点我三连购买授权！</a>
        <font v-else-if="code === 101" color="green">恭喜，该域名已授权！</font>
        <font v-else-if="code === 98" color="red">{{ msg }}</font>
        <font v-else-if="code === 97" color="green">{{ msg }}</font> -->
        <p @click="goTo(url)" :style="'color: ' + color + ';'">{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "Auth",
        data() {
            return {
                domain: "",
                msg: "",
                color: "",
                url: ""
            }
        },
        methods: {
            authQ() {
                this.color = "green"
                this.msg = "正在验证域名是否已经授权了... ..."
                this.url = ""
                fetch("https://api.cprk.cc/study/study-vue-2?d=" + this.domain)
                    .then(a => a.json())
                    .then(json => {
                        if(json.code==0){
                            this.color = "red"
                            this.msg = "该域名未授权！请点击我使用三连换取授权！"
                            this.url = "https://space.bilibili.com/295854704"
                        }else if(json.code==1){
                            this.color = "green"
                            this.msg = "恭喜！该域名已授权！"
                            this.url = ""
                        }else{
                            this.color = "red"
                            this.msg = json.data
                            this.url = ""
                        }
                    })
            },
            goTo(url) {
                if(!url){
                    void(0)
                }else{
                    window.open(url)
                }
            }
        }
    }
</script>
