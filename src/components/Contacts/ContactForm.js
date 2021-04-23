import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import { getItems } from "../../redux/contacts/contacts-selectors";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = (e) => setNumber(e.currentTarget.value);

  const contacts = useSelector(getItems);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      alert("Some field is empty");
      return;
    }

    const isUnicContact = !!contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isUnicContact) {
      alert(`${name} is alredy in contacts.`);
      return;
    }
    const contact = {
      name,
      number,
    };

    dispatch(addContact(contact));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter Number"
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
