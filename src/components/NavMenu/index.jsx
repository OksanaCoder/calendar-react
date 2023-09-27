import React, { useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./NavMenu.module.scss";
import MenuContext from "../../context/menuContext";

const NavMenu = () => {
  const [state, handleClose] = useContext(MenuContext);
  const { isOpened } = state;
  const classNames = cx(styles.menu, {
    [styles.menuOpen]: isOpened
  });

  useEffect(() => {
    const handleCloseMenu = ({ target }) => {
      if (isOpened && refId.current.contains(target) === false) {
        handleClose();
      }
    };
    window.addEventListener("click", handleCloseMenu);

    return () => {
      window.removeEventListener("click", handleCloseMenu);
    };
  }, [isOpened]);
  const refId = useRef(null);
  const handleCloseLink = () => {
    handleClose();
  };
  return (
    <div className={classNames} ref={refId}>
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
        <li onClick={handleCloseLink}>
          <Link to="/catalog">Catalog</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
