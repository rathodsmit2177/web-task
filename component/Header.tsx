import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" bg-gray-100 rounded-2xl ">
      <div className="p-4 mx-5 flex justify-between">
        <Link href="/" className="cursor-pointer">
          <Image
            src="https://housivity.com/icons/housivity-orange-blue-logo.svg"
            alt="image"
            height={150}
            width={200}
          />
        </Link>
        <div className=" mr-10 gap-10 flex items-center cursor-pointer">
          <p>For Investor</p>
          <Link
            href="/cart"
            className="border-2 px-4 border-orange-400 hover:bg-orange-300 rounded-lg"
          >
            Saved
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
