const checkTokenExpiry = (decodedTokenInfo) => {
  if (!decodedTokenInfo) return false;
  const { exp } = decodedTokenInfo;
  const now = Math.floor(new Date().getTime() / 1000);
  if (now - exp > 0) return false;
  return true;
};

export default checkTokenExpiry;
