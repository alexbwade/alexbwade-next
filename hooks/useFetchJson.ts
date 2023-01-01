/* istanbul ignore file */
import { useEffect, useState } from "react";

import { fetchJson, getErrorMessage } from "~utils";

type NormalizedResponse = {
  data?: any;
  error?: unknown;
  aborted?: boolean;
};

type FetchOptions = {
  params?: object | null;
  condition?: boolean;
  dependencies?: unknown[];
};

/**
 * @fileoverview useFetchJson hook
 * @param {string} url url to fetch from
 * @param {Object} options
 * @param {Object} options.params fetch API parameters
 * @param {boolean} options.condition under what condition should the fetch be executed
 * @returns
 */
export default function useFetchJson(url: string, options: FetchOptions = {}) {
  if (!url) {
    throw new Error("useFetchJson requires a url");
  }

  const { params = null, condition = true, dependencies = [] } = options;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(condition);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!condition) return;

    const controller = new AbortController();

    const getData = async () => {
      setLoading(true);

      const res: NormalizedResponse = await fetchJson(url, { ...params, signal: controller.signal });
      if (res.aborted) {
        return;
      }

      if (res.error) {
        const errorMessage: string = getErrorMessage(res.error);

        setError(errorMessage);
      }

      if (res.data) {
        setData(res.data);
      }

      setLoading(false);
    };

    getData();

    return () => controller.abort();
  }, [url, params, condition, ...dependencies]);

  return { data, loading, error };
}
