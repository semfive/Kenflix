import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar } from '../../components';
import { Wrapper } from './PageLayout.style';

const PageLayout = ({ component, className }) => {
  const navigate = useNavigate();
  const account = JSON.parse(localStorage.getItem('account'));

  const navItems = [
    {
      name: 'Home',
      navNavigate: () => navigate(`/homepage/${account.id}`)
    },
    {
      name: 'TV Shows',
      navNavigate: () => navigate(`/homepage/${account.id}/tvshows`)
    },
    {
      name: 'Now Playing',
      navNavigate: () => navigate(`/homepage/${account.id}/nowplaying`)
    },
    {
      name: 'Popular',
      navNavigate: () => navigate(`/homepage/${account.id}/popular`)
    },
    {
      name: 'Top Rated',
      navNavigate: () => navigate(`/homepage/${account.id}/toprated`)
    }
  ];

  return (
    <Wrapper>
      <div className={className}>
        <Navbar navItems={navItems} />
      </div>
      {component}
      <Footer />
    </Wrapper>
  );
};

export default PageLayout;
