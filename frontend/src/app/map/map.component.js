import templateUrl from './map.template.html'
import locations from './map.locations'
//import MapService from './map.service'

/* @ngInject */
const controller = class MapController {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []

  constructor($http, MapService, appService) {
    'ngInject'
    //this.settings = ftMapSettings
    this.$http = $http
    this.service = appService
    this.mapService = MapService

    // get flights
    this.loadFlights()
    
    /*add markers from an angular constant
    const { memphis, nashville, knoxville } = locations
    const markers = [memphis, nashville, knoxville]

    //markers.forEach(marker => this.addMarker(marker))

    // add paths manually
    const paths = [
      [memphis, nashville, '#CC0099'],
      [nashville, knoxville, '#AA1100']
    ]

    paths.forEach(args => this.addPath(...args))
    */
  }

loadFlights () {
    this.service.getFlights(false)
      .then(this.successCallback = (response) => {
        console.log(response)
     response.forEach(flight => this.getMarkers(flight.origin, flight.destination)) 
     
     /*
        let i = 0;
     console.log('Markers: ' +this.markers)
     while(i < markers.length){
        this.addPath(this.markers[i], this.markers[i+1]);
        i = i + 2;
     } 
     */
      
  }, this.errorCallback = (response) => {
    this.error = 'Could not load flights.'
  })
}

bugWithCityMapping(city) {
  if(city == "KNOXVILLE")
    return "Knoxville"
  if(city == "CHATTANOOGA")
    return "Chattanooga"
  if(city == "NASHVILLE")
    return "Nashville"
  return city;

}
getMarkers(origin, dest){
  this.mapService.getMarkerByCityName(this.bugWithCityMapping(origin))
        .then(mark => {          
          this.addMarker(mark)
        })
    this.mapService.getMarkerByCityName(this.bugWithCityMapping(dest))
        .then(mark => {
          this.addMarker(mark)
        }) 
}

  addMarker({ latitude, longitude }) {    
    this.markers.push({
      position: [latitude, longitude]
    })
    
    if(this.markers.length % 2 == 0 && this.markers.length > 1){
      this.addPath(this.markers[this.markers.length - 2], this.markers[this.markers.length - 1])
    }
  }

  addPath(markA, markB) {     
    console.log('Marker position: ' + markA.position + ', ' + markA)

    this.paths.push({
      path: [markA.position, markB.position],
      strokeColor: '#CC0099',
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true
    })
  }
}

export const ftMap = {
  controller,
  templateUrl,
  controllerAs: '$map'
}