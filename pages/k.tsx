import Head from "next/head";
import dynamic from "next/dynamic";
import { Mulish } from "@next/font/google";

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
        <link
          href="https://fonts.googleapis.com/css?family=Parisienne:300,300i,400,400i,700,700i,900,900i"
          rel="stylesheet"
        />
      </Head>
      <div className={font.className}>
        <Karelly />
      </div>
    </>
  );
}
