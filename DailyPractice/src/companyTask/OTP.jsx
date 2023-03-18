// import { useEffect, useRef, useState } from "react";

// export const OTPfunctionality = () => {
//   const inputRef1 = useRef([]);
//   //   const inputRef2 = useRef(null);
//   //   const inputRef3 = useRef(null);
//   const [inputData, setInputData] = useState([]);

//   //   console.log("SK@");
//   //   const nextInput = (e) => {
//   //     console.log("SK@", inputRef2.current.focus());
//   //     setInputData((pre) => [...pre, inputRef1.current.value]);
//   //   };
//   //   const nextInput1 = (e) => {
//   //     console.log("SK@", inputRef3.current.focus());
//   //     setInputData((pre) => [...pre, inputRef1.current.value]);
//   //   };
//   //   console.log("SK@", inputData);

//   const handler = (idx) => {
//     inputRef1.current[1].focus();
//     for (let i of inputRef1.current) {
//       console.log("SK@forloop", i.value);
//     }
//   };

//   console.log("SK@", inputRef1.current);
//   //   const refs = (ref) => {
//   //     // inputRef1.current.push(ref);
//   //     console.log("SK@", inputRef1.current.value);
//   //   };
//   return (
//     <>
//       <input
//         type="number"
//         ref={(el) => (inputRef1.current[0] = el)}
//         onChange={handler}
//       />
//       <input
//         type="number"
//         ref={(el) => (inputRef1.current[1] = el)}
//         onChange={handler}
//       />
//       <input
//         type="number"
//         ref={(el) => (inputRef1.current[2] = el)}
//         onChange={handler}
//       />
//     </>
//   );
// };
import { useReducer, useState, useRef } from "react";

const CodeInput = () => {
  const itemsRef = useRef([]);
  const [userInput, setUserInput] = useState("");

  const codeChangeHandler = (event) => {
    const [, codeFieldIndex] = event.target.name.split("-");
    let fieldIntIndex = parseInt(codeFieldIndex, 10);
    setUserInput((prevState) => prevState + event.target.value);

    if (fieldIntIndex < 5) {
      itemsRef.current[fieldIntIndex + 1].focus();
    } else {
      const field = document.querySelector(`Input[name=code-${fieldIntIndex}]`);
      field.blur();
    }
  };

  const codeInputFields = new Array(6)
    .fill(0)
    .map((item, index) => (
      <input
        ref={(ref) => itemsRef.current.push(ref)}
        name={`code-${index}`}
        key={index}
        style={{ width: "20px", height: "20px" }}
        onChange={(event) => codeChangeHafjlkgndler(event)}
        maxLength={1}
      />
    ));

  return <>{codeInputFields}</>;
};

export default function App() {
  return (
    <div className="App">
      <CodeInput />
    </div>
  );
}
