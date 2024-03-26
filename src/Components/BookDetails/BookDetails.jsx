import { useLoaderData, useParams } from "react-router-dom";

 

const BookDetails = () => {
    const books = useLoaderData();
  
    const {bookId}=useParams();
    const bookIdInt = parseInt(bookId)
    const book = books.find(book=> book.bookId ===bookIdInt)


    

    console.log(book);
    return (
        <div>
            <img src={book.image} alt="" />
        </div>
    );
};

export default BookDetails;