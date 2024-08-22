import React, { useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";

import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import {
  FingerPrintIcon,
  UserIcon,
  EnvelopeIcon,
  CreditCardIcon,
  HomeIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

export default function DataDetails() {
  const navigate = useNavigate();

  const kyc_name = localStorage.getItem("KYC_name");
  const kYC_email = localStorage.getItem("KYC_email");
  const kYC_adhar = localStorage.getItem("KYC_adhar");
  const kYC_pancard = localStorage.getItem("KYC_pancard");
  const kYC_mobile = localStorage.getItem("KYC_mobile");

  const newData = () => {
    localStorage.removeItem("KYC_name");
    localStorage.removeItem("KYC_email");
    localStorage.removeItem("KYC_adhar");
    localStorage.removeItem("KYC_pancard");
    localStorage.removeItem("KYC_mobile");
    navigate("/gettDatafromDb");
  };

  useEffect(() => {
    const token = localStorage.getItem("KYC_name");
    // console.log("localStorage.getItem : ", token);

    if (!token) {
      return navigate("/gettDatafromDb");
    }
  }, []);

  const solutions = [
    { name: "Name", description: kyc_name, icon: UserIcon },
    { name: "Adhar Number", description: kYC_adhar, icon: FingerPrintIcon },
    { name: "Pancard Number", description: kYC_pancard, icon: CreditCardIcon },
    { name: "E-Mail", description: kYC_email, icon: EnvelopeIcon },
    { name: "Mobile Number", description: kYC_mobile, icon: PhoneIcon },
  ];
  const callsToAction = [
    { name: "Get New User's data", href: "#", icon: PlayCircleIcon },
    { name: "Home", href: "#", icon: HomeIcon },
  ];

  return (
    <>
      {/* <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">KYC Details</h2>
            <p className="mt-1 text-sm text-gray-700">
              User's KYC Deatails...
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-20 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        E-Mail
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Mobile No.
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {kyc_name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-12 py-4">
                        <div className="text-sm text-gray-700">{kYC_email}</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm text-gray-700">
                          {kYC_mobile}
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Adhar No : {kYC_adhar}
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Pancard No : {kYC_pancard}
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      E-Mail : {kYC_email}
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Mobile No. : {kYC_mobile}
                    </th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 space-y-3">
          <button
            onClick={newData}
            type="button"
            className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span className="mr-2 inline-block"></span>
            Get New User's data
          </button>
        </div>
      </section> */}

      <div className="flex justify-center items-center mt-20">
        <div className=" w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-blue-300 text-sm leading-6 shadow-xl shadow-black ring-1 ring-gray-900/5">
          <div className=" bg-yellow-500">
            <div className="-ml-6 flex items-center justify-center gap-5 p-3 font-semibold text-gray-900 ">
              <ChartPieIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
              User's KYC data
            </div>
          </div>
          <div className="p-4">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </div>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2  divide-x divide-gray-900/5 bg-yellow-500">
            <button
              onClick={newData}
              type="button"
              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-200"
            >
              <PlayCircleIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
              Get New User's data
            </button>

            <Link to={"/mainpage"}>
              <div className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-200">
                <HomeIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-gray-400"
                />
                Home
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
