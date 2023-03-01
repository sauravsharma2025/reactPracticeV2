import { useState } from "react";
import NodeItem from "./node2";

const NodeListComment = () => {
  const [nodes, setNodes] = useState([
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
    <div>
      <ul>
        {nodes.map((item, index) => {
          return <NodeItem nodes={item} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default NodeListComment;
