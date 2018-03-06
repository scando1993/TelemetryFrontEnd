import axios from 'axios'
import config from '../config'

export default {
  request (method, uri, data = null, headers = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

    // var url = config.serverURI + uri
    return axios({
      method: method,
      baseURL: config.serverURI,
      url: uri,
      data: data,
      headers: headers
    })
  }
}
