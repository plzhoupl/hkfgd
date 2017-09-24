<style scoped>
  #write{
    background-color: #E4E4E4;
    padding: 60px 0;
  }
</style>

<template>
    <div id="write">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row :gutter="20">
        <el-col :span="6" :offset="5">
          <el-form-item label="标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="5">
          <el-form-item label="电子邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-form-item label="电话" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="5">
          <el-form-item label="公司名称" prop="company">
            <el-input v-model="ruleForm.company"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12" :offset="5">
          <el-form-item label="地址" prop="address">
            <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="5">
          <el-form-item label="留言内容" prop="content">
            <el-input type="textarea" :rows="4" v-model="ruleForm.content"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
          <el-col>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">发表</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          title:'',
          name: '',
          email:'',
          phone:'',
          company:'',
          address:'',
          content:'',
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入电子邮箱', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入公司名称', trigger: 'blur' }
          ],
          company: [
            { required: true, message: '请输入电话', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入地址', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请输入留言内容', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('留言提交成功！');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
