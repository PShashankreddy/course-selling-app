import axios from 'axios'

export const api = axios.create({
  baseURL: '/api/v1'
})

export function setUserToken(token) {
  if (token) localStorage.setItem('userToken', token)
}

export function setAdminToken(token) {
  if (token) localStorage.setItem('adminToken', token)
}

export function authHeader(kind) {
  const key = kind === 'admin' ? 'adminToken' : 'userToken'
  const token = localStorage.getItem(key)
  return token ? { token } : {}
}

