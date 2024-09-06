import Image from "next/image";
import Navbar from "./components/Navbar";
import Deployer from "./components/Deployer";

export default function Home() {
  return (
    <>
      <div className="border border-white grid h-screen w-screen grid-rows-10">
        <div className="border border-white row-start-1 row-span-1">
          <Navbar/>
        </div>
        <div className="border border-white row-start-2 row-span-9">
          <Deployer/>
        </div>
      </div>
    </>
  );
}
