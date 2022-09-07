export default ({ app: { $axios }, app }, inject) => {
  const request = (routeData = {}, data, config) => {
    return new Promise((resolve, reject) => {
      $axios[routeData.method](routeData.path, data, config).then((data) => {
        resolve(data.data)
      }).catch((e) => {
        const status = e.response.status
        if (status === 401) {
            alert('Anuthorized!')
        } else if (status === 500) {
          alert('Server Error!')
        } else if (status === 400) {
          app.$rtoast('Bad Request!')
        } else if (showMessage) {
          app.$rtoast('Error!')
        }
        reject(e)
      })
    })
  }

  inject('request', request)
  app.$request = request
}
