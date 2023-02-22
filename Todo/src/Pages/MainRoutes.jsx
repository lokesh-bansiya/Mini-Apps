import React from "react";
import { Stack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { HomePage } from "./HomePage";
import { EditPage } from "./EditPage";
import { Login } from "./Login";
import RequireAuth from "../Context/AuthContext";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Stack direction="row">
              <Sidebar />
              <HomePage />
            </Stack>
          </RequireAuth>
        }
      />
      <Route
        path="/task/:id"
        element={
          <RequireAuth>
            <Stack direction="row">
              <Sidebar />
              <EditPage />
            </Stack>
          </RequireAuth>
        }
      />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoutes;
