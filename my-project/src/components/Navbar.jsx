import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.users);
  return (
    <div className="flex justify-between font-roboto ">
      <div>
        <div className="flex items-center pt-4 pl-4 text-[#545454]">
          <h2 className="font-[500] font-roboto md:text-2xl">
            <span style={{ fontSize: "1.5em" }}>
              {user[0].firstName.charAt(0)}
            </span>
            {user[0].firstName.substring(1)} {user[0].lastName}
          </h2>
          <h1 className="text-xl">,</h1>
          <p className="md:pt-2 pt-1  md:text-sm text-xs">{user[0].pincode}</p>
        </div>
        <div className="pl-4 text-[#7E7E7E] opacity-70 text-xs md:text-sm">
          {user[0].email}
        </div>
      </div>
      <div className=" items-end justify-end">
        <img
          src="final_logo_logo_1 1.png"
          alt="Logo"
          className="md:mb-4 md:mr-4 h-auto"
        />
      </div>
    </div>
  );
}

export default Navbar;
