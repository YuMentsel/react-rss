import React from 'react';
import Header from '../../layout/Header/Header';
import Form from '../../components/Form';

class FormPage extends React.Component {
  render() {
    return (
      <>
        <Header title={'Form'} />
        <main className="main main_form">
          <h2>Create a new card</h2>
          <Form />
        </main>
      </>
    );
  }
}

export default FormPage;
