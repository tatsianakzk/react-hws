import { useState } from "react";

interface FetchConfig {
  url: string;
  options?: RequestInit;
}

interface FetchResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

const useFetch = <T,>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async ({ url, options }: FetchConfig): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const requestBody = options?.body ? JSON.parse(options.body.toString()) : null;

      const response = await fetch(url, options);
      const responseStatus = response.status;

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = (await response.json()) as T;

      const logEntry = {
        timestamp: new Date().toISOString(),
        url,
        method: options?.method || "GET",
        requestBody,
        responseStatus,
        responseData,
      };

      const logs = JSON.parse(localStorage.getItem("apiLogs") || "[]");
      logs.push(logEntry);
      localStorage.setItem("apiLogs", JSON.stringify(logs));

      setData(responseData);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, fetchData };
};

export default useFetch;