import React from "react";

const page = (props: { params: { id: string } }) => {
  return <div>channel/[{props.params.id}]</div>;
};

export default page;
