import { useState } from "react";
import Calendar from "./components/Calendar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <BrowserRouter>
        <div onClick={handleOpen} className={[open ? "burger-none" : "burger"]}>
          =
        </div>
        <NavMenu open={open} handleClose={handleClose} />
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
