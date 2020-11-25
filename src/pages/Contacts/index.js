import React, { useState, useEffect } from "react";
import { useContacts } from "../../hooks/useContact";

export const Contacts = () => {
  const contacts = useContacts();

  if (contacts.isLoading) {
    return <div>...loading</div>;
  }

  if (contacts.isError) {
    return <div>...error</div>;
  }
  return <div>Contacts {contacts.data[0].name.first}</div>;
};
