import React, { useState } from "react";
import { assets } from "../assets/assets";
const Myprofile = () => {
  //user profile data
  const [userData, setUserData] = useState({
    name: "Mahi",
    image: assets.profile_pic,
    email: "Mahi@gmail.com",
    phone: "1123133",
    address: {
      line1: "123 taj hotel mumbai",
      line2: "pincode:46453",
    },
    gender: "Male",
    dob: "2003-06-19",
  });

  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm pt-5">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input className="font-medium text-3xl text-[#262626] mt-4"
          onChange={(e) => setUserData({ ...prev, name: e.target })}
          value={userData.name}
          type="text"
        />
      ) : (
        <p className="font-medium text-3xl text-[#262626] mt-4">{userData.name}</p>
      )}
      <hr className="bg-[#ADADAD] h-[1px] border-none" />
      <div >
        <p  className="text-gray-600 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              onChange={(e) => setUserData({ ...prev, name: e.target })}
              value={userData.phone}
              type="text"
            />
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p> 
              <input className="bg-gray-50"
                onChange={(e) =>
                  setUserData({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  })
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input className="bg-gray-50"
                onChange={(e) =>
                  setUserData({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  })
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
        <div>
          <p className="text-gray-600 underline mt-3">BASIC INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select className="max-w-20 "
                onChange={(e) =>
                  setUserData({ ...prev, gender: e.target.value })
                }
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input
                onChange={(e) => setUserData({ ...prev, dob: e.target })}
                value={userData.dob}
                type="text"
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
          <div className="mt-10">
            {isEdit ? <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={()=>setIsEdit(false)}>Save Information</button> : <button  className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={()=>setIsEdit(true)}> Edit</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
