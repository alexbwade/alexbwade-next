import Head from "next/head";
import { Mulish } from "@next/font/google";

import { Test as TestComponent } from "~templates";

const font = Mulish({ subsets: ["latin"] });

export default function Test() {
  return (
    <>
      <Head>
        <title>Test page</title>
        <meta name="description" content="Test page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={font.className}>
        <TestComponent />
      </div>
    </>
  );
}
