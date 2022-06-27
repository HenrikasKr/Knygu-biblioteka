import React, { useState, useEffect } from "react";
import {getBooks} from "../../api/libraries/apiLibraries"

import 'bootstrap/dist/css/bootstrap.css';


function Books() {
    const [books, setBooks] = useState([]);


    function getAllBooks() {
        getBooks().then((res) => {
          setBooks(res.data.data.book);
        });
      }


      useEffect(() => {
          getAllBooks();
          console.log(books);
      }, []);

      const book = books.map((item) => {
          const title = item.book_title
          const author = item.book_author
          const category = item.book_category
          const date = item.book_date.substr(0,10)
          return (
              <>
                <div className="container">
                    <div className="border border mb-3">
                        <div>
                            <p><b>Knygos pavadinimas:</b> {title}</p>
                        </div>
                        <div>
                            <p><b>Knygos autorius:</b> {author}</p>
                        </div>
                        <div>
                            <p><b>Knygos kategorija:</b> {category}</p>
                        </div>
                        <div>
                            <p><b>Leidimo data:</b> {date}</p>
                        </div>
                    </div>
                </div>
              </>
          )
      })
      return (
        <>
            {book}
        </>
      )
}

export default Books;
