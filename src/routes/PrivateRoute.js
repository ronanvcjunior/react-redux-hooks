import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = true;

  if (isClosed && !isLoggedIn) {
    return <Redirect to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }} />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

PrivateRoute.defaultProps = {
  isClosed: false,
};

// eslint-disable-next-line react/no-typos
PrivateRoute.PropTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};
