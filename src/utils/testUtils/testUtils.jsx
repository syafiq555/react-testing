import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

const AllProviders = ({ children }) => {
  return <div>{children}</div>;
};

AllProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
