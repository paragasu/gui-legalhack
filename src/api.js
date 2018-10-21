const api_url = 'http://lawframe-development.herokuapp.com'

import axios from 'axios'
import ky from 'ky'

export function post(endpoint, data, done){
  ky.post(api_url + endpoint, { json: data })
    .then(res => {
      return res.json().then(x => done(null, x))
    })
    .catch(err => console.error(err))
}
