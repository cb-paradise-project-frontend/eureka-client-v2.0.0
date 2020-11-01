import React, { useState } from 'react';

const useFetch = async (component) => {
  const [fetchState, setFetchState] = useState({
    loading: false,
    error: null,
  });

  const fetch = (fetcher) => {
    setFetchState({
      loading: true,
      error: null,
    })

    return fetcher()
      .then((res) => {
        setFetchState({
          loading: false,
        });
        return res.data;
      })
      .catch((err) => {
        setFetchState({
          loading: false,
          error: err.response.data.message,
        })
      });
  }

  return (
    <component
      loading={fetchState.loading}
      error={fetchState.error}
      fetch={fetch}
    />
  );
}

export default useFetch;
