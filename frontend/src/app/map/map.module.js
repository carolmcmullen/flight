import mapLocations from './map.locations'
import ftMap from './map.component.js'
import mapService from './map.service'

export default
  angular
    .module('flight.map', ['ngMap'])
    .constant('locations', mapLocations)
    .component('ftMap', ftMap)
    .service('MapService', mapService)
    //.service('$map', mapService)
    .name