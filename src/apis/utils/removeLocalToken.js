const removeLocalToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return;
  localStorage.removeItem('token');
}

export default removeLocalToken;
