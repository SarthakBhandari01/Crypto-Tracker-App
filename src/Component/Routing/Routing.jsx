import { Route, Routes } from "react-router-dom";
import MainLayout from "../../Pages/Layout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../../Pages/home"));
const CoinsDetailPage = lazy(() => import("../../Pages/CoinsDetailsPage"));

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/details/:coinId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CoinsDetailPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
export default Routing;
