export default ({ app }) => {
  // Get localized path for homepage
  // const localePath = app.localePath('index');

  // Get path to switch current route to Russian
  // const switchLocalePath = app.switchLocalePath('ru');

  // beforeLanguageSwitch called right before setting a new locale
  // app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
  //   console.log(oldLocale, newLocale);
  // };

  // onLanguageSwitched called right after a new locale has been set
  debugger;
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log(oldLocale, newLocale);
  };
};