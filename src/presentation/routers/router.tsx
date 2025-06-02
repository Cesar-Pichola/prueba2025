import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreditCard } from "../page";



function RoutersApp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreditCard/>} />

    </Routes>
  </BrowserRouter>
  );
}

export default RoutersApp;