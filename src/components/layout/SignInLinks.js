/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        {" "}
        <a onClick={props.signOut}>Logout</a>{" "}
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating red lighten-1">
          HH
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(signOut());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignInLinks);
