"use client";
import React, { createContext, useContext } from "react";
import {
  useForm,
  UseFormRegister,
  FieldErrors,
  FieldValues,
} from "react-hook-form";

type contextTypes = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};
const FormContext = createContext<contextTypes | null>(null);

type FormProps = {
  children: React.ReactNode;
  onSubmit: (data: FieldValues) => void;
};

export function Form({ children, onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormContext.Provider value={{ register, errors }}>
      <form
        className="space-y-3 text-[#141517]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <>
      <label htmlFor={id} className="text-xs">
        {children}
      </label>
    </>
  );
}

function Input({ id }: { id: string }) {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Input must be used within a FromProvider");
  }
  const { register, errors } = context;
  return (
    <>
      <input
        type="text"
        id={id}
        className="h-9 w-full rounded bg-[#ffffff99] py-2.5 pl-2 pr-4 text-sm caret-black outline-none"
        {...register(id, {
          required: "This Field Is Required",
        })}
      />
      {errors[id] && (
        <p className="text-[10px] text-red-500">{errors[id]?.message}</p>
      )}
    </>
  );
}

function TextArea({ id }: { id: string }) {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Input must be used within a FromProvider");
  }
  const { register, errors } = context;
  return (
    <>
      <textarea
        id={id}
        className="h-[104px] w-full resize-none rounded bg-[#ffffff99] py-2.5 pl-2 pr-4 text-sm caret-black outline-none"
        {...register(id, {
          required: "This Field Is Required",
        })}
      />
      {errors[id] && (
        <p className="text-[10px] text-red-500">{errors[id]?.message}</p>
      )}
    </>
  );
}

Form.Input = Input;
Form.Label = Label;
Form.TextArea = TextArea;

export { Input, TextArea, Label };
export default Form;
