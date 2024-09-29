import React from "react";

function Card({items}) {
  return (
    <>
      <div className="card card-bordered bg-base-100 w-72 h-80 shadow-xl m-5 hover:scale-110 duration-200 ">
        <figure>
          <img
            src= {items.image}
            alt="Shoes"
          />
        </figure>
        <div className=" p-5">
          <h2 className="text-2xl font-semibold">
            {items.name}
            <div className="badge m-2 badge-outline">
              {items.category}
            </div>
          </h2>
          <p className="m-1 text-sm">If a dog chews shoes whose shoes does he choose?</p>
          <div className=" flex justify-between items-center mt-3">
            <p className="text-xl font-bold">₹ {items.price} </p>
            <button className="btn btn-sm btn-outline btn-secondary">Buy</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Card;
