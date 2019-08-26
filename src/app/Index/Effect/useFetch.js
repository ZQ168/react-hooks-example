import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState({ loading: true, data: null });
  useEffect(() => {
    console.log('fetchrender');
    setData({ data: null, laoding: true });
    fetch(url)
      .then(x => x.text())
      .then(y => setData({ data: y, laoding: false }));
  }, [url, setData]);
  return data;
}
