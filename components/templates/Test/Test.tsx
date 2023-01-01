/* istanbul ignore file */
import { useFetchJson } from "~hooks";

import styles from "./Test.module.scss";

export default function Test() {
  const { data, loading, error } = useFetchJson("/api/test");

  return (
    <div className={styles.wrapper}>
      <h1>Test page</h1>
      <p>{error ? error : loading ? "Loading..." : data}</p>
    </div>
  );
}
