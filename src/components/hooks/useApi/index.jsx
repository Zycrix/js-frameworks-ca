import { useState, useEffect } from "react";

function useApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        setError(false);

        const data = await fetch(url);
        const json = await data.json();
        setData(json);
      } catch (e) {
        console.log(e);
        setError(true);
        setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, loading, error, errorMessage };
}

export default useApi;
