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
import ProtectedRoute from "./components/admin/ProtectedRoute/ProtectedRoute";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/jobs",
      element: <Jobs />
    },
    {
      path: "/browse",
      element: <Browse />
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
      element: <Profile />
    },
    {
      path: "/jobs/description/:id",
      element: <JobDescription />
    },
    // For Admin
    {
      path: "/admin/companies",
      element: <ProtectedRoute><Companies /></ProtectedRoute>
    },
    {
      path: "/admin/companies/create",
      element: <ProtectedRoute><CreateComapny /></ProtectedRoute>
    },
    {
      path: "/admin/companies/:id",
      element: <ProtectedRoute><CompanySetup /></ProtectedRoute>
    },
    {
      path: "/admin/jobs",
      element: <ProtectedRoute> <AdminJobs /></ProtectedRoute>
    },
    {
      path: "/admin/jobs/create",
      element: <ProtectedRoute><CreateJob /></ProtectedRoute>
    },
    {
      path: "/admin/jobs/:id/applicants",
      element: <ProtectedRoute><Applicants /></ProtectedRoute>
    }
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
