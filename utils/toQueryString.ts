const QUERY_DELIMITER = "?";
const PARAM_DELIMITER = "&";

interface SerializableObject {
  [key: string]: string | number | boolean | SerializableObject | SerializableObject[];
}

/**
 * Convert a serializable object containing query string parameters to a query string
 * @param {Object} params a serializable object containing query string parameters
 * @param {boolean} includeQueryDelimiter whether to include the opening "?" (defaults to false)
 * @returns {string} a query string
 * @example toQueryString({ foo: 'bar', baz: 1 }) // => 'foo=bar&baz=1'
 */
export default function toQueryString(params: SerializableObject, includeQueryDelimiter: boolean = false): string {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${String(value)}`)
    .join(PARAM_DELIMITER);

  return includeQueryDelimiter ? `${QUERY_DELIMITER}${query}` : query;
}
