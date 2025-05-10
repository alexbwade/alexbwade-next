import Head from "next/head";
import { Mulish } from "next/font/google";

import { EditUser as EditUserComponent } from "~templates";

const font = Mulish({ subsets: ["latin"] });

export default function EditUser() {
  return (
    <>
      <Head>
        <title>Edit user</title>
        <meta name="description" content="Edit user" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={font.className}>
        <EditUserComponent />
      </div>
    </>
  );
}
