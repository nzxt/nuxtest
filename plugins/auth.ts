export default ({ app: { $auth }, redirect }) => {
  // Only _actual_ login/outs (including resets) will be watched here.
  $auth.$storage.watchState('loggedIn', (isLoggedIn) => {
    // Follow @nuxtjs/auth workflow.
    !isLoggedIn && $auth.redirect('home');
  });

  const { userName, loggedIn } = $auth;

  if (!loggedIn) { redirect('301', '/account/login/'); }

  console.log(`[AUTH] plugin says: Hi, ${userName}!`);
};
