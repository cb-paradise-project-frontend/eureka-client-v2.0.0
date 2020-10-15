export default function destructure(axiosResponse) {
  const { data: { data } } = axiosResponse;

  return data || false;
}
