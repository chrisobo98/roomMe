<template>
  <div class="background-fearless min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <form @submit.prevent="userLogin">
          <h1 class="mb-8 text-3xl text-center">
            Log In
          </h1>
          <input
            v-model="user.email"
            type="email"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          >

          <input
            v-model="user.password"
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          >

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Sign In
          </button>
          <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgot-password">
              Forgot password ?
            </router-link>
          </p>
        </form>
      </div>

      <div class="text-white mt-6">
        Don't have an account?
        <NuxtLink to="/sign-up">
          <a class="no-underline border-b border-blue text-blue">
            Sign Up
          </a>.
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    userLogin () {
      this.$fire.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }
}
</script>
<style scoped>
.background-fearless {
  background: linear-gradient(115deg, rgb(211, 255, 215) 0%, rgb(0, 0, 0) 100%), radial-gradient(90% 100% at 50% 0%, rgb(200, 200, 200) 0%, rgb(22, 0, 45) 100%), radial-gradient(100% 100% at 80% 0%, rgb(250, 255, 0) 0%, rgb(36, 0, 0) 100%), radial-gradient(150% 210% at 100% 0%, rgb(112, 255, 0) 0%, rgb(20, 175, 125) 0%, rgb(0, 10, 255) 100%), radial-gradient(100% 100% at 100% 30%, rgb(255, 77, 0) 0%, rgba(0, 200, 255, 1) 100%), linear-gradient(60deg, rgb(255, 0, 0) 0%, rgb(120, 86, 255) 100%);
  background-blend-mode: overlay, overlay, difference, difference, difference, normal;
}
</style>
