import React from 'react';
import Search from '../../components/Search';
import CardsList from '../../components/CardsList/CardsList';
import Header from '../../layout/Header/Header';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header title={'Home'} />
        <main className="main">
          <Search />
          <CardsList />
        </main>
      </>
    );
  }
}

export default HomePage;
