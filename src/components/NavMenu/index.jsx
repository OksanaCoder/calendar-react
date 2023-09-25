import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./NavMenu.module.scss";
import MenuContext from "../../context/menuContext";

const NavMenu = () => {
  const [state, handleClose] = useContext(MenuContext);
  const classNames = cx(styles.menu, {
    [styles.menuOpen]: state.isOpened
  });
  return (
    <div className={classNames}>
      <ul>
        <div className={styles.close} onClick={handleClose}>
          x
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/calendar">Calendar</Link>
        </li>

        <li>
          {" "}
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
