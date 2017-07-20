export const usersettingsConfig =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'usersettings',
      url: '/update',
      component: 'ftUserSettings'
    })
  }
