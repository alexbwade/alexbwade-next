const defaultHeaders = {
  "Content-Type": "application/json",
};

/**
 * Fetch data using the native Fetch API and normalizing the response
 * @param {string} url the URL to fetch from
 * @param {Object} params the parameters to pass to fetch
 * @returns {Promise<{data: Object, error: Error}>} the HTTP response data or an error
 */
export default async function fetchJson(url: string, params: RequestInit) {
  try {
    const res = await fetch(url, {
      headers: { ...defaultHeaders, ...params.headers },
      ...params,
    });
    const json = await res.json();

    return { data: json };
  } catch (err) {
    if (err instanceof DOMException && err.name == "AbortError") {
      return { aborted: true };
    }

    console.error("Failed to fetch: ", err);

    return { error: err };
  }
}
