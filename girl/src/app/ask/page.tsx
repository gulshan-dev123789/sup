"use client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Corrected import path
import React from "react";

const Ask = () => {
   const router = useRouter();

   const moveButton = () => {
      const button = document.querySelector("#noButton") as HTMLElement; // Type assertion
      const x = Math.random() * (window.innerWidth - button.offsetWidth) - 85;
      const y = Math.random() * (window.innerHeight - button.offsetHeight) - 48;
      button.style.position = "absolute";
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
   };

   const handleSubmit = async ({ text }: { text: string }) => {
      try {
         const response = await fetch("/api/topic", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: "asking her", description: text }),
         });

         if (!response.ok) {
            throw new Error("Network response was not ok");
         }

         const data = await response.json();
         // alert(`Text added successfully: ${data.data.text}`);
      } catch (error) {
         console.error("There was a problem with your fetch operation:", error);
      }
   };
   return (
      <div className="bg-[#a89ea9] text-white font-bold w-full h-[100dvh] flex items-center justify-center px-10">
         <Head>
            <title>Go Out With Me?</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="flex flex-col items-start justify-center">
            <h1 className="">Do you want to go out with me? Can you make time for me on Sunday?</h1>

            <div className="flex justify-center items-center">
               <Image
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
                  alt="Cute animated illustration"
                  width={400}
                  height={400}
               />
            </div>
            <div className="">
               <button
                  className="btn"
                  id="yesButton"
                  onClick={async () => {
                     await handleSubmit({ text: "yes" });
                     router.push(`/yes`);
                  }}
               >
                  Yes
               </button>
               <button id="noButton" className="btn" onMouseOver={moveButton} onClick={moveButton}>
                  No
               </button>
            </div>
         </main>
      </div>
   );
};

export default Ask;
