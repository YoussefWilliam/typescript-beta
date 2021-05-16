import React, { useState, useRef } from "react";

interface Person {
  firstName: string;
  lasName: string;
}

interface TextFieldProp {
  text: string;
  digit?: number; //which can be an integer or a double
  flag?: boolean;
  myFunction?: () => string; //In here, i pass a function that returns a string.
  myObject?: {
    //In here, i pass an object of a string field.
    field: string;
  };
  myPerson?: Person;
  hanleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextState {
  text: string;
}

export const TextFiled: React.FC<TextFieldProp> = ({ hanleChange }) => {
  const [count, setCount] = useState<TextState>({ text: "countText" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={hanleChange} />
    </div>
  );
};
