import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutSkeleton from "./LayoutSkeleton";

const LayoutPage = lazy(() => import("../Component/LayoutPage"));
const HomePage = lazy(() => import("../Pages/homePage/homePage"));
// const MonthlyRewards = lazy(() =>
//   import("../pages/monthlyRewards/MonthlyRewards")
// );
const MonthlyRewardsv2 = lazy(() =>
  import("../Pages/monthlyRewards/MonthlyRewardsv2")
);
const TotalRewards = lazy(() => import("../Pages/totalRewards/TotalRewards"));
const TransactionPage = lazy(() =>
  import("../Pages/transactions/TransactionsPage")
);
const NotFoundPage = lazy(() => import("../Component/NotFoundPage"));

const RouterComponent = () => {
  return (
    <Router>
      <Suspense fallback={<LayoutSkeleton />}>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            {/* <Route path="/monthly-rewards" element={<MonthlyRewards />} /> */}
            <Route path="/monthly-rewards" element={<MonthlyRewardsv2 />} />
            <Route path="/total-rewards" element={<TotalRewards />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RouterComponent;