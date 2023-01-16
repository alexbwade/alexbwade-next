import Head from "next/head";
import { Mulish } from "@next/font/google";

import { CreateUser as CreateUserComponent } from "~templates";

const font = Mulish({ subsets: ["latin"] });

export default function CreateUser() {
  return (
    <>
      <Head>
        <title>Create user</title>
        <meta name="description" content="Create user" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={font.className}>
        <CreateUserComponent />
      </div>
    </>
  );
}
