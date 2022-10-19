import { useEffect, useState } from "react";

import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [apiRes, setApiRes] = useState<Record<string, string>>({});
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/main");
      const resJson = await res.json();

      setApiRes(resJson);
      setDataLoading(false);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>FlowFinder</title>
        <meta name="description" content="FlowFinder: find your flow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-4xl font-bold">FlowFinder</h1>
        <p className="text-xl">
          Data: {dataLoading ? "loading..." : apiRes?.message}
        </p>
      </main>
    </>
  );
};

export default Home;
