import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, Login, PlanPage, SignUp, WelcomePage } from '../pages';
import AccountPage from '../pages/AccountPage/AccountPage';
import MovieList from '../pages/MovieList/MovieList';
import PageLayout from '../pages/PageLayout/PageLayout';
import YourAccount from '../pages/YourAccount/YourAccount';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

const PageRouting = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup">
          <Route index element={<SignUp />} />
          <Route path="plan" element={<PlanPage />} />
        </Route>
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/accounts" element={<AccountPage />} />
        <Route path="/YourAccount" element={<YourAccount />} />
        <Route path="/homepage/:id">
          <Route index element={<PageLayout component={<HomePage />} />} />
          <Route
            path=":movietype"
            element={<PageLayout component={<MovieList />} className={'nav-wrapper'} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default PageRouting;
