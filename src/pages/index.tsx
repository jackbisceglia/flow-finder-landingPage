import { Pitch, Solutions } from "../utils/content";
import React, { useEffect, useState } from "react";

import { CaretDownIcon } from "@radix-ui/react-icons";
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
    <section className="test-bg background-animate flex h-screen w-full snap-y flex-col items-center justify-center overflow-y-hidden bg-neutral-900">
      <p className="absolute top-4 left-4 text-sm text-blue-200  sm:left-10 sm:top-10 sm:text-base">
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
        className={` text-sm text-blue-200 sm:text-base opacity-${fadeOpacity} cursor-default transition-all duration-2500 hover:rotate-[2.5deg]`}
      >
        bridging the gap between <span className="text-blue-500">people</span>{" "}
        and their <span className="py-2 pt-0 text-blue-500 ">basic needs</span>
      </p>
      <a href="#section2">
        <CaretDownIcon className="absolute bottom-10 h-12 w-12 cursor-pointer text-blue-200 transition-colors duration-200 ease-in-out hover:text-blue-500" />
      </a>
    </section>
  );
};

const TheProductSection = () => {
  return (
    <section className="flex w-full  items-center justify-center p-16">
      <div
        id="section2"
        className="flex w-full snap-y flex-col gap-6 sm:w-4/5 lg:flex-row "
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
            <p className="font-base py-1 text-xl">
              {Pitch.missionStatement} {Pitch.context}
            </p>
          </div>
          {/* HEADING 2 - Solutions */}
          <div className="pb-6 ">
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
          </div>
          <div className="pb-6 ">
            <h4 className="text-2xl font-semibold text-blue-700">
              So, why FlowFinder?
            </h4>
            <div className=" grid grid-cols-1 gap-6 py-2 2xl:grid-cols-2">
              <div>
                <p className=" text-xl font-bold">The Difference</p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem quisquam suscipit eveniet debitis deserunt
                  temporibus dolorum tempore, voluptatum pariatur soluta quas,
                  nam odit nesciunt, delectus dignissimos quis laborum excepturi
                  ipsum! Ratione sint natus aperiam at minima aut expedita,
                  asperiores vitae a rerum nisi suscipit ad distinctio, impedit
                  quia quod! Ut cum harum distinctio necessitatibus, quis labore
                  aliquam impedit blanditiis aliquid.
                </p>
              </div>
              <div>
                <p className=" text-xl font-bold">The Advantage</p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  dolore doloremque, ab hic veniam voluptas placeat pariatur
                  fugiat impedit facere doloribus tenetur ex quisquam ad omnis?
                  Natus recusandae dignissimos veritatis! Iusto incidunt quam
                  consequuntur? Magni quas, harum veritatis dolorum error
                  eveniet labore officia tempora quod laudantium nulla adipisci,
                  animi dignissimos dolore! Vero maxime, officia dolor nam
                  recusandae nulla quam impedit!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <h3 className="py-2 text-4xl font-black text-neutral-900">The App</h3>
          <div className="relative h-72 w-72">
            <Image
              className=" drag- select-none rounded-full border-2 "
              src="https://assets.stickpng.com/images/580b57fbd9996e24bc43bf86.png"
              alt="mockup image"
              layout="fill"
            />
          </div>
        </div>
      </div>
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
