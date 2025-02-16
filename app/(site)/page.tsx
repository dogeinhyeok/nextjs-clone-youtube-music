import React from "react";
import Category from "./components/category";

const page = async () => {
  return (
    <div>
      <div className="min-h-[500px]">
        <div className="mt-9"></div>
        <Category />
      </div>
    </div>
  );
};

export default page;
