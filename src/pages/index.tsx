import React, { useEffect, useState } from "react";

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

const getCoefficient = () => (Math.random() < 0.5 ? -1 : 1);

const getAngle = (angle: number) => getCoefficient() * angle;

const LandingScreenSection = () => {
  const { fadeOpacity } = useFadeOnPageLoad();
  return (
    <section className="test-bg background-animate flex h-screen w-full flex-col items-center justify-center overflow-y-hidden bg-neutral-900">
      <p className="absolute top-10 left-10 text-blue-200">
        A Product By Pathos
      </p>
      <h1
        className={`py-0 text-6xl font-bold text-blue-600 opacity-${fadeOpacity} transition-opacity duration-1000`}
      >
        FlowFinder
      </h1>
      <p
        className={`font-base py-0 text-xl text-blue-200 opacity-${fadeOpacity} transition-opacity duration-1000`}
      >
        Find Your Flow
      </p>
      <div className="py-4"></div>
      <p
        className={`text-lg text-blue-200 opacity-${fadeOpacity} cursor-default transition-all duration-2500 hover:rotate-[2.5deg]`}
      >
        bridging the gap between <span className="text-blue-500">people</span>{" "}
        and their <span className="py-2 pt-0 text-blue-500 ">basic needs</span>
      </p>
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

      <main className="flex min-h-screen w-full flex-col items-center ">
        {/* <nav className="flex w-full flex-col items-center justify-center bg-zinc-900 py-3 px-12 text-blue-500  sm:px-36">
          <h1 className="py-0 text-5xl font-bold ">FlowFinder</h1>
          <p className="font-base text-regular py-0 text-blue-200">
            Find Your Flow
          </p>
        </nav> */}
        <div className="flex h-full w-full flex-col items-center ">
          <LandingScreenSection />
          <section className="flex w-full flex-col gap-6  py-2 leading-none sm:w-4/5 lg:flex-row">
            <div className="w-full lg:w-3/5">
              <h3 className="py-2 text-4xl font-black text-neutral-900">
                The Mission
              </h3>
              <h4 className="text-2xl font-semibold text-blue-700">
                Take Your Next Trip to the Bathroom—The Easy Way
              </h4>
              <p className="font-base py-1 text-xl">
                (Mission Statement) Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quae ex, iste, odit eius autem consectetur
                deleniti dicta quas expedita animi similique pariatur atque at,
                quia quibusdam maiores distinctio voluptates iure!
              </p>
              <p className="font-base py-1 text-xl">
                (Unique Advantage) Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quae ex, iste, odit eius autem consectetur
                deleniti dicta quas expedita animi similique pariatur atque at,
                quia quibusdam maiores distinctio voluptates iure!
              </p>
            </div>
            <div className="w-full lg:w-2/5">
              <h3 className="py-2 text-4xl font-black text-neutral-900">
                The App
              </h3>
              <div className="relative h-72 w-72">
                <Image
                  className=" drag- select-none rounded-full border-2 "
                  src="https://assets.stickpng.com/images/580b57fbd9996e24bc43bf86.png"
                  alt="mockup image"
                  layout="fill"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
