<template>
  <div
    id="app"
    class="page-start page-resume"
    style="
      min-height: 100vh;
      background: #d5f8f0;
      z-index: 99;
      position: relative;
    "
  >
    <section class="page-resume-editor page-contact-info">
      <div class="container">
        <div
          v-if="this.closeBtn == true"
          class="row alert_yak_finder"
          style="max-width: 85%; margin: 20px auto"
        >
          <div class="col-md-2">
            <img src="images/bg/yak-port.png" alt="YAK" />
          </div>
          <div class="col-md-10 col-sm-8">
            <p>
              While employers are most interested in your professional
              accomplishments, it is still a good idea to highlight your
              educational achievements
            </p>
          </div>
          <span class="icon icon_close" v-on:click="close()"
            ><i class="fas fa-times"></i
          ></span>
        </div>
      </div>
      <div class="container experience_finder_right_container">
        <div class="row">
          <div class="col-md-2">
            <div class="sidebar experience_finder_sidebar">
              <ul class="vertical-center">
                <li class="w3-opacity-less visited-page">
                  <i><img src="images/logo/finder.png" /></i> Experience Finder
                </li>
                <li
                  v-if="this.$store.state.grad_Date == true || this.$store.state.AC2 == true"
                >
                  <i
                    style="
                      padding-left: 6.82px !important;
                      padding-right: 6.82px !important;
                    "
                    ><img src="images/logo/education-ench.png"
                  /></i>
                  <span class="edu_first"
                    >Education<br />
                    <span>Enhancements</span></span
                  >
                </li>
                <li class="w3-opacity-less">
                  <i style="padding-top: 4px"
                    ><img src="images/logo/job-description.png"
                  /></i>
                  Job Descriptions
                </li>
                <li class="w3-opacity-less">
                  <i style="background: rgb(204, 204, 204)"
                    ><img src="images/logo/skills.png"
                  /></i>
                  Skills
                </li>
                <li class="w3-opacity-less">
                  <i style="background: rgb(204, 204, 204)"
                    ><img src="images/logo/endorsment.png"
                  /></i>
                  Endorsements
                </li>
                <li class="w3-opacity-less">
                  <i
                    class="fas fa-ellipsis-h"
                    style="
                      background: rgb(204, 204, 204);
                      padding: 7px 6.82px 7px 6.83px !important;
                    "
                  ></i>
                  More
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-md-10 grid-container experience_finder_rightside"
            v-if="this.$store.state.grad_Date == true || this.$store.state.AC2 == true"
          >
            <div class="resume-editor-div">
              <h2>
                <span class="icon"><i class="fas fa-graduation-cap"></i></span>
                Education Enhancements
              </h2>
              <div
                class="row"
                style="max-width: 750px; margin: 0px auto !important"
              >
                <div
                  class="col-md-12 col-sm-12 group mr-2 education_enhacement_content_section"
                  style="margin-top: 20px"
                >
                  <div
                    class="education_enhancement_sections" v-if="this.$store.state.isGrade == true" 
                  >
                   <div v-for="(input, k) in this.$store.state.SchoolData" :key="k">
                    <div class="edu_section_heading">
                      GPA and Minors for [ABC School]
                    </div>
                    <div class="edu_section_content">
                      <div class="edu_fields_section">
                        <label>Overall GPA:</label>
                        <input
                          type="text"
                          value=""
                          v-on:blur="insertData(k)"
                          class="gpa-field"
                          v-model="overallgpa[k]"
                        />
                        <span class="of-gpa">of</span>
                        <input
                          type="text"
                          value=""
                          class="gpa-field"
                          placeholder="6.0"
                          disabled
                        />
                      </div>
                      <div class="edu_fields_section">
                        <label>Major GPA:</label>
                        <input
                          type="text"
                          value=""
                          v-on:blur="insertData(k)"
                          class="gpa-field"
                          v-model="majorgpa[k]"
                        />
                        <span class="of-gpa">of</span>
                        <input
                          type="text"
                          value=""
                          class="gpa-field"
                          disabled
                          placeholder="6.0"
                        />
                      </div>
                      <div
                        class="edu_fields_section edu_fields_section_more" v-tooltip = tooltipData
                      >
                        <label
                          ><img
                            src="images/logo/yak-icon.png"
                            style="margin-right: 2px"
                          />
                          Minor:</label
                        >
                        <div
                          class="minor-field-section float-right"
                          v-for="(input, i) in minor[k]"
                          :key="i"
                        >
                          <input
                            type="text"
                            value=""
                            v-on:blur="insertData(k)"
                            name="minor-field-1"
                            v-on:keyup="addMinorOnKey(k,i)"
                            v-model="input.name"
                            class="minor-text-field"
                          />
                          <span
                            class="icon removebtn remove_honor_field"
                            @click="removeMinor(k,i)"
                            v-show="i || (!i && minor.length > 1 && i !== 0)"
                            ><i class="fa fa-minus"></i
                          ></span>
                          <span
                            class="icon"
                            @click="addMinor(k,i)"
                            v-show="i == 0"
                            ><i class="fa fa-plus"></i
                          ></span>
                        </div>
                      </div>
                    </div>
                    </div>
                    <!--//for loop end-->
                  </div>
                  <div
                    class="education_enhancement_sections"
                    v-if="this.$store.state.AC2 == true"
                  >
                    <div class="edu_section_heading edu_section_heading_logo">
                      <img src="images/logo/yak-icon.png" />Credits Completed
                      for [ABC School]
                    </div>
                    <div class="edu_section_content">
                      <div class="edu_fields_section">
                        <input
                          type="text"
                          value=""
                          v-on:blur="insertData()"
                          class="credits-text-field"
                          placeholder="e.g. Completed 37 credits toward a bachelors degree"
                          v-model="credits_completed"
                          v-tooltip="this.$store.state.tips[1]['tip']"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="education_enhancement_sections"
                    v-if="this.$store.state.isGrade == true"
                  >
                    <div class="edu_section_heading edu_section_heading_logo">
                      <img src="images/logo/yak-icon.png" />Honors and Academic
                      Achievements for [ABC School]
                    </div>
                    <div class="edu_section_content" >
                      <div class="edu_fields_section edu_honors_fields_more" v-tooltip="this.$store.state.tips[2]['tip']">
                        <div
                          class="minor-field-section float-right"
                          style="width: 100%"
                          v-for="(input, k) in academic_achievement"
                          :key="k"
                        >
                          <input
                            type="text"
                            value=""
                            v-on:blur="insertData()"
                            name="minor-field-1"
                            v-on:keyup="addAcademicAchievementOnKey(k)"
                            v-model="input.name"
                            class="minor-text-field"
                          />
                          <span
                            class="icon removebtn remove_honor_field"
                            @click="removeAcademicAchievement(k)"
                            v-show="
                              k ||
                              (!k && academic_achievement.length > 1 && k !== 0)
                            "
                            ><i class="fa fa-minus"></i
                          ></span>
                          <span
                            class="icon add_more_minor_fields"
                            @click="addAcademicAchievement(k)"
                            v-show="k == 0"
                            ><i class="fa fa-plus"></i
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="education_enhancement_sections"
                    v-if="this.$store.state.isGrade == true"
                  >
                    <div class="edu_section_heading edu_section_heading_logo">
                      <img src="images/logo/yak-icon.png" />Societies, Clubs and
                      Organizations for [ABC School]
                    </div>
                    <div class="edu_section_content">
                      <div class="edu_fields_section edu_socities_fields_more" v-tooltip="this.$store.state.tips[3]['tip']">
                        <div
                          class="minor-field-section float-right"
                          style="width: 100%"
                          v-for="(input, k) in clubs_organizations"
                          :key="k"
                        >
                          <input
                            type="text"
                            value=""
                            v-on:blur="insertData()"
                            name="minor-field-1"
                            v-on:keyup="addClubsOrganizationsOnKey(k)"
                            v-model="input.name"
                            class="minor-text-field"
                          />
                          <!--onKeyPress="if(event.keyCode==13){this.addMinorField();}" -->
                          <span
                            class="icon removebtn remove_honor_field"
                            @click="removeClubsOrganizations(k)"
                            v-show="
                              k ||
                              (!k && clubs_organizations.length > 1 && k !== 0)
                            "
                            ><i class="fa fa-minus"></i
                          ></span>
                          <span
                            class="icon add_more_minor_fields"
                            @click="addClubsOrganizations(k)"
                            v-show="k == 0"
                            ><i class="fa fa-plus"></i
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="text-center"
                  style="display: block; margin: 25px auto 15px"
                >
                  <button class="btn1 btn-rounded btn-next mt-4">
                    <span style="margin-left: -14px">Next</span>
                    <span class="pl-5"
                      ><i class="next-icon fas fa-chevron-right"></i
                    ></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="resume-bottom">
              <div class="row mt-3">
                <div class="col-md-7 col-sm-12">
                  <ul>
                    <li>
                      <a href=""><strong>Sitemap</strong></a>
                      <i
                        class="fas fa-circle"
                        style="color: rgb(102, 105, 109); font-size: 25%"
                      ></i>
                    </li>
                    <li>
                      <a href=""><strong>Privacy Policy</strong></a>
                      <i
                        class="fas fa-circle"
                        style="color: rgb(102, 105, 109); font-size: 25%"
                      ></i>
                    </li>
                    <li>
                      <a href=""><strong>Terms of Use</strong></a>
                      <i
                        class="fas fa-circle"
                        style="color: rgb(102, 105, 109); font-size: 25%"
                      ></i>
                    </li>
                    <li>
                      <a href=""><strong>About Us</strong></a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-5 col-sm-12">
                  <p class="text-center">
                    2019 Resume Yak. All rights reserved
                  </p>
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
import store from "../store";
// import { environment_api } from "../../env";

