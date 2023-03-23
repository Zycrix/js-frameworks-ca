import React, { useState, useEffect } from "react";

function App(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, loading, error };
}
