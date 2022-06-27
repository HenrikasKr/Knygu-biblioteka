import React, { useState, useEffect } from "react";
import { addBook, getBooks, deleteBook } from "../../../api/libraries/apiLibraries";
import swal from "sweetalert";

import { useForm } from "react-hook-form";
import "./style/AddBooks.css"
import 'bootstrap/dist/css/bootstrap.css';


function AddBooks() {

    const [books, setBooks] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function getAllBooks() {
    getBooks().then((res) => {
      setBooks(res.data.data.book);
      console.log(books)
    });
  }

  useEffect(() => {
    getAllBooks();
    console.log(books);
}, []);

  function onSubmit(data) {
    const newObj = {
        book_title: data.title,
        book_author: data.author,
        book_category: data.category,
        book_date: data.date,
    };
    addBook(newObj).then(() => {
      getAllBooks();
    });
    reset();
  }

  function deleteBooks(_id) {
    swal({
      title: "Ar tikrai norite ištrinti šią knygą?",
      icon: "warning",
      buttons: ["Atšaukti", "Gerai"],
    }).then((isConfirm) => {
      if (isConfirm) {
          console.log(_id)
        deleteBook(_id);
        getAllBooks();
      }
    });
  }

    const allBooks = books.map((item) => {
        return (
            <div className="container">
                <div className="border-bottom mb-2">
                    <p><b>Knygos id:</b> {item._id}; <b>Knygos pavadinimas:</b>{item.book_title} <button onClick={() => deleteBooks(item._id)}>Ištrinti</button></p>
                </div>
            </div>
        )
    })

  return (
    <>
      <div className="mb-5 search-box border border">
        <input
            className="input-field mb-3"
            placeholder="Knygos pavadinimas"
            type="text"
            name="title"
            id="title"
            {...register("title", {
            required: true,
            pattern:
                /^[a-ząčęėįšųūž|A-ZĄČĘĖĮŠŲŪŽ]+(?: [a-ząčęėįšųūž|A-ZĄČĘĖĮŠŲŪŽ]+)*$/,
            })}
        />
            {errors.category && (
            <div className="error">
                Laukelis yra privalomas.
            </div>
            )}

        <input
            className="input-field mb-3"
            type="text"
            placeholder="Knygos autorius"
            name="author"
            id="author"
            {...register("author", {
            required: true,
            pattern:
                /^[a-ząčęėįšųūž|A-ZĄČĘĖĮŠŲŪŽ]+(?: [a-ząčęėįšųūž|A-ZĄČĘĖĮŠŲŪŽ]+)*$/,
            })}
        />
            {errors.category && (
            <div className="error">
                Laukelis yra privalomas.
            </div>
            )}

        <input
            className="input-field mb-3"
            type="text"
            placeholder="Knygos kategorija"
            name="category"
            id="category"
            {...register("category", {
            required: true,
            pattern:
                /^[a-ząčęėįšųūž|A-ZĄČĘĖĮŠŲŪŽ]+(?: [a-ząčęėįšųūž|A-ZĄČĘĖĮŠŲŪŽ]+)*$/,
            })}
        />
            {errors.category && (
            <div className="error">
                Laukelis yra privalomas.
            </div>
            )}

        <input
            className="input-field mb-3"
            type="date"
            placeholder="Leidimo data"
            name="date"
            id="date"
            {...register("date", {
            required: true,
            })}
        />
            {errors.category && (
            <div className="error">
                Laukelis yra privalomas.
            </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <button className="form-submit-btn" id="nauja-kategorija" type="submit">
                    Pridėti naują knygą
                </button>
            </form>    
        </div>
        {allBooks}
        </>
  );
}

export default AddBooks;