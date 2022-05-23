<template>
  <div class="background-fearless min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <form @submit.prevent="userRegistration">
          <h1 class="mb-8 text-3xl text-center">
            Sign up
          </h1>
          <input
            v-model="user.name"
            type="name"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="name"
            placeholder="Username"
          >
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
            name="confirm_password"
            placeholder="Confirm Password"
          >

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a> and
            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </form>
      </div>

      <div class="text-white mt-6">
        Already have an account?
        <NuxtLink to="/log-in">
          <a class="no-underline border-b border-blue text-blue">
            Log in
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
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userRegistration () {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
        this.$router.push('/log-in')
      } catch (e) {
        console.log(e)
      }
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
