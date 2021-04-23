import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-operations";
import { getvisibleContacts } from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  const items = useSelector(getvisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className="contact_list">
      {items.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={(id) => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
