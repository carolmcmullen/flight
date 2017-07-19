/*export class HttpService  {
  constructor ($http) {
    'ngInject'
    this.$http = $http
  }

  getUserFollowing (username) {
    return this.$http.get(`http://localhost:8080/user/users/@${username}/following`)
    .then((response) => {
      return response.data
    }, (error) => {
      console.log('failed getUserFollowing', error.data)
    })
  }

  getUserFollowers (username) {
    return this.$http.get(`http://localhost:8080/user/users/@${username}/followers`)
    .then((response) => {
      return response.data
    }, (error) => {
      console.log('failed getUserFollowers', error.data)
    })
  }

  getAllUsers () {
    return this.$http.get('http://localhost:8080/user/users')
    .then((response) => {
      return response.data
    }, (error) => {
      console.log('failed getAllUsers', error.data)
    })
  }

  getFlights () {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:8000/flights'
    }).then(this.successCallback = (response) => {
     return response.data
    }, this.errorCallback = (response) => {
      this.error = 'Could not load flights.'
    })
  }

  unFollowUser (credentials, userFollowed) {
    return this.$http.post(`http://localhost:8080/user/users/@${userFollowed}/unfollow`, credentials)
    .then((response) => {
      console.log('success unFollowUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed unFollowUser', error.data)
    })
  }

}*/
