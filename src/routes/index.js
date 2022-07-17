import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, Login, PlanPage, SignUp, WelcomePage } from '../pages';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

const PageRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route element={<PublicRoute />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default PageRouting;
