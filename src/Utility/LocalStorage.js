const getStoredBooks = () => {
    const storedBooks = localStorage.getItem("Book");
    if (storedBooks){
      return JSON.parse(storedBooks);
    }
    return [];
  };
  
  const saveBooksAdd = (id) => {
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find((bookId) => bookId === id);
    if(!exists){
      storedBooks.push(id);
      localStorage.setItem("Book",JSON.stringify(storedBooks))
      ;
    }
  };
  export { getStoredBooks, saveBooksAdd };