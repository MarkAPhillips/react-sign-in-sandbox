import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  type: PropTypes.oneOf(["text", "password", "email"])
};

const defaultProps = {
  type: "text"
};

export const Input = ({ type, ...props }) => <input type={type} {...props} />;

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
