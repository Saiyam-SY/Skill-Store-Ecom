import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../components/Card";
import axios from "axios";

function HeroCourse() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5000/book");

        // console.log(res.data);
        
        // Assuming `res.data` contains your list of books, filter the "Free" category
        const filteredBooks = res.data.filter(
          (items) => items.category === "Free"
        );

        console.log(filteredBooks);

        setBook(filteredBooks);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440, // Large desktop screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024, // Medium screens (laptops/tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Small tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-[90%] mx-auto">
      <Slider {...settings}>
      {book.map((items) => (
          <div key={items.id} className="mx-auto my-5">
            <Card items={items} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroCourse;
