import React, { useEffect } from "react";

import ContactForm from "../Contacts/ContactForm";
import Filter from "../Contacts/Filter";
import ContactList from "../Contacts/ContactList";

import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contacts-operations";
import { getLoading } from "../../redux/contacts/contacts-selectors";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <h2>Loading...</h2>}
    </>
  );
};

export default Contacts;
