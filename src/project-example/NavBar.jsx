import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import {
  StyledNavBar,
  StyledNavBarUl,
} from "../project-example/styles/StyledNavBar";
import { AuthenticationContext } from "./AuthenticationContext";

export const NavBar = ({ isLoading, onLogout }) => {
  const { isSignedIn } = useContext(AuthenticationContext);
  const { isDarkTheme, changeTheme } = useContext(ThemeContext);
  console.log(isDarkTheme);

  if (isLoading) {
    return;
  }

  return (
    <StyledNavBar isDark={isDarkTheme}>
      <StyledNavBarUl>
        {isSignedIn ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/basket">Cart</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </StyledNavBarUl>
      {isSignedIn && <button onClick={onLogout}>LOGOUT</button>}
      <button onClick={changeTheme}>
        {" "}
        {`Change to ${isDarkTheme ? "Light" : "Dark"} theme`}{" "}
      </button>
    </StyledNavBar>
  );
};
