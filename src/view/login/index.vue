<template>
  <div class="login-container">
    <el-row class="login-form">
      <el-col :span="10" class="login-form_left hidden-md-and-down"> </el-col>
      <el-col :md="24" :lg="14" :xl="14" class="login-form_right">
        <h1>{{ isLogin?'登录':'注册' }}</h1>
        <p class="login-link">
          {{ isLogin?'还没账号？赶紧去注册一个吧！':'已经有账号？点击' }}<el-button class="link-btn" type="text" @click="hadnleChangeLink">{{ isLogin?"注册":'登录' }}</el-button>
        </p>

        <el-form
          :model="loginForm"
          status-icon
          :rules="loginRules"
          ref="loginRuleForm"
          label-width="100px"
        >
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginForm.email" placeholder="请输入您的邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="请输入您的密码"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword" v-if="!isLogin">
            <el-input
              type="password"
              v-model="loginForm.confirmPassword"
              autocomplete="off"
              placeholder="请确认您的密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <template v-if="!isLogin">
              <el-button :loading='isBtnLoading' type="primary" @click="submitForm">立即注册</el-button>
              <el-button @click="resetForm">重置</el-button>
            </template>
            <template v-else>
              <el-button :loading='isBtnLoading' type="primary" @click="submitForm">登录</el-button>
              <el-button :loading='isBtnLoading' type="warning" @click="submitForm">忘记密码</el-button>
            </template>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="loginForm.isRead">我已经阅读并同意《相关协议》</el-checkbox>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from "@vue/reactivity";
import { ElMessage } from 'element-plus'
export default {
  setup() {
    // 表单节点
    const loginRuleForm: any = ref(null);
    // 校验密码
    let validatePass = (
      rule: Array<object>,
      value: string,
      callback: Function
    ) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (loginState.loginForm.confirmPassword !== "") {
          loginRuleForm.value.validateField("confirmPassword");
        }
        callback();
      }
    };
    // 二次校验密码
    let validatePass2 = (
      rule: Array<object>,
      value: string,
      callback: Function
    ) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== loginState.loginForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    // 表单响应式数据
    let loginState = reactive({
      loginForm: {
        email: "",
        password: "",
        confirmPassword: "",
        isRead:false
      },
      isBtnLoading:false,
      isLogin:false,
      // 表单验证规则
      loginRules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        confirmPassword: [{ validator: validatePass2, trigger: "blur" }],
      },
    });


    // 注册登录切换
    const hadnleChangeLink = ()=>{
      loginState.isLogin  = !loginState.isLogin
    }
    // 处理注册
    const submitForm = () => {
      loginRuleForm.value.validate((valid: any) => {
        if (valid) {
          loginState.isBtnLoading = true;
          setTimeout(()=>{
            loginState.isBtnLoading = false;
            ElMessage.success({
            message: '恭喜你，注册成功！',
            type: 'success'
          });
          },1000)
          
        } else {
          return false;
        }
      });
    };
    // 重置表单
    const resetForm =()=>{
        loginRuleForm.value.resetFields()
    }
    return {
      ...toRefs(loginState),
      loginRuleForm,
      submitForm,
      resetForm,
      hadnleChangeLink
    };
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/login_bg.jpg") no-repeat center center/cover;
  .login-form {
    width: 40%;
    border-radius: 5px;
    overflow: hidden;
    &_left {
      background-color: rgba(255, 255, 255, 0.5);
    }
    &_right {
      padding: 50px;
      background-color: #fff;
      h1 {
        font-size: 36px;
        margin-bottom: 10px;
      }
      .login-link {
        color: #ccc;
        margin-bottom: 30px;
        .link-btn {
          margin-left: 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>