import React from "react";

export default ({
  placeholder,
  autoComplete,
  className,
  input,
  label,
  type,
  width,
  meta: { error, touched }
}) => {
  return (
    <div className="inputWrapper">
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={className}
        autoComplete={autoComplete}
      />
      {touched && error ? (
        <div className="formValidation red-text"> {touched && error} </div>
      ) : (
        ""
      )}
    </div>
  );
};
