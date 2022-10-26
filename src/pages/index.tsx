import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Pitch, Solutions } from "../utils/content";
import React, { useEffect, useRef, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";

const useFadeOnPageLoad = () => {
  const [fadeOpacity, setFadeOpacity] = useState(0);

  useEffect(() => {
    setFadeOpacity((_) => 100);
  }, []);

  return { fadeOpacity };
};

const LandingScreenSection = () => {
  const { fadeOpacity } = useFadeOnPageLoad();
  return (
    <section className="test-bg background-animate flex w-full snap-y flex-col items-center justify-center overflow-y-hidden bg-neutral-900 py-14">
      <p className="absolute top-4 left-4 text-sm text-blue-200  sm:left-10 sm:top-10 sm:text-base">
        A Product By Pathos
      </p>
      <div className="flex w-full items-center justify-center">
        <div className="relative ml-[-2rem] mr-[1rem] h-12 w-12">
          <Image
            className={`border72 select-none transition-all  duration-1000 ease-in opacity-${fadeOpacity}`}
            src="/favicon.ico"
            objectFit="fill"
            priority={true}
            alt=""
            layout="fill"
          />
        </div>
        <h1
          className={`py-0 text-6xl font-bold text-blue-600 opacity-${fadeOpacity} transition-opacity duration-1000`}
        >
          FlowFinder
        </h1>
      </div>
      <p
        className={`font-base py-0 text-xl text-blue-200 opacity-${fadeOpacity} transition-opacity duration-1000`}
      >
        Find Your Flow
      </p>
      <div className="py-4"></div>
      <p
        className={` text-sm text-blue-200 sm:text-xl opacity-${fadeOpacity} cursor-default transition-all duration-2500 hover:rotate-[2.5deg]`}
      >
        bridging the gap between <span className="text-blue-500">people</span>{" "}
        and their <span className="py-2 pt-0 text-blue-500 ">basic needs</span>
      </p>
      {/* <a href="#section2" className="flex w-full justify-center text-center">
        <CaretDownIcon className="h-12 w-12 cursor-pointer text-center text-blue-200 transition-colors duration-200 ease-in-out hover:text-blue-500" />
      </a> */}
    </section>
  );
};

const MockupCarousel = () => {
  const [imgNumber, setImgNumber] = useState(1);
  const handleCarousel = (direction: string) => {
    const numImages = 6;
    const incrementRight = (oldImgNumber: number) =>
      oldImgNumber === numImages ? 1 : oldImgNumber + 1;
    const incrementLeft = (oldImgNumber: number) =>
      oldImgNumber === 1 ? numImages : oldImgNumber - 1;

    setImgNumber(direction === "RIGHT" ? incrementRight : incrementLeft);
  };
  return (
    <div className="relative justify-between ">
      <div className="flex w-full justify-center">
        <button
          onClick={() => handleCarousel("LEFT")}
          className=" hover:text-blue-600"
        >
          <ArrowLeftIcon className="h-10 w-10 px-2 font-black" />
        </button>
        <button
          onClick={() => handleCarousel("RIGHT")}
          className=" hover:text-blue-600"
        >
          <ArrowRightIcon className="h-10 w-10 px-2" />
        </button>
      </div>
      <div className="relative mt-6 h-[28.5rem]">
        <Image
          className={`border72 select-none transition-all  duration-1000 ease-in`}
          src={`/MOCKUPS/MOCKUP ${imgNumber}.png`}
          objectFit="contain"
          priority={true}
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
};

const TheProductSection = () => {
  return (
    <section className="flex w-full  items-center justify-center px-8 pt-12 pb-10 md:px-28 lg:px-44 lg:pb-0">
      <div
        id="section2"
        className="flex w-full snap-y flex-col gap-6 sm:w-full lg:flex-row "
      >
        <div className=" w-full lg:w-2/3">
          <h3 className="py-2 pb-2 text-4xl font-black text-neutral-900">
            The Mission
          </h3>
          <div className="pb-6 ">
            {/* HEADING 1 - Pitch */}
            <h4 className="text-2xl font-semibold text-blue-700">
              {Pitch.title}
            </h4>
            <p className="font-base py-1 text-xl">{Pitch.context}</p>
          </div>
          {/* HEADING 2 - Solutions */}
          {/* <div className="pb-6 ">
            <h4 className="text-2xl font-semibold text-blue-700">
              How do we solve this?
            </h4>
            <ol className="list-decimal px-8 ">
              <li className="font-base py-1 text-xl">
                <b>{Solutions.a.title}</b> {Solutions.a.content}
              </li>
              <li className="font-base py-1 text-xl">
                <b>{Solutions.b.title}</b> {Solutions.b.content}
              </li>
            </ol>
          </div> */}
          <div className="pb-6 ">
            <h4 className="text-2xl font-semibold text-blue-700">
              So, why FlowFinder?
            </h4>
            <div className=" grid grid-cols-1 gap-6 py-2 2xl:grid-cols-2">
              <div>
                <p className=" text-xl font-bold">The Difference</p>
                <p className="text-lg">
                  {`
                  FlowFinder stands out because of the details; when using the
                  app you can clearly identify what kind of restroom you might
                  be walking into. Does it have a amenities? Is it accessible?
                  Maybe more importantly, what do others think? Between detailed and user-sourced restroom navigation, and the absolutely essential restroom review system, our app provides a user first experience that you don't want to miss out on. Never again will finding a restroom be a hassle.
                    `}
                  {/* You also can see what other people think of the bathroom
                  experience using our comment reviews and rating feature for
                  each bathroom. This helps especially when dealing with
                  variables outside of a bathrooms perspective. For example,
                  someone in the comments can tell you if the bahtroom is
                  located maybe in a more safe part of the town. */}
                </p>
              </div>
              <div>
                <p className=" text-xl font-bold">The Advantage</p>
                <p className="text-lg">
                  {`
                  Our advantage is our users. We source our data from the people that really care, whereas the competition produces similar data but in a more algorithmic and technology-focused manner. Our approach actively improves the quality of our app's restroom locater and recommendations, and can only improve over time. This polishes the user experience, so that the more our application is used, the better the quality of the application gets.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <h3 className="py-2 text-4xl font-black text-neutral-900">The App</h3>
          <MockupCarousel />
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-8 pt-12 pb-10 md:px-28 lg:px-44">
      <h3 className="text-4xl font-black text-neutral-900">Pricing</h3>
      <h4 className="py-4 text-2xl font-semibold text-blue-700">
        {"Choose what's right for you"}
      </h4>
      <div className="flex w-full flex-col items-start justify-center gap-8 py-2 text-center md:flex-row lg:w-5/6">
        <div className=" h-max w-full rounded-md bg-neutral-900 px-8 py-5 md:w-2/5">
          <h1 className="pb-1 text-xl font-extrabold text-blue-100">
            The Free Plan
          </h1>
          <h3 className="text-md  py-1 font-normal text-blue-400">
            0.00$ per month
          </h3>
          <p className="text-lg text-blue-200">
            FlowFinder sees the free plan as the standard plan. We make sure
            that the users get all the features of FlowFinder without any
            limitations. At the free tier, you get all the features you need to
            experience the full experience of FlowFinder. You can upgrade any
            time, but no need to rush!
          </p>
        </div>
        <div className="w-full rounded-md bg-neutral-900 px-4 py-5 md:w-2/5">
          <h1 className="pb-1 text-xl font-extrabold text-blue-100">
            The Premium Plan
          </h1>
          <h3 className="text-md  py-1 font-normal text-blue-400">
            1.99$ per month
          </h3>
          <p className="text-lg text-blue-200">
            The premium plan is for the hardcore users. We wholeheartedly
            believe that the free tier is the best tier, but at our premium
            tier, we offer:
          </p>
          <ul className="py-3 font-semibold text-blue-400">
            <li>early access to new features</li>
            <li>an ad-free experience</li>
            <li>points multipliers</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const JoinTheNewsLetter = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const statusHidden = statusMessage === "";
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      });
      const data = await res.json();
      if (data.error) {
        setStatusMessage("Couldn't sign up. Try again.");
      } else {
        setStatusMessage("Thanks for signing up!");
      }
      setEmail("");
    } catch (error) {
      setStatusMessage("Couldn't sign up. Try again.");
    }
  };

  return (
    <section className="flex w-full  items-center justify-center px-8 pt-12 pb-10 md:px-28 lg:px-44">
      <div className=" w-full text-center lg:w-2/3">
        <h3 className="text-4xl font-black text-blue-100">
          {"Stay in the flow"}
        </h3>
        <h4 className="py-4 text-2xl font-medium text-blue-700">
          {"Sign up for early access to FlowFinder"}
        </h4>
        <form onSubmit={handleSubmit} className="w-full py-4">
          <input
            value={email}
            onChange={(e) => setEmail(() => e.target.value)}
            className="mb-4 w-full rounded-md bg-blue-100 p-2 text-lg placeholder-stone-500"
            type="email"
            placeholder="email address"
          />
          <button className="grow rounded-md bg-blue-700 py-2 px-6 text-lg text-stone-50 hover:bg-blue-800 active:bg-blue-600">
            Sign Up
          </button>
        </form>
        <p className={`${statusHidden ? "hidden" : ""} text-blue-500`}>
          {statusMessage}
        </p>
      </div>
    </section>
  );
};

const GoogleFormSection = () => {
  return (
    <section className="flex w-full items-center justify-center px-8 pt-12 pb-10 md:w-5/6 md:px-28 lg:px-44">
      <iframe
        className="h-[40rem] w-full"
        src="https://docs.google.com/forms/d/e/1FAIpQLSewDy-d4YrTqn4tRFlKZot8Iia0aLeO91cwyzLEDDiVmkpBSQ/viewform"
      ></iframe>
    </section>
  );
};

const Home: NextPage = () => {
  // py-4 px-8 md:px-32

  return (
    <>
      <Head>
        <title>FlowFinder</title>
        <meta name="description" content="FlowFinder: find your flow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen w-full flex-col items-center scroll-smooth ">
        {/* <nav className="flex w-full flex-col items-center justify-center bg-zinc-900 py-3 px-12 text-blue-500  sm:px-36">
          <h1 className="py-0 text-5xl font-bold ">FlowFinder</h1>
          <p className="font-base text-regular py-0 text-blue-200">
            Find Your Flow
          </p>
        </nav> */}
        <div className="flex h-full w-full flex-col items-center scroll-smooth ">
          <LandingScreenSection />
          <TheProductSection />
        </div>
        <div className="flex h-full w-full flex-col items-center scroll-smooth bg-neutral-300">
          <PricingSection />
        </div>
        <div className="flex h-full w-full flex-col items-center scroll-smooth bg-neutral-900">
          <JoinTheNewsLetter />
        </div>
        <div className="flex h-full w-full flex-col items-center scroll-smooth bg-neutral-200">
          <GoogleFormSection />
        </div>
        <footer className="background-animate test-bg flex w-full flex-col items-center scroll-smooth bg-neutral-800 py-4">
          <h1
            className={`font-regular py-1 text-xl text-blue-600  transition-opacity duration-1000`}
          >
            FlowFinder by Pathos
          </h1>
          <p className="text-blue-200">email: inquiries@flowfinder.app</p>
          <p className="text-blue-200">instagram: @findyourflow</p>
          <p className="text-blue-200">facebook: @flowfinder</p>
        </footer>
      </main>
    </>
  );
};

export default Home;

// <p className="font-base py-1 text-xl">
//   FlowFinder is a mobile app that allows users to find the nearest and
//   most accessible public restrooms. We pull on crowd-sourced data to
//   aggregate restroom locations, and give our users access to the best
//   restrooms in their area.
// </p>
