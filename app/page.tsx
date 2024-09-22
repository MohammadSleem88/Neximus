"use client";
import { signInAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import NeximusLogo from "@/public/logo/logo1.png";
import clsx from "clsx";
import { Loader, StepForward } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useFormStatus } from "react-dom";

export default function LoginForm() {
  return (
    <main className="bg-gradient-to-r from-blue-200 to-green-700 h-full min-h-screen">
      <div className="container relative m-0 mx-auto py-10 md:px-10">
        <div className="max-width flex items-center justify-center lg:justify-between">
          <Link className="flex items-center gap-1" href="/loggedin">
            <Image
              src={NeximusLogo}
              alt="logo"
              className="h-16 w-20 md:h-16 md:w-20"
            />
            <h1 className="text-xl hidden lg:flex font-medium text-gray-950 md:text-3xl">
              NEXIMUS AI
            </h1>
          </Link>
          <div className="hidden lg:flex w-fit items-center">
            <form action={signInAction}>
              <GoogleSignInButton />
            </form>
          </div>
        </div>
        <div className="w-full px-4 pt pt-12 md:px-4 lg:px-8 xl:px-10 2xl:px-0">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <span
              rel="noreferrer"
              className="mb-6 cursor-pointer rounded-2xl border border-black px-4 py-1 text-xs text-slate-600 transition duration-300 ease-in-out hover:text-slate-700 sm:text-base text-center"
            >
              Powered by{" "}
              <a
                className="font-bold"
                target="_blank"
                href="https://neximusai.com"
              >
                Neximus{" "}
              </a>
              AI ✨
            </span>
            <h1 className="inline-block text-center text-4xl font-medium tracking-tighter text-dark lg:text-7xl">
              Adaptive Natural &<br className="hidden lg:inline-block" />
              Normative Assimilation
            </h1>
            <h2 className="mt-8 text-center text-xl font-light tracking-tight lg:text-3xl">
              an AI-driven language learning game platform that​{" "}
              <span className="font-bold px-1">
                provides personalized, immersive, engaging,
              </span>{" "}
              and
              <br className="hidden lg:inline-block" />
              <span className="font-bold px-1">fun language acquisition </span>
              experiences​​​​.
            </h2>
            <div className="mt-12 flex flex-col gap-4">
              <form action={signInAction}>
                <GetStartedButton />
              </form>
              <div className="w-fit items-center">
                <Button
                  className="text-xl text-center px-4 py-7 bg-transparent border-purple-500/50"
                  variant={"outline"}
                >
                  Join Our Wish List ⭐️
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <footer className="bottom-0 container mx-auto my-5 flex flex-col items-center justify-between space-y-3 border-t space-x-4 px-3 pt-4 text-center sm:flex-row sm:pt-2 md:text-lg">
          <div>
            Powered by{" "}
            <a
              href="https://neximusai.com"
              target="_blank"
              className="pr-1 font-bold transition hover:text-black/50"
            >
              NEXIMUS
            </a>
            AI
          </div>
          <div className="flex space-x-4 pb-4 sm:pb-0">
            <a className="group" aria-label="X" href="https://twitter.com/">
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-white group-hover:fill-blue-500"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"></path>
              </svg>
            </a>

            <a className="group" aria-label="GitHub" href="https://github.com/">
              <svg
                viewBox="0 0 256 180"
                width="256"
                height="180"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                className="h-6 w-6 fill-red-700 group-hover:fill-primary"
              >
                <path d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" />
                <path
                  fill="#FFF"
                  d="m102.421 128.06 66.328-38.418-66.328-38.418z"
                />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
function GetStartedButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="flex items-center justify-center px-8 py-4 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-100 rounded-xl group bg-gradient-to-br from-purple-600 to-orange-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-blue-800"
    >
      <span className="flex items-center gap-1">
        {pending ? (
          <span className=" px-16">
            <Loader className="w-5 h-5" />
          </span>
        ) : (
          <>
            Get Started
            <StepForward />
          </>
        )}
      </span>
    </button>
  );
}

function GoogleSignInButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      <span
        className={clsx(
          "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
          pending && "px-16"
        )}
      >
        {pending ? (
          <span className="">
            <Loader className="w-5 h-5" />
          </span>
        ) : (
          "Sign in with Google"
        )}
      </span>
    </button>
  );
}
