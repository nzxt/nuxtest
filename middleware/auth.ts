export default function ({ app }) {
  const { $auth: { loggedIn, redirect } } = app
  debugger
  if (!loggedIn) {
    redirect('logout')
  }
}
