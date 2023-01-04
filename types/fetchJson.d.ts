export type FetchJsonData = Array<unknown> | Record<string, unknown> | number | null;
export type FetchJsonError = unknown;
export type FetchJsonAborted = boolean;

interface FetchJsonResponse {
  data?: FetchJsonData;
  error?: FetchJsonError;
  aborted?: FetchJsonAborted;
}

export default FetchJsonResponse;
