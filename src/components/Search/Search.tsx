import React, { ChangeEvent } from 'react';
import './Search.scss';

interface SearchState {
  inputValue: string;
}

class Search extends React.Component {
  state: SearchState = {
    inputValue: '',
  };

  componentDidMount(): void {
    const value = localStorage.getItem('searchValue');
    if (value) this.setState({ inputValue: value });
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.inputValue);
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ inputValue: value });
  };

  render() {
    return (
      <input
        id="search"
        className="search"
        type="text"
        placeholder="Search..."
        data-testid="search"
        onChange={this.handleChange}
        value={this.state.inputValue}
      />
    );
  }
}

export default Search;
