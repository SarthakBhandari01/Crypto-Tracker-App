import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/home";
import CoinsDetailPage from "../../Pages/CoinsDetailsPage";
import MainLayout from "../../Pages/Layout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:coinId" element={<CoinsDetailPage />} />
      </Route>
    </Routes>
  );
}
export default Routing;
