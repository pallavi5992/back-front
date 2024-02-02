import React from 'react';
import Header from '../../../header/Header';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div>
      <div>
      <Header/>
      </div>
      <div className='d-flex  mt-5 flex-column align-items-center'>
      <h4 className='text-danger'>404 Not Found</h4>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button className='btn btn-primary'>
      <Link to="/" className='text-decoration-none text-light'>Back to Home Page</Link>
      </button>
    </div>
    </div>
  );
};

export default NotFoundPage;