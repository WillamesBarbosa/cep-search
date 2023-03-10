import P from 'prop-types';

import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(async (response) => {
        const jsonResponse = await response.json();
        setValue(jsonResponse);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [url]);
  return { isLoading, value, error };
};

useFetch.propTypes = {
  url: P.string.isRequired,
};
