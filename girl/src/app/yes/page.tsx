import Head from "next/head";
import Image from "next/image";
import React from "react";

const Yes = () => {
   return (
      <div className="bg-[#a89ea9] text-white w-full h-[100dvh] flex items-center justify-center">
         <Head>
            <title>Go Out With Me?</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="flex items-center justify-center flex-col">
            <h1 className=" font-bold">Hurrayyyy !!!</h1>

            <div className="gif_container">
               <Image src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" alt="Cute animated illustration" width={400} height={400} />
            </div>
         </main>
      </div>
   );
};

export default Yes;
// https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" alt="Cute animated illustration
