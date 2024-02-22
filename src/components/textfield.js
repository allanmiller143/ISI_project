import React from "react";

function TextField({ placeholder, value, onChange, isPassword }) {
  const inputType = isPassword ? "password" : "text";

  return (
    <div>
      <input type={inputType} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

export default TextField;
