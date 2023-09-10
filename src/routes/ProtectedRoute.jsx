import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProtectedRoute({ element }) {
  // Check if the user is authenticated (you can use your session storage logic)
  const isAuthenticated = sessionStorage.getItem('access_token') !== null;

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page or another appropriate route
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the provided element (the protected component)
  return element;
}

ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
