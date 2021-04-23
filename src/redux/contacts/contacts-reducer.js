import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import * as action from "./contacts-action";

import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-action";

// const INITIAL_STATE = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

const itemReducer = createReducer([], {
  [fetchContactSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filterReducer = createReducer("", {
  [action.changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {});

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  loading,
  error,
});

export default contactsReducer;
