import LoginForm from "@/components/Form/LoginForm";
import PlatypusHead from "@/components/SVG/PlatypusHead";
import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
} from "next-auth/react";
import Head from "next/head";
import React from "react";

interface IGoogleEntryProvider {
  providers: Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider>;
}

const Login = ({ providers }: IGoogleEntryProvider) => {
  return (
    <>
      <Head>
        <title>Login | Platypus</title>
        <meta name="platypus" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vm4/favicon.ico" />
      </Head>
      <main className="min-w-screen flex min-h-screen items-center justify-center">
        <div className="flex flex-col gap-1 px-5 lg:flex-row lg:gap-32">
          <div className="flex items-center justify-center gap-1 lg:flex-col">
            <PlatypusHead className="h-12 lg:h-48" />
            <h1 className="text-4xl font-bold text-primary lg:text-7xl">
              Login
            </h1>
          </div>
          <LoginForm providers={providers} />
        </div>
      </main>
    </>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      providers: await getProviders(),
    },
  };
};
