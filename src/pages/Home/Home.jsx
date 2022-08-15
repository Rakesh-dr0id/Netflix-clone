import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './home.scss';
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
