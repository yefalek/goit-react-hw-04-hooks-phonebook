import React from "react";
import s from "./Filter.module.css";

export default function Filter({ value, onChange }) {
  return (
    <div className={s.input}>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
    </div>
  );
}