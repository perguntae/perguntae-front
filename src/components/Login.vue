<template>
  <div class="login">
  	<el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="header-wrapper">
          <span class="pergunta-style">Pergunt</span><span class="ae-style">aê</span>
        </div>
        <div class="login-label">
          Login
        </div>
      </div>
      <div>
        <div>
          <el-row :gutter="24" class="social-icons-wrapper">
            <el-col :span="8">
              <div class="social-icon fb-icon">
                <el-tooltip content="Facebook" placement="bottom">
                  <img class="social-icon-img" src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/facebook-256.png">
                </el-tooltip>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="social-icon gplus-icon">
                <el-tooltip content="Google Plus" placement="bottom">
                  <img class="social-icon-img" src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/7-256.png">
                </el-tooltip>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="social-icon twitter-icon">
                <el-tooltip content="Twitter" placement="bottom">
                  <img class="social-icon-img" src="http://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png">
                </el-tooltip>
              </div>
            </el-col>
          </el-row>
        </div>

        <div style="text-align: center; padding: 20px 0;">
          OU
        </div>

        <div>
          <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="rigth" label-width="70px" class="demo-ruleForm">
            <el-form-item label="Email" prop="email">
              <el-input type="text" v-model="loginForm.email"></el-input>
            </el-form-item>
            <el-form-item label="Senha" prop="pass">
              <el-input type="password" v-model="loginForm.pass"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox-group v-model="loginForm.remember">
                <el-checkbox label="Mantenha-me conectado" name="remember"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item class="submit-button-wrapper" label-width="0px">
              <el-button class="submit-button" type="primary" @click="submitForm('loginForm')">Entrar</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        pass: '',
        email: '',
      },
      rules: {
        pass: [
          { required: true, message: 'Senha obrigatória', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Email obrigatório', trigger: 'blur' },
          { type: 'email', message: 'Email inválido', trigger: 'blur,change' },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
          return true;
        }

        console.log('error submit!!');
        return false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.submit-button-wrapper {
  text-align: center;
}

.social-icon-img {
  width: 60px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}

.gplus-icon {
  text-align: center;
}

.fb-icon {
  text-align: left;
}

.twitter-icon {
  text-align: right;
}

.social-icons-wrapper {
  padding: 0 10px;
}

.submit-button {
  margin: auto;
  width: 150px;
}

.login-label {
  margin-top: 10px;
  font-size: 14px;
  color: #99A9BF;
}

.header-wrapper {
  line-height: 36px;
  font-size: 36px;
}

.clearfix {
  text-align: center;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}

.box-card {
  margin: auto;
  margin-top: 50px;
  width: 70%;
  min-width: 300px;
  max-width: 400px;
}
</style>
