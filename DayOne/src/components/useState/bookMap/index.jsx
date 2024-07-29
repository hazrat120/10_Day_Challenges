// import { useState } from "react";

import { Data } from "../../../data/booksData/Data";

const BookMap = () => {
  const books = Data;
  return (
    <div>
      <h1>Book Data</h1>
      <div>
        {books.map((item) => (
          <div key={item.id}>
            <p>Id: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Writer: {item.writer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookMap;
