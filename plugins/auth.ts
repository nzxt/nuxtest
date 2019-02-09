export default ({ app, redirect }) => {
  // $auth.onError((error, name, endpoint) => {
  //   debugger
  //   console.error(endpoint, name, error)
  // })

  // Only _actual_ login/outs (including resets) will be watched here.
  app.$auth.$storage.watchState('loggedIn', (isLoggedIn) => {
    // Follow @nuxtjs/auth workflow.
    // !isLoggedIn && app.$auth.redirect('home')

    const indexLocalePath = app.localePath('index')
    !isLoggedIn && redirect('301', indexLocalePath)
    // !isLoggedIn && app.router.push(indexLocalePath)
  })

  // if (!app.$auth.loggedIn) {
  // const loginLocalePath = app.localePath('login')
  // redirect('301', loginLocalePath)
  // }

  // console.log(`[AUTH] Hi, ${app.$auth.userName}!`)
  debugger
}
