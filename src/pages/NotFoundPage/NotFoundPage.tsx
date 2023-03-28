import React from 'react';
import Header from '../../layout/Header/Header';

class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <Header title={'404'} />
        <main className="main">Page nоt found.</main>
      </>
    );
  }
}

export default NotFoundPage;
