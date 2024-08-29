import { Route, Routes } from "react-router-dom";
import MainLayout from "../../Pages/Layout";
import { lazy, Suspense } from "react";
import MyLoader from "../PageLoader/PageLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

const Home = lazy(() => import("../../Pages/home"));
const CoinsDetailPage = lazy(() => import("../../Pages/CoinsDetailsPage"));

function Routing() {
  return (
    <CustomErrorBoundary>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<MyLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/details/:coinId"
            element={
              <Suspense fallback={<MyLoader />}>
                <CoinsDetailPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </CustomErrorBoundary>
  );
}
export default Routing;
