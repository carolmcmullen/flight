export const mapConfig =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'map',
      url: '/map',
      component: 'ftMap'
    })
  }