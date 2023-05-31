import React, { FC } from "react";
const dat = [
  {
    id: 10,
    name: "ssdsd",
  },
];

type dataObject={
    id:number;
    title:string;
}

type ItemsProps = {
  data: dataObject[];
 
};

const items: FC<ItemsProps> = ({ data }) => {
  return (
    <div>
      {data.map((el) => (
        <p>{el.title}</p>
      ))}
    </div>
  );
};

export default items;
