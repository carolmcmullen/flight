
	/* @ngInject */
export class MapService {
  constructor($http) {
      'ngInject'
    this.$http = $http
  }

  getMarkerByCityName(name) {
    return this.$http
      .get('http://localhost:8000/location/name', { params: { name } })
      .then(result => result.data)
  }
}
