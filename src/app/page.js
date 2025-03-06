import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-[100svh] w-[100svw] items-center justify-center">
    
      <section  className=" relative bg-[url('/caricature-bg.jpg')] bg-cover bg-center w-1/3  h-full hover:w-2/3 transition-all duration-500 hover:brightness-55 cursor-pointer flex items-center justify-center">
        <div className="w-full h-full bg-black opacity-50 hover:opacity-75 backdrop-blur-lg absolute transition-all duration-500 z-0"></div>
        <p className="text-white font-bold text-2xl z-10 bg-amber-800 p-3 px-5 rounded-md group-hover:text-white">ART</p>
      </section>

      <section className="relative w-1/3 bg-[url('/graphic-bg.png')] h-full hover:w-2/3 transition-all duration-500 cursor-pointer bg-[120%] bg-center hover:backdrop-blur-3xl flex items-center justify-center">
        <div className="w-full h-full bg-black opacity-50 hover:opacity-85 backdrop-blur-lg absolute transition-all duration-500"></div>
        <p className="text-white font-bold text-2xl z-10 bg-blue-800 p-3 px-5 rounded-md ">DESIGN</p>
        <div className="absolute top-60 bg-white py-5 px-5">
      <Image 
          className="  h-60 w-auto z-10" // You can adjust this to the desired size
          src="/blzs-logo.svg"
          alt="logo"
          width={200} // Specify the width in pixels
          height={200} // Specify the height in pixels
        />
      </div>
      </section>

      <section className="relative w-1/3 bg-[url('/print-bg.jpg')] h-full  border-2 hover:w-2/3 transition-all duration-500 cursor-pointer bg-cover flex items-center justify-center">
      <div className="w-full h-full bg-black opacity-50 hover:opacity-70  absolute transition-all duration-500 "></div>
      <p className="text-white font-bold text-2xl z-10 bg-green-800 p-3 px-5 rounded-md ">PRINT</p>
      </section>

    </main>
  );
}
