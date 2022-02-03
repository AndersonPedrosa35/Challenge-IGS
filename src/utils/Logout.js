export function logout(history) {
  localStorage.clear();
  history.push('/login')
}