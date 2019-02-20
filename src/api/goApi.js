import axios from 'axios'
var apiUrlBase = 'localhost:8005'

export default {
  getAll(url, data) {
    axios.get(apiUrlBase + url)
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
      var info = response.data
      data.dataGet = Object.values(info)
    })
    .catch((err) => {
    // Request failed.
      data.error = err
      console.log('FAIL', err)
    })
    return data
  },
  // para pedir campos en especifico, se pasa un objeto con los parametros del get y sus valores
  getCustom(objectFields, url, data) {
    axios.get(
      apiUrlBase + url,
      {params:
        objectFields
      }
    )
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
      var info = response.data
      data.dataGet = Object.values(info)
    })
    .catch(error => {
      // Request failed.
      data.error = error
    })
    return data
  },
    // se realiza un post dependiedo lo que almacene dataPostDel
    // se asume que exista un binding entre los campos del form con los de dataPostDel
  post(url, data) {
    axios.post(
    apiUrlBase + url,
    data.dataPostDel // esto debe cambiar acuerdo a como se use el form
    )
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
    })
    .catch(error => {
      // Request failed.
      data.error = error
    })
    return data
  },
  detele(url, data) {
    axios.delete(
    apiUrlBase + url,
    data.dataPostDel
    )
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
    })
    .catch(error => {
      // Request failed.
      data.error = error
    })
    return data
  }
}
