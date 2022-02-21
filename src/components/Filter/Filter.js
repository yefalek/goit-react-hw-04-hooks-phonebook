import s from "./Filter.module.css";

const Filter = ({ filter, onChange }) => {
  return (
    <div className={s.input}>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Search..."
      />
    </div>
  );
};
export default Filter;
