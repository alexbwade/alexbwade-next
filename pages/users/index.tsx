import Head from "next/head";
import { Mulish } from "@next/font/google";

import { Users as UsersComponent } from "~templates";

const font = Mulish({ subsets: ["latin"] });

export default function Users() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="description" content="Users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={font.className}>
        <UsersComponent />
      </div>
    </>
  );
}
