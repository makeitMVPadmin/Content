import React from "react";

const InputBox = ({ value, className, onChange, placeholder, labelVal, ...rest }) => {
  return (
    <>
      <label htmlFor="input-box"><p>{labelVal}</p></label>
      <textarea
        id="input-box"
        name="input-box"
        className={`input ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};

export default InputBox;
