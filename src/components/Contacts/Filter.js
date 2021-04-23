import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-action";
import { getFilter } from "../../redux/contacts/contacts-selectors";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contact by name</p>
      <label>
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
          placeholder="Enter name to find"
        />
      </label>
    </>
  );
};

export default Filter;
