import { Button } from "@/components/ui/button";
import { deleteCookie } from "cookies-next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function index() {
  const router = useRouter();
  useEffect(() => {
    deleteCookie("accessToken");
  }, []);
  return (
    <>
      <Head>
        <title>Unauthorized | Platypus</title>
        <meta name="platypus" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vm4/favicon.ico" />
      </Head>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
        <p>401 | Unauthorized Token Expired</p>
        <Button
          type="button"
          onClick={() => router.push("/login")}
          name="goto-login"
        >
          Go to Login Page
        </Button>
      </div>
    </>
  );
}

export default index;
