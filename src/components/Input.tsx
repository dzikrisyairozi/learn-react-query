import React, { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}

const Input: FC<InputProps> = ({ label, name, register }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...register(name)} id={name} />
    </div>
  );
};

export default Input;