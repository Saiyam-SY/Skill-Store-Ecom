import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios";

function Courses() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="text-center mx-10 my-5">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum
          nisi labore dolore eius voluptate atque, maiores sunt molestiae fuga?
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto w-11/12 my-5">
        {book.map((items) => (
          <div key={items.id} className="mx-auto my-5">
            <Card items={items} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Courses;
