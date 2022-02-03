export function getUserOrRedirectLogin(setEmail, history){
  const user = localStorage.getItem('user');
  if (user === null) {
    return history.push('/login');
  }
  setEmail(JSON.parse(user).email)
}