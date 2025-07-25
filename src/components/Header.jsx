import React from "react";
import classes from "../styles/Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.headerLink}>
        Blog
      </Link>
      <Link to="/contact" className={classes.headerLink}>
        お問い合わせ
      </Link>
    </header>
  );
};