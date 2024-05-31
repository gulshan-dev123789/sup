// Import necessary modules
"use client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Corrected import path

const Home: React.FC = () => {
   const router = useRouter();

   const moveButton = () => {
      const button = document.querySelector("#noButton") as HTMLElement; // Type assertion
      const x = Math.random() * (window.innerWidth - button.offsetWidth) - 85;
      const y = Math.random() * (window.innerHeight - button.offsetHeight) - 48;
      button.style.position = "absolute";
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
   };

   return (
      <div className="container">
         <Head>
            <title>Go Out With Me?</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <div>
               <h1 className="header_text">Do you wanna go out with me?</h1>
               <h1 className="header_text">Are you free tomorrow?</h1>
            </div>
            <div className="gif_container">
               <Image
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
                  alt="Cute animated illustration"
                  width={400}
                  height={400}
               />
            </div>
            <div className="buttons">
               <button
                  className="btn"
                  id="yesButton"
                  onClick={() => {
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

export default Home;
