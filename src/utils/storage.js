export function getLocal(key) {
  return localStorage.getItem(key)
}
export function setLocal(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  return localStorage.setItem(key, value)
}
export function removeLocal(key) {
  return localStorage.removeItem(key)
}
export function getSession(key) {
  return sessionStorage.getItem(key)
}
export function setSession(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  return sessionStorage.setItem(key, value)
}
export function removeSession(key) {
  return sessionStorage.removeItem(key)
}

