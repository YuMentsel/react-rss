import React from 'react';
import Header from '../../layout/Header/Header';

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Header title={'About Us'} />
        <main className="main">This is the About Us page.</main>
      </>
    );
  }
}

export default AboutPage;
