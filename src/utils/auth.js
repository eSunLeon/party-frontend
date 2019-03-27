export function setLogin(login) {
  return localStorage.setItem('login', login)
}

export function getLogin() {
  return localStorage.getItem('login')
}

export function removeLogin() {
  return localStorage.removeItem('login')
}

export function setAvatar(avatar) {
  return localStorage.setItem('avatar', avatar)
}
export function getAvatar() {
  return localStorage.getItem('avatar')
}
export function removeAvatar() {
  return localStorage.removeItem('avatar')
}
export function setLang(Lang) {
  return localStorage.setItem('lang', Lang)
}
export function getLang() {
  return localStorage.getItem('lang')
}
export function removeLang() {
  return localStorage.removeItem('lang')
}
