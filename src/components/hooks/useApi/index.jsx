import React, { useState, useEffect } from "react";

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

        if (window.localStorage.getItem("data") !== null) {
          console.log("fetching data from local storage");
          setData(JSON.parse(window.localStorage.getItem("data")));
          return;
        } else {
          console.log("fetching data from api");
          const data = await fetch(url);
          const json = await data.json();
          setData(json);
          window.localStorage.setItem("data", JSON.stringify(json));
          console.log(json);
        }
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
