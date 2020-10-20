const removeLocalToken = () => {
  const token = window.localStorage.getItem('token');
  if (!token) return;
  localStorage.removeItem('token');
}

export default removeLocalToken;
