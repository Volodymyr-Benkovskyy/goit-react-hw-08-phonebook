import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <>
      <Header />

      <Suspense >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayout;