<template>
    <div>
      <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container"> <a class="navbar-brand" href="index.html"> <img src="images/logo/logo.png" alt="Resume Yak" class="logo"> </a> <span class="icon icon_menu"><i class="fas fa-bars"></i></span>
            <ul class="navbar main_navigation">
              <li><a href="#"><span class="icon"><i class="fas fa-user-alt"></i></span> My Profile</a></li>
              <li><a href="#"><span class="icon"><i class="fas fa-file-alt"></i></span> My Resumes</a></li>
              <li v-if="!this.$store.state.isLoggedIn">
                    <router-link :to="{ name: 'login' }">Login</router-link>
                </li>
                <li v-if="this.$store.state.isLoggedIn">
                    <a href="#" class="" @click="logout()">Logout</a>
                </li>
              <li class="active_nav has_sub_nav"><a href="#"><span class="icon"><i class="fas fa-list-ul"></i></span> Resume Name <span class="icon icon_right"><i class="fas fa-caret-down"></i></span></a>
                <div class="resume_name_sub_menu">
                <span class="icon"><i class="fas fa-caret-up"></i></span>
                    <ul>
                    <li class="visited-page"><a href="#">Experience Finder</a></li>
                    <li class="current-page"  v-if="this.$store.state.grad_Date == true || this.$store.state.AC2 == true"><a href="#">Education Enhancements</a></li>
                    <li><a href="#">Job Descriptions</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Endorsements</a></li>
                    <li><a href="#">Professional Enhancements</a></li>
                    <li><a href="#">Resume Type</a></li>
                    <li><a href="#">Resume Builder</a></li>
                    </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <!-- End Header Part -->
      <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'App',
  methods: {
    logout() {
          store.commit('LogoutUser');
          this.$router.push({ name: 'login'})
          this.$toaster.success('Logout successfully...')
    }
  }
}
</script>

