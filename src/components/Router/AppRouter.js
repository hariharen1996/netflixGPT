import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import Loader from "../loader/Loader";

const Login = lazy(() => import("../../Authentication/Login"));
const Browse = lazy(() => import("../Main/Browse"));
const AllVideoContainer = lazy(() =>
  import("../SingleVideos/AllVideoContainer")
);
const ErrorContainer = lazy(() => import("../Error/ErrorContainer"));

const AppRouter = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<Loader />}>
          <Browse />
        </Suspense>
      ),
    },
    {
      path: "/videos/:id",
      element: (
        <Suspense fallback={<Loader />}>
          <AllVideoContainer />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<Loader />}>
          <ErrorContainer />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default AppRouter;
