<template>
<div id="app" class="page-start page-resume" style ="min-height: 100vh; background:#d5f8f0; z-index:99; position:relative;"> 
 <section class="page-resume-editor page-contact-info">
    <div class="container experience_finder_right_container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 grid-container experience_finder_rightside">
           <div class="alert alert-danger" v-if="loginError && errors.message">
                  <span>{{ errors.message[0] }}</span>
              </div>
          <div class="resume-editor-div">
            <div class="row" style="max-width: 750px; margin:0px auto !important;">
              <div class="col-md-12 col-sm-12 group mr-2 education_enhacement_content_section" style="margin-top:20px;">
                <div class="education_enhancement_sections">
                  <div class="edu_section_heading edu_section_heading_logo"><img src="images/logo/yak-icon.png" />Email</div>
                  <div class="edu_section_content">
                    <div class="edu_fields_section">
                      <input type="text" id="email" class="credits-text-field" placeholder="Email"  v-model="email"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 group mr-2 education_enhacement_content_section" style="margin-top:20px;">
                <div class="education_enhancement_sections">
                  <div class="edu_section_heading edu_section_heading_logo"><img src="images/logo/yak-icon.png" />Password</div>
                  <div class="edu_section_content">
                    <div class="edu_fields_section">
                      <input type="password" id="password" class="credits-text-field" placeholder="Password"  v-model="password"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center" style="display: block; margin: 25px auto 15px;">
                <button class="btn1 btn-rounded btn-next mt-4"  type="button" name="action" @click="login()"><span style="margin-left: -14px;">Next</span> <span class="pl-5"><i class="next-icon fas fa-chevron-right"></i></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="footer-bg"><img src="images/bg/footer-bg.png" /></div>
  <div id="clouds-bg"><img src="images/bg/clouds-bg.png" /></div>
</div>

</template>
<script>
import store from '../store'
    export default {
       data() {
         return {
           email: '',
           password: '',
           loginError: false,
           errors: {},
           isProgress: false, 
         }
    },
    methods: {
      login() {
        this.loginError = false;
        this.axios.post('api/auth/login', {
        email: this.email,
        password: this.password
      }).then(response => {
        this.isProgress = true;
        if(response.data.success == true)
        {
           setTimeout(() => {
             this.isProgress = false;
             store.commit('LoginUser', response.data);
             this.$router.push({name: 'dashboard'}).catch(error => {
              if (error.name != "NavigationDuplicated") {
                throw error;
              }
            });
           },2000);
        }
        else {
           this.isProgress = true;
           setTimeout(() => {
             this.isProgress = false;
             this.loginError = true;
             this.errors = response.data.errors
           },1000);
        }
      }).catch(error => {
         this.isProgress = false;
         this.loginError = true;
         this.errors = error.response.data.errors
      });
    },

  }
 }
</script>