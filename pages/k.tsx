import Head from "next/head";
import dynamic from "next/dynamic";
import { Mulish } from "next/font/google";

const Karelly = dynamic(() => import("~templates/Karelly"), { ssr: false });

const font = Mulish({ subsets: ["latin"] });

export default function K() {
  return (
    <>
      <Head>
        <title>Alex Wade</title>
        <meta name="description" content="Karelly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={font.className}>
        <Karelly />
      </div>
    </>
  );
}
