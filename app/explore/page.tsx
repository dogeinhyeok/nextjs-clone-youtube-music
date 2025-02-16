import React from "react";
import PagePadding from "@/components/page-padding";
import Category from "./components/category";

const page = () => {
  return (
    <PagePadding>
      <div className="mt-4" />
      <Category />
    </PagePadding>
  );
};

export default page;
