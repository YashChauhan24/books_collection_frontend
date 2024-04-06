import React from "react";
import { Link } from "react-router-dom";

const BooksRouter = () => {
  return (
    <>
      <div className="Routes">
        <Link className="link" to="/add-book">
          ADD BOOK
        </Link>
        &emsp;&nbsp;
        <Link className="link" to="/booklist">
          BOOKS LIST
        </Link>
        &emsp;
      </div>
    </>
  );
};

export default BooksRouter;
