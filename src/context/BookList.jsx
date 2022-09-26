import React, { createContext, useState} from "react";

export const  BookListContext = createContext();

export function ContextProvider({ children }) {
    const [bookListId, setBookListId] = useState('');

  return (
    <BookListContext.Provider value={
      {bookListId,
        setBookListId
    }
    }>
      {children}
    </BookListContext.Provider>
  );
}

