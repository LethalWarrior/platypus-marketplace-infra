import NewPasswordForm from "@/components/Form/NewPasswordForm";
import { Button } from "@/components/ui/button";
import decodeAccessToken from "@/utils/decodeAccessToken";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export interface NewPasswordCode {
  changeCode: string;
}

const NewPasswordCode = ({ changeCode }: NewPasswordCode) => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [inititalize, setInitialize] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (inititalize) {
      const currentDate = new Date();
      const currentMilis = currentDate.getTime();
      const decodedCode = decodeAccessToken(changeCode);

      const expirationTokenTime = new Date(decodedCode.exp * 1000);
      const timeDifference = (expirationTokenTime as any) - currentMilis;
      const secDifference = Math.floor(timeDifference / 1000);
      const minDifference = Math.floor(timeDifference / (1000 * 60));
      const second = secDifference % 60;
      const minutes = minDifference % 60;

      if (second <= 0 && minutes <= 0) {
        setSec(0);
        setMin(0);
        setInitialize(false);
      } else {
        setSec(second);
        setMin(minutes);
        setInitialize(false);
      }
    } else {
      const interval = setInterval(() => {
        if (sec === 0) {
          if (min === 0) {
            clearInterval(interval);
          } else {
            setMin((prevMin) => prevMin - 1);
            setSec(59);
          }
        } else {
          setSec((prevSec) => prevSec - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [min, sec]);

  return (
    <>
      <Head>
        <title>New Password | Platypus</title>
        <meta name="platypus" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vm4/favicon.ico" />
      </Head>
      <main className="min-w-screen flex min-h-screen flex-col items-center justify-center gap-3">
        <p className="text-center text-2xl font-bold text-primary">
          Set your new password
        </p>
        <p className="text-sm font-thin">
          3 minutes access to think/set for your new password
        </p>
        <div className="flex items-center">
          <div className="flex flex-col rounded-lg bg-primary px-2 py-3 text-white shadow-huge-up ">
            <span className="countdown font-mono text-2xl">
              <span style={{ "--value": min } as React.CSSProperties}></span>
            </span>
          </div>
          <span className="countdown font-mono text-2xl">:</span>
          <div className="flex flex-col rounded-lg bg-primary px-2 py-3 text-white shadow-huge-up ">
            <span className="countdown font-mono text-2xl">
              <span style={{ "--value": sec } as React.CSSProperties}></span>
            </span>
          </div>
        </div>
        <div>
          {min > 0 || sec > 0 ? (
            <NewPasswordForm changeCode={changeCode} />
          ) : (
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-sm font-thin">
                {`Time's up, go request for new OTP`}
              </p>
              <Button onClick={() => router.push("/user")}>
                Go to Bio Page
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default NewPasswordCode;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  return {
    props: {
      changeCode: params.key,
    },
  };
};
