/**
 * Created by Dat Tran on 4/26/17.
 */

export function get(api, headers) {

  return fetch(api, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  }).then(response => response.json().then(data => data))
    .catch(err => console.log('There is an error occurred while requesting api', err, api))
}

export function post(api, headers, body) {
  if (typeof (body) === 'object')
    body = JSON.stringify(body)

  return fetch(api, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    body: body
  })
    .then(response => response.json().then(data => data))
    .catch(err => console.log('There is an error occurred while requesting api', err, api))
}