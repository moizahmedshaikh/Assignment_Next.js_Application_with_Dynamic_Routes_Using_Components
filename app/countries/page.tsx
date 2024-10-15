import Nav from "@/app/components/nav";
import Link from "next/link";
import React from "react";

const Countries = () => {
  return (
    <div>
        <Nav/>
        <div className="h-max w-[50vw] bg-black m-auto pb-6 mt-20 rounded-3xl font-semibold">
            <h1 className="text-4xl text-center text-white py-8">Country List</h1>
            <ul className=" list-none flex justify-center flex-col items-center gap-4 text-white text-center"> 
                <li className="text-lg py-2 bg-red-600 rounded-lg w-[330px] duration-100 hover:ease-linear hover:scale-110 hover:bg-red-700 ">
                  <Link className="p-36 py-1" href={"/countries/Qatar"}> Qatar </Link></li>

                <li className="text-lg py-2 bg-red-600 rounded-lg w-[330px] duration-100 hover:ease-linear hover:scale-110 hover:bg-red-700">
                <Link className="p-36 py-1"  href={"/countries/Iraq"}>Iraq</Link></li>

                <li className="text-lg py-2 bg-red-600 rounded-lg w-[330px] duration-100 hover:ease-linear hover:scale-110 hover:bg-red-700">
                <Link className="p-28 py-1"  href={"/countries/Montenegro"}>Montenegro</Link></li>

                <li className="text-lg py-1 bg-red-600 rounded-lg w-[330px] duration-100 hover:ease-linear hover:scale-110 hover:bg-red-700">
                <Link className="p-32 py-1 flex justify-center items-center"  href={"/countries/Bhutan"}>Bhutan</Link></li>
            </ul>
            
        </div>
        </div>
  );
};

export default Countries;
