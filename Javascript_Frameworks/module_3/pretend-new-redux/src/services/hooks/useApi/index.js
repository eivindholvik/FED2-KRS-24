import { useEffect, useState } from "react";

export function useApi(url) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("not ok");
        }

        const data = await response.json();

        setData(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, [url]);

  return { data, isError, isLoading };
}