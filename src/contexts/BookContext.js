import { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], ()=>{
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : []
  });

  // const addBook = (title, author) => {
  //   setBooks([...books, {title, author, id: uuidv4()}])
  // }

  // const removeBook = (id) => {
  //   setBooks(books.filter(book => book.id !== id))
  // }

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
