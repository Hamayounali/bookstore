import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.checkStatus);
  const viewStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="container">
      <br />
      <h3>{category}</h3>
      <button type="button" className="btn btn-primary" onClick={viewStatus}>Check Status</button>
    </div>
  );
}

export default Categories;
