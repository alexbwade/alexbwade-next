import Head from "next/head";
import { Mulish } from "@next/font/google";

import { Home as HomeComponent } from "~templates";

const font = Mulish({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Wade</title>
        <meta name="description" content="Alex Wade - developer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={font.className}>
        <HomeComponent />
      </div>
    </>
  );
}
