import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Browse from "./pages/Browse";
import Profile from "./components/profile/Profile";
import JobDescription from "./components/client/jobs/JobDescription";
import Companies from "./pages/Companies";
import CreateComapny from "./components/admin/companies/CreateComapny";
import CompanySetup from "./components/admin/companies/CompanySetup";
import AdminJobs from "./pages/AdminJobs";
import CreateJob from "./components/admin/jobs/CreateJob";
import Applicants from "./components/admin/jobs/Applicants";
import ProtectedAdminRoute from "./components/admin/ProtectedAdminRoute";
import ProtectedClientRoute from "./components/client/ProtectedClientRoute";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    // For Client
    {
      path: "/jobs",
      element: <ProtectedClientRoute><Jobs /></ProtectedClientRoute>
    },
    {
      path: "/browse",
      element: <ProtectedClientRoute><Browse /></ProtectedClientRoute>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/profile",
      element: <ProtectedClientRoute><Profile /></ProtectedClientRoute>
    },
    {
      path: "/jobs/description/:id",
      element: <ProtectedClientRoute><JobDescription /></ProtectedClientRoute>
    },
    // For Admin
    {
      path: "/admin/companies",
      element: <ProtectedAdminRoute><Companies /></ProtectedAdminRoute>
    },
    {
      path: "/admin/companies/create",
      element: <ProtectedAdminRoute><CreateComapny /></ProtectedAdminRoute>
    },
    {
      path: "/admin/companies/:id",
      element: <ProtectedAdminRoute><CompanySetup /></ProtectedAdminRoute>
    },
    {
      path: "/admin/jobs",
      element: <ProtectedAdminRoute><AdminJobs /></ProtectedAdminRoute>
    },
    {
      path: "/admin/jobs/create",
      element: <ProtectedAdminRoute> <CreateJob /></ProtectedAdminRoute>
    },
    {
      path: "/admin/jobs/:id/applicants",
      element: <ProtectedAdminRoute><Applicants /></ProtectedAdminRoute>
    }
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
