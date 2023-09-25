import { useState, useReducer } from "react";
import Calendar from "./components/Calendar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import MenuContext from "./context/menuContext";

const App = () => {
  // const [open, setOpen] = useState(false);
  const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
      case "MENU_OPEN": {
        return {
          ...state,
          isOpened: true
        };
      }
      case "MENU_CLOSE": {
        return {
          ...state,
          isOpened: false
        };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { isOpened: false });
  const handleOpen = () => {
    // setOpen(true);
    dispatch({ type: "MENU_OPEN" });
  };
  const handleClose = () => {
    // setOpen(false);
    dispatch({ type: "MENU_CLOSE" });
  };
  return (
    <MenuContext.Provider value={[state, handleClose]}>
      <BrowserRouter>
        <div
          onClick={handleOpen}
          className={[state.isOpened ? "burger-none" : "burger"]}
        >
          =
        </div>
        <NavMenu />
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </MenuContext.Provider>
  );
};

export default App;
