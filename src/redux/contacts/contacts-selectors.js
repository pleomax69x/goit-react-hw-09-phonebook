import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.contacts.loading;
export const getItems = (state) => state.contacts.items;
export const getContacts = (state) => state.contacts;
export const getFilter = (state) => state.contacts.filter;

// export const getvisibleContacts = (state) => {
//   const { items, filter } = getContacts(state);
//   const lowText = filter.toLowerCase();
//   return items.filter((contact) =>
//     contact.name.toLowerCase().includes(lowText)
//   );
// };

export const getvisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const lowText = filter.toLowerCase();
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(lowText)
    );
  }
);
