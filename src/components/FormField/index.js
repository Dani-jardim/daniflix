import React from "react";

function FormField ({textArea, label, type, value, name, onChange }) {
  return (
    <div> 
      <label>
         {label}:
        <input 
          type={textArea}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label> 
  </div>
  )
}

export default FormField;