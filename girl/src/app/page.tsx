"use client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Corrected import path
import { useState } from "react";

const Home: React.FC = () => {
   const router = useRouter();
   const [check, setCHeck] = useState(false);

   // https://www.icegif.com/wp-content/uploads/2022/10/icegif-1371.gif
   // https://i.pinimg.com/originals/8c/7f/77/8c7f77e1033387f440b2460ae9807142.gif
   // https://i.pinimg.com/originals/c5/0a/c9/c50ac977b8a89140fc3f7bcb1a05e146.gif
   const handleSubmit = async ({ text }: { text: string }) => {
      try {
         const response = await fetch("/api/topic", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: "hows your day", description: text }),
         });

         if (!response.ok) {
            throw new Error("Network response was not ok");
         }

         const data = await response.json();
         setCHeck(true);
         // alert(`Text added successfully: ${data.data.text}`);
      } catch (error) {
         console.error("There was a problem with your fetch operation:", error);
      }
   };
   //
   return (
      <div className="bg-[#a89ea9] text-white w-full h-[100dvh] flex items-center justify-center">
         <Head>
            <title>Go Out With Me?</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="flex flex-col items-start justify-center">
            {check ? (
               <>
                  {" "}
                  <Image
                     src="https://i.pinimg.com/originals/a6/7c/d0/a67cd0c25e32fbcabdbb9da51aac6eff.gif"
                     alt="Cute animated illustration"
                     width={400}
                     height={400}
                  />
               </>
            ) : (
               <>
                  <h1 className=" font-bold">Hii charu! 😊 How are you feeling after our meetup today??</h1>
                  <div className="gif_container">
                     <Image
                        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWY5OWEwcHdpaTY4aDd3dmJhbjByYXFrZGRqOWQzNHdtamMweGhyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PoZhpKSBnkn5NldGj6/giphy.webp"
                        alt="Cute animated illustration"
                        width={400}
                        height={400}
                     />
                  </div>
               </>
            )}
            <div className="flex gap-6 mt-4">
               {check ? (
                  <>
                     <div
                        onClick={() => {
                           router.push("/ask");
                        }}
                        className="px-4 py-2 border-2 cursor-pointer rounded-xl border-gray-500"
                     >
                        I wanna ask you something
                     </div>
                  </>
               ) : (
                  <>
                     <div
                        onClick={() => {
                           handleSubmit({ text: "Did you like it ?" });
                        }}
                        className="px-4 py-2 border-2 cursor-pointer rounded-xl border-gray-500"
                     >
                        {" "}
                        Did you like it ?
                     </div>
                     <div
                        onClick={() => {
                           handleSubmit({ text: " As expected" });
                        }}
                        className="px-4 py-2 border-2 cursor-pointer rounded-xl border-gray-500"
                     >
                        As expected
                     </div>
                     <div
                        onClick={() => {
                           handleSubmit({ text: " Yr nervous thi" });
                        }}
                        className="px-4 py-2 border-2 cursor-pointer rounded-xl border-gray-500"
                     >
                        Yr nervous thi 🥺
                     </div>
                     <div
                        onClick={() => {
                           handleSubmit({ text: "Not liked it" });
                        }}
                        className="px-4 py-2 border-2 cursor-pointer rounded-xl border-gray-500"
                     >
                        Not liked it 😔
                     </div>
                  </>
               )}
            </div>
         </main>
      </div>
   );
};

export default Home;
