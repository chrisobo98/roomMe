<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">
          roomMe
        </a>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click="toggleNavbar()">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
      <div :class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/">
              <font-awesome-icon :icon="['fas', 'search']" class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/">
              <font-awesome-icon :icon="['fas', 'sticky-note']" class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-2">Post</span>
            </a>
          </li>
          <div v-if="currentUser" class="flex">
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/">
                <span class="ml-2">Welcome, {{ currentUser.email }}!</span>
              </a>
            </li>
            <li class="nav-item">
              <button class="rounded-full inline-flex bg-green-500 hover:bg-green-600 border-0 py-2 px-6 mx-2 text-white focus:outline-none rounded mt-4 md:mt-0" @click="signOut()">
                Sign Out
              </button>
            </li>
          </div>
          <div v-else>
            <nuxt-link to="/sign-up">
              <button class="rounded-full inline-flex items-center bg-green-500 hover:bg-green-600 border-0 py-2 px-6 mx-2 text-white focus:outline-none rounded mt-4 md:mt-0">
                Sign Up
              </button>
            </nuxt-link>
            <nuxt-link to="/log-in">
              <button class="rounded-full inline-flex items-center bg-green-500 hover:bg-green-600 border-0 py-2 px-6 mx-2 text-white focus:outline-none rounded mt-4 md:mt-0">
                Log In
              </button>
            </nuxt-link>
          </div>
        </ul>
        <!-- If user is logged in -->
        <!-- <div v-if="currentUser">
          <li class="nav-item">
            <a class="text-white">
              Welcome, {{ currentUser.email }}!
            </a>
          </li>
          <button class="rounded-full inline-flex items-center bg-green-500 hover:bg-green-600 border-0 py-2 px-6 mx-2 text-white focus:outline-none rounded mt-4 md:mt-0" @click="signOut()">
            Sign Out
          </button>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainHeader',
  data () {
    return {
      showMenu: false
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.user
    }
  },
  methods: {
    toggleNavbar () {
      this.showMenu = !this.showMenu
    },
    signOut () {
      this.$fire.auth.signOut()
      this.$router.push('/log-in')
    }
  }
}
</script>
