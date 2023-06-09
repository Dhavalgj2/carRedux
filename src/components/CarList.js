import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(({ form, cars: { cars, searchTerm } }) => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car));
  };
  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - $ {car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car.id)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
