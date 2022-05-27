export default function ({ store, app, route, redirect }) {
  const user = store.state.user
  if (route.path === '/log-in') {
    // leave them on the sign in page
  } else if (route.path !== '/') {
    // we are on a protected route
    if (!user) {
      // take them to sign in page
      return redirect('/log-in')
      // return redirect('/auth/signout')
    }
  } else if (route.path === '/') {
    if (user) {
      // leave them on the sign in page
    } else {
      return redirect('/log-in')
    }
  }
}
