import React from "react";
import { sleep } from "@/lib/utils";

const page = async () => {
  await sleep(2000);
  return <div>HomePage</div>;
};

export default page;
