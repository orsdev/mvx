import React from "react";
import { TrustedCompanies } from "./constants";

const Companies = () => {
  return (
    <div className="mt-14 companies">
      <h5 className="font-montLight text-base xs:text-lg text-black">
        Trusted by global companies
      </h5>
      <div className="companies__stat">
        {TrustedCompanies.map((item, index) => (
          <div key={index} className="flex-1 lg:flex-none">
            <h4 className="font-semibold text-primary text-lg sm:text-xl md:text-2xl xl:text-[26px]">
              {item.heading}
            </h4>
            <p className="text-[13px] mt-1 md:min-w-[140px]">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
