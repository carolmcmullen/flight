import ngUirouter from 'angular-ui-router'
import localStorage from 'angular-local-storage'
import ngMap from 'ngmap'
//import flightMap from 'app/map/map.module'
// import ngMaterial from 'angular-material'
// import ngAria from 'angular-aria'
// import ngAnimate from 'angular-animate'

import { ftApp } from 'app/component/app.component'
import { ftHeader } from 'app/component/header.component'
//import { ftGame } from 'app/component/body.component'
import { ftLogin } from 'app/component/login.component'
import { ftHome } from 'app/component/home.component'
import { ftUsers } from 'app/component/users.component'
import { ftUserSettings } from 'app/component/usersettings.component'
import { ftProfile } from 'app/component/userprofile.component'
import { ftMap } from 'app/map/map.component'

import { AppService } from 'app/app.service'
//import { HttpService } from 'app/httpservice.service'
import { MapService } from 'app/map/map.service'
import { run } from 'app/app.run'
import { ftGameSettings } from 'app/constants'
//import { mapLocations } from 'app/map/map.locations'

import { config } from 'app/config/app.config'
import { loginConfig } from 'app/config/login.config'
import { gameConfig } from 'app/config/game.config'
import { homeConfig } from 'app/config/home.config'
import { usersConfig } from 'app/config/users.config'
import { usersettingsConfig } from 'app/config/usersettings.config'
import { profileConfig } from 'app/config/userprofile.config'
import { mapConfig } from 'app/config/map.config'

export default ng
  .module('ft.buttons', [localStorage,
    ngMap,
    ngUirouter,
    loginConfig,
    gameConfig,
    usersConfig,
    usersettingsConfig,
    profileConfig,
    // ngMaterial,
    // ngAria,
    // ngAnimate,
    homeConfig,
    mapConfig
  ])
  .service('appService', AppService)
  //.service('httpservice', HttpService)
  .service('MapService', MapService)
  .component('ftApp', ftApp)
  .component('ftHeader', ftHeader)
  //.component('ftGame', ftGame)
  .component('ftLogin', ftLogin)
  .component('ftHome', ftHome)
  .component('ftUsers', ftUsers)
  .component('ftProfile', ftProfile)
  .component('ftMap', ftMap)
  .component('ftUserSettings', ftUserSettings)
  .constant('ftGameSettings', ftGameSettings)
  //.constant('MapLocations', MapLocations)
  .config(config)
  .run(run)
  .name
