import { useState } from "react";
import { ChildComponentNest } from "./ChildComponentNest";
export const ParentComponent = () => {
  const [nestedData] = useState([
    {
      text: "eee",
      children: [
        {
          text: "123",
          children: [
            {
              text: "rew",
            },
          ],
        },
      ],
    },
    {
      text: "comment4",
      children: [],
    },
    {
      text: "comment5",
      children: [
        {
          text: "123",
          children: [
            {
              text: "rew",
              children: [
                {
                  text: "123",
                  children: [
                    {
                      text: "rew",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return (
    <ul>
      {nestedData.map((item) => (
        <li>
          {item.text}
          <ChildComponentNest props={item.children} />
        </li>
      ))}
    </ul>
  );
};

// const obj =
// const nestComment = obj => {
//   for (let i = 0; i < obj.length; i++) {
//     console.log('SK@', obj[i].text);
//   }
// };
