import { Route, Routes } from "react-router";

import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Login</h1>} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="transacoes/:type" element={<Transactions />} />
    </Routes>
  );
};

export default AppRoutes;
