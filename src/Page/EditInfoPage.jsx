import {
  Upload,
  MailIcon,
  LucideBold,
  Italic,
  Bold,
  Link2,
} from "lucide-react";
import React, { useState } from "react";
import { NavbarList } from "../components/Cards/Card";

function EditInfoPage() {
  const [activeTab, setActiveTab] = useState("personalInfo");
  function RenderTab() {
    switch (activeTab) {
      case "personalInfo":
        return (
          <div className="flex flex-wrap justify-center gap-y-4 py-4 ">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h6 className="font-semibold">Personal Info</h6>
              <p className="text-gray-200">
                Update your photo and personal details.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3">
              <div className="rounded-lg border">
                <div className="flex flex-wrap gap-y-4 p-4">
                  <div className="w-full lg:w-1/2 lg:pr-2">
                    <label htmlFor="FirstName" className="mb-1 inline-block">
                      First Name
                    </label>
                    <input
                      id="FirstName"
                      type="text"
                      className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 lg:pl-2">
                    <label htmlFor="LastName" className="mb-1 inline-block">
                      Last Name
                    </label>
                    <input
                      id="LastName"
                      type="text"
                      className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="Email" className="mb-1 inline-block">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2  text-gray-300 ">
                        <MailIcon />
                      </div>
                      <input
                        id="Email"
                        type="email"
                        className="w-full rounded-lg border bg-transparent py-1.5 pl-10 pr-2"
                      />
                    </div>
                  </div>
                </div>
                <hr className="border border-gray-300" />
                <div className="flex items-center justify-end gap-4 p-4">
                  <button className="py-2 px-3 rounded-lg border">
                    Cancel
                  </button>
                  <button className="py-2 px-3 bg-[#ae7aff] text-black">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "channelInfo":
        return (
          <div className="flex flex-wrap justify-center gap-y-4 py-4 ">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h6 className="font-semibold">Personal Info</h6>
              <p className="text-gray-200">
                Update your photo and personal details.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3">
              <div className="rounded-lg border">
                <div className="flex flex-wrap gap-y-4 p-4">
                  <div className="w-full">
                    <label htmlFor="Username" className="mb-1 inline-block">
                      Username
                    </label>
                    <div className="flex rounded-lg border">
                      <p className="flex shrink-0 items-center border-r border-white px-3 align-middle">
                        VidPlay.com
                      </p>
                      <input
                        id="Username"
                        type="text"
                        className="w-full   bg-transparent px-2 py-1.5"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="description" className="mb-1 inline-block">
                      Description
                    </label>
                    <textarea
                      id="description"
                      className="grid bg-transparent border w-full px-2 py-1.5 resize-none  rounded  h-[128px] "
                      rows={4}
                    />
                    <span className="text-gray-300 text-sm  mt-0.5">
                      {" "}
                      275 character left
                    </span>
                  </div>

                  <div className="flex w-full items-center gap-3">
                    <div className="w-full max-w-xs rounded-lg ">
                      <select
                        name="Text-Formation"
                        id="TextFormation"
                        className=" w-full border-r-1 rounded-md border bg-transparent py-1.5 pl-2"
                        style={{ backgroundColor: "#121212" }}
                      >
                        <option value="regular" selected>
                          Regular
                        </option>
                        <option value="semi-bold">Semi-bold</option>
                        <option value="bold">Bold</option>
                        <option value="bolder">Bolder</option>
                      </select>
                    </div>
                    <div className="flex flex-row items-center gap-x-3  justify-center align-middle">
                      <button className="text-xl font-bold focus:text-[#ae7aff] hover:text-[#ae7aff] hover:cursor-pointer">
                        B
                      </button>

                      <button className="text-xl font-bolder focus:text-[#ae7aff] hover:cursor-pointer">
                        <Italic size={18} />
                      </button>
                      <button className="text-xl font-bolder focus:text-[#ae7aff] hover:cursor-pointer">
                        <Link2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="w-full rounded-lg ">
                    <label
                      htmlFor="timezone"
                      className="inline-block mb-1
                    "
                    >
                      Time Zone
                    </label>
                    <select
                      id="timezone"
                      className="w-full border-r-1 border rounded-md bg-transparent py-1.5 pl-8"
                      defaultValue="UTC+05:30"
                      style={{ backgroundColor: "#121212" }}
                    >
                      <option value="UTC-12:00">
                        (UTC-12:00) International Date Line West
                      </option>
                      <option value="UTC-11:00">
                        (UTC-11:00) Coordinated Universal Time-11
                      </option>
                      <option value="UTC-10:00">(UTC-10:00) Hawaii</option>
                      <option value="UTC-09:00">(UTC-09:00) Alaska</option>
                      <option value="UTC-08:00">
                        (UTC-08:00) Pacific Time (US & Canada)
                      </option>
                      <option value="UTC-07:00">
                        (UTC-07:00) Mountain Time (US & Canada)
                      </option>
                      <option value="UTC-06:00">
                        (UTC-06:00) Central Time (US & Canada)
                      </option>
                      <option value="UTC-05:00">
                        (UTC-05:00) Eastern Time (US & Canada)
                      </option>
                      <option value="UTC-04:00">
                        (UTC-04:00) Atlantic Time (Canada)
                      </option>
                      <option value="UTC-03:30">
                        (UTC-03:30) Newfoundland
                      </option>
                      <option value="UTC-03:00">
                        (UTC-03:00) Buenos Aires, Georgetown
                      </option>
                      <option value="UTC-02:00">
                        (UTC-02:00) Coordinated Universal Time-02
                      </option>
                      <option value="UTC-01:00">(UTC-01:00) Azores</option>
                      <option value="UTC+00:00">
                        (UTC+00:00) Coordinated Universal Time
                      </option>
                      <option value="UTC+01:00">
                        (UTC+01:00) Central European Time
                      </option>
                      <option value="UTC+02:00">
                        (UTC+02:00) Eastern European Time
                      </option>
                      <option value="UTC+03:00">
                        (UTC+03:00) Moscow, St. Petersburg
                      </option>
                      <option value="UTC+03:30">(UTC+03:30) Tehran</option>
                      <option value="UTC+04:00">
                        (UTC+04:00) Abu Dhabi, Muscat
                      </option>
                      <option value="UTC+04:30">(UTC+04:30) Kabul</option>
                      <option value="UTC+05:00">(UTC+05:00) Tashkent</option>
                      <option value="UTC+05:30">
                        (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
                      </option>
                      <option value="UTC+05:45">(UTC+05:45) Kathmandu</option>
                      <option value="UTC+06:00">
                        (UTC+06:00) Almaty, Novosibirsk
                      </option>
                      <option value="UTC+06:30">
                        (UTC+06:30) Yangon (Rangoon)
                      </option>
                      <option value="UTC+07:00">
                        (UTC+07:00) Bangkok, Hanoi, Jakarta
                      </option>
                      <option value="UTC+08:00">
                        (UTC+08:00) Beijing, Chongqing, Hong Kong
                      </option>
                      <option value="UTC+08:45">(UTC+08:45) Eucla</option>
                      <option value="UTC+09:00">
                        (UTC+09:00) Osaka, Sapporo, Tokyo
                      </option>
                      <option value="UTC+09:30">(UTC+09:30) Adelaide</option>
                      <option value="UTC+09:45">(UTC+09:45) Darwin</option>
                      <option value="UTC+10:00">(UTC+10:00) Brisbane</option>
                      <option value="UTC+10:30">
                        (UTC+10:30) Lord Howe Island
                      </option>
                      <option value="UTC+11:00">
                        (UTC+11:00) Solomon Is., New Caledonia
                      </option>
                      <option value="UTC+11:30">
                        (UTC+11:30) Norfolk Island
                      </option>
                      <option value="UTC+12:00">(UTC+12:00) Fiji</option>
                      <option value="UTC+12:45">
                        (UTC+12:45) Chatham Islands
                      </option>
                      <option value="UTC+13:00">
                        (UTC+13:00) Nuku&apos;alofa
                      </option>
                      <option value="UTC+14:00">(UTC+14:00) Kiritimati</option>
                    </select>
                  </div>
                </div>
                <hr className="bg-gray-200" />
                <div className="flex flex-row justify-end items-center p-4 m-2 gap-x-2">
                  <button className="border   px-3 py-2 rounded-md  ">
                    Cancel
                  </button>
                  <button className="border bg-[#ae7aff] text-black  font-semibold  px-3 py-2 rounded-md">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "changePassword":
        return (
          <div className="flex flex-wrap justify-center gap-y-4 py-4 ">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h6 className="font-semibold">Personal Info</h6>
              <p className="text-gray-200">
                Update your photo and personal details.
              </p>
            </div>

            <div className="w-full sm:w-1/2 lg:w-2/3">
              <div className="rounded-lg border">
                <div className="flex flex-wrap flex-col gap-y-4 p-4">
                  <div className="w-full ">
                    <label
                      htmlFor="currentPassword"
                      className="mb-1 inline-block"
                    >
                      Current Password
                    </label>
                    <input
                      id="currentPassword"
                      type="text"
                      placeholder="Current Password"
                      className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                    />
                  </div>
                  <div className="w-full ">
                    <label htmlFor="newPassword" className="mb-1 inline-block">
                      New Password
                    </label>
                    <input
                      id="newPassword"
                      type="text"
                      placeholder="New Password"
                      className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                    />
                  </div>
                  <div className="w-full ">
                    <label
                      htmlFor="confirmPassword"
                      className="mb-1 inline-block"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      type="text"
                      className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                    />
                  </div>
                </div>
                <hr className="bg-gray-300" />
                <div className="flex  flex-row justify-end m-2 gap-x-2">
                  <button className="px-3 py-2 border rounded-md">
                    Cancel
                  </button>
                  <button className="px-3 py-2 border rounded-md bg-[#ae7aff] text-black" >
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        activeTab
    }
  }
  return (
    <section className="relative w-full pb-[70px]  sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="relative min-h-[150px] w-full pt-[16.28%]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
            alt="cover-photo"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <input type="file" className="hidden" id="cover-image" />
          <label
            htmlFor="cover-image"
            className="inline-block h-full w-full  cursor-pointer rounded-lg bg-white/60 p-2 text-[#ae7aff] hover:bg-white"
          >
            <Upload />
          </label>
        </div>
      </div>
      <div className="pb-4 px-4">
        <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Channel"
                className="h-full w-full"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <input type="file" className="hidden" id="cover-image" />
              <label
                htmlFor="cover-image"
                className="inline-block h-full w-full  cursor-pointer rounded-lg bg-white/60 p-2 text-[#ae7aff] hover:bg-white"
              >
                <Upload />
              </label>
            </div>
          </span>
          <div className="mr-auto inline-block">
            <h1 className="font-bolg text-xl">React Patterns</h1>
            <p className="text-sm text-gray-400">@reactpatterns</p>
          </div>
          <div className="inline-block">
            <div className="inline-flex min-w-[145px]">
              <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                View Channel
              </button>
            </div>
          </div>
        </div>
        <ul className="p-4 m-2 no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
          <NavbarList
            onClick={() => setActiveTab("personalInfo")}
            headings="Personal Information"
            key={Math.random(1, 100)}
            className={`w-full border-b-2 ${
              activeTab === "personalInfo"
                ? "border-[#ae7aff] bg-white text-[#ae7aff]"
                : "border-none text-gray-400"
            }  text-gray-400  px-3 py-1.5 `}
          />
          <NavbarList
            headings="Channel Information"
            key={Math.random(1, 100)}
            onClick={() => setActiveTab("channelInfo")}
            className={`w-full border-b-2 ${
              activeTab === "channelInfo"
                ? "border-[#ae7aff] bg-white text-[#ae7aff]"
                : "border-none text-gray-400"
            }  text-gray-400  px-3 py-1.5 `}
          />
          <NavbarList
            headings="Change Passoword"
            key={Math.random(1, 100)}
            onClick={() => setActiveTab("changePassword")}
            className={`w-full border-b-2 ${
              activeTab === "changePassword"
                ? "border-[#ae7aff] bg-white text-[#ae7aff]"
                : "border-none text-gray-400"
            }  text-gray-400  px-3 py-1.5 `}
          />
        </ul>
        {RenderTab()}
      </div>
    </section>
  );
}

export default EditInfoPage;