export default {
  name: "dashboard",
  data() {
    return {
      tooltipData:'',
      credits_completed: "",
      error: false,
      errors: {},
      success: false,
      isProgress: false,
      x: 1,
      i:0,
      overallgpa: [],
      majorgpa: [],
      minor: [],
      academic_achievement: [
        {
          name: "",
        },
      ],
      clubs_organizations: [
        {
          name: "",
        },
      ],
      closeBtn: true,
    };
  },
  methods: {
    insertData: function () {
      this.x = 0;
      var mID = 0;
      for(var i=0; i<this.$store.state.SchoolData.length; i++){
        this.axios.post('api/auth/education_enhancement', {
          user_id: this.$store.state.userData.user_id,
          education_id: this.$store.state.SchoolData[i].id,
          minor_id: this.$store.state.minorDate[i][mID].id,
          overallgpa: this.overallgpa[i],
          majorgpa: this.majorgpa[i],
          minor: this.minor[i],
          credits_completed: this.credits_completed,
          academic_achievement: this.academic_achievement,
          clubs_organizations: this.clubs_organizations,
        })
        .then((response) => {
          this.isProgress = true;
          if (response.data.success == true) {
            setTimeout(() => {
              this.isProgress = false;
            }, 10);
          }
        })
        .catch((error) => {
          this.isProgress = false;
          this.error = true;
          this.errors = error.response.data.errors;
        });
      }
    },

    addMinorOnKey: function (k,i) {
      this.x++; //counter increment
      if (this.x == 2) {
        this.minor[k].push({ name: "" });
      }
    },

    addAcademicAchievementOnKey: function (index) {
      this.x++; //counter increment
      if (this.x == 2) {
        this.academic_achievement.push({ name: "" });
      }
    },

    addClubsOrganizationsOnKey: function (index) {
      this.x++; //counter increment
      if (this.x == 2) {
        this.clubs_organizations.push({ name: "" });
      }
    },

    addMinor(k,i) {

      console.log('minor[index]',this.minor);
      console.log('minor[k][i]',this.minor[k].length);
      // for(let j=0; j<=this.minor[k].length; j++){
      //   if(this.minor[k][j] !=''){
      //     console.log('in loop');
      //     this.minor[k].push({ name: "" });
      //   }
      // }
    },
    removeMinor(k,i) {
      this.insertData();
      this.x = 0;
      this.minor[k].splice(i, 1);
    },

    addAcademicAchievement(index) {
      this.academic_achievement.push({ name: "" });
    },
    removeAcademicAchievement(index) {
      this.insertData();
      this.x = 0;
      this.academic_achievement.splice(index, 1);
    },
    addClubsOrganizations(index) {
      this.clubs_organizations.push({ name: "" });
    },
    removeClubsOrganizations(index) {
      this.insertData();
      this.x = 0;
      this.clubs_organizations.splice(index, 1);
    },
    close: function (event) {
      console.log("this.$store.state.grad_Date", this.$store.state);
      this.closeBtn = !this.closeBtn;
    },
  },
 
  mounted() {
    this.tooltipData = this.$store.state.tips[0]['tip'];
    this.overallgpa = this.$store.state.userData.overallgpa;
    this.majorgpa = this.$store.state.userData.majorgpa;
    this.credits_completed = this.$store.state.userData.credits_completed;
    var minordata = this.$store.state.minorDate;
    var minorNew = [];
    var minors = this.$store.state.minorDate.minor;
    console.log(this.$store.state.minorDate);
    let m = 0;
    minordata.map(function (values, key) {
    var minorArr = values[0].minor.split(",");
    var arraysMinor = [];
    minorArr.map(function (value, key) {
      var array = { name: value };
      arraysMinor.push(array);
    });
      minorNew.push(arraysMinor);
      m++;
    });
    console.log('minorNew',minorNew);
    console.log('minorNew',minorNew);
    this.minor = minorNew;
    console.log('new create minor', this.minor[1][0]);
    console.log('new create minor', this.minor[1][0].name);

    //academic_achievements start here
    var academic_achievements = this.$store.state.userData.academic_achievement;
    var academic_achievementArr = academic_achievements.split(",");
   
    var arraysAcademicAchievement = [];
    academic_achievementArr.map(function (value, key) {
      var array = { name: value };
      arraysAcademicAchievement.push(array);
    });
    this.academic_achievement = arraysAcademicAchievement;
  
    //clubs_organizationss start here
    var clubs_organizationss = this.$store.state.userData.clubs_organizations;
    var clubs_organizationsArr = clubs_organizationss.split(",");
    
    var arraysClubsOrganizations = [];
    clubs_organizationsArr.map(function (value, key) {
      var array = { name: value };
      arraysClubsOrganizations.push(array);
    });
    this.clubs_organizations = arraysClubsOrganizations;

    //overallgpas start here
    var overallgpas = this.$store.state.SchoolData;
    var arraysoverallgpas = [];
    overallgpas.map(function (value, key) {
      var array = value.overallgpa;
      arraysoverallgpas.push(array);
    });
    this.overallgpa = arraysoverallgpas;

    //majorgpas start here
    var majorgpas = this.$store.state.SchoolData;
    var arraysmajorgpas = [];
    majorgpas.map(function (value, key) {
      var array = value.majorgpa;
      arraysmajorgpas.push(array);
    });
    this.majorgpa = arraysmajorgpas;
  },
};
</script>

