export type UseFetchJsonData = Array<unknown> | Record<string, unknown> | number | null;
export type UseFetchJsonErrorMessage = string | null;
export type UseFetchJsonLoading = boolean;

interface UseFetchJsonResponse {
  data: UseFetchJsonData;
  error: UseFetchJsonErrorMessage;
  loading: UseFetchJsonLoading;
}

export default UseFetchJsonResponse;
