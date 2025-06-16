import { useState } from "react";

const tabsData = [
  {
    label: "Profile",
    content: <div>Profile Info Content</div>,
  },
  {
    label: "Dashboard",
    content: <div>Dashboard Content</div>,
  },
  {
    label: "Settings",
    content: <div>Settings Content</div>,
  },
  {
    label: "Invoice",
    content: <div>Invoice Content</div>,
  },
];

function Tab() {
  const [currTab, setCurrTab] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800">
      {/* Tabs */}
      <div className="flex flex-row gap-2">
        {tabsData.map((data, idx) => (
          <div
            className={`${
              idx === currTab && "bg-blue-800"
            } cursor-pointer px-3 py-1 hover:bg-blue-800 transition-all`}
            onClick={() => setCurrTab(idx)}
          >
            {data.label}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="h-32 w-full flex items-center justify-center">
        {tabsData[currTab].content}
      </div>
    </div>
  );
}
export default Tab;
