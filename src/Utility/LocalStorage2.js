 

const getStoredWish = () => {
    const storedBooks = localStorage.getItem("Wish");
    if (storedBooks){
      return JSON.parse(storedBooks);
    }
    return [];
  };
  
  const saveBooksWish = (id) => {
    const storedBooks = getStoredWish();
    const exists = storedBooks.find((bookId) => bookId === id);
    if(!exists){
      storedBooks.push(id);
      localStorage.setItem("Wish", JSON.stringify(storedBooks));
    }
  };
  
  const removeBookFromWishlist = (id) => {
    let storedWishlist = getStoredWish();  
    storedWishlist = storedWishlist.filter(bookId => bookId !== id);  
  
    localStorage.setItem("Wish", JSON.stringify(storedWishlist));  
  };
  
  export { getStoredWish, saveBooksWish, removeBookFromWishlist };
  