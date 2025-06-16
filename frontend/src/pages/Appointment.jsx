import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();

  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div>
        {/* doctors details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          {/* doctor info  */}
          <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              <p>
                {docInfo.degree}-{docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* about  */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-[#262626] mt-3">
                About <img className="w-3" src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-600 font-medium mt-4">
              Appointment fee:
              <span className="text-gray-800">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
              <p>MON</p>
              <p>16</p>
            </div>
            <div className="text-center py-6 min-w-16 rounded-full cursor-pointer bg-primary text-white">
              <p>TUE</p>
              <p>17</p>
            </div>
            <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
              <p>WED</p>
              <p>18</p>
            </div>
            <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
              <p>THU</p>
              <p>19</p>
            </div>
            <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
              <p>FRI</p>
              <p>20</p>
            </div>
            <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
              <p>SAT</p>
              <p>21</p>
            </div>
            <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
              <p>SUN</p>
              <p>22</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              10:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              10:30
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              11:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              11:30
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              12:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              12:30
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              13:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              13:30
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              14:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              14:30
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              15:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              15:30
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              16:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              16:30
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              17:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              17:30
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              18:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              18:30
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              19:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              19:30
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              20:00
            </p>
            <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
              20:30
            </p>
          </div>
          <button className="bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6">
            Book an appointment
          </button>
        </div>
      </div>
    )
  );
};

export default Appointment;
