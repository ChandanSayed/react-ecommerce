import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

const Product = ({ id, name, image, price, category }) => {
  return (
    <NavLink to={`/products/single-products/${id}`}>
      <div className="card">
        <figure data-aos="fade-up">
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data" data-aos="fade-up">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
