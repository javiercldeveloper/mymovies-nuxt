import axios from 'axios'

export function getQueryUrl (resource, params = {}) {
  let url = `${process.env.VUE_APP_API_URL}${resource}?api_key=${process.env.VUE_APP_FETCH_API_KEY}`
  if (params.language) {
    url = url.concat(`&language=${params.language}`)
  }
  if (params.query) {
    url = url.concat(`&query=${params.query}`)
  }
  if (params.page) {
    url = url.concat(`&page=${params.page}`)
  }
  return url
}

export function fetchTmdbData (resource, params = {}) {
  const url = getQueryUrl(resource, params)

  return axios({
    method: 'get',
    url
  })
}

export default {
  fetchTmdbData,
  getQueryUrl
}
