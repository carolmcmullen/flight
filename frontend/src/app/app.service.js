export class AppService {
flights = []

  constructor ($http, $interval, localStorageService, $timeout, ftGameSettings) {
    'ngInject'
    this.$http = $http
    this.$interval = $interval
    this.localStorageService = localStorageService
    this.$timeout = $timeout
  }
  getFlights (refreshData) {
    if(this.flights.length > 0 && !refreshData){
      return this.flights
    }
    return this.$http({
      method: 'GET',
      url: 'http://localhost:8000/flights'
    }).then(this.successCallback = (response) => {
      this.flights = response.data      
     return response.data
    }, this.errorCallback = (response) => {
      this.error = 'Could not load flights.'
    })
  }
 /* multiple () {
    this.settings.defaultPointSettings.increment += this.settings.defaultPointSettings.modifier.amount
    this.settings.defaultGameSettings.total += this.settings.defaultPointSettings.increment * this.settings.defaultPointSettings.modifier.amount
    this.settings.defaultPointSettings.modifier.amount += 0.2
    this.decrementMulti()
  }
  decrementMulti () {
    this.settings.defaultGameSettings.total -= this.settings.defaultPointSettings.modifier.cost
  }
  decrementAuto () {
    this.settings.defaultGameSettings.total -= this.settings.defaultPointSettings.autoclicker.cost
  }
  saveState (key, val) {
    this.localStorageService.set(key, val)
  }
  get points () {
    return this.settings.defaultGameSettings.total
  }
  set points (val) {
    this.settings.defaultGameSettings.total = val
  }
  auto () {
    this.$interval(() => {
      this.settings.defaultGameSettings.total++
      this.saveState('automod', this.settings.defaultGameSettings.autoclickers)
      this.saveState('points', this.settings.defaultGameSettings.total)
    }, 1000)
  }*/
}
