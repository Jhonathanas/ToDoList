import React from 'react';
import '../styles/Components.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '', 
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value, 
    });
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <div className='navbar'>
        <h1>Catatan Pribadi</h1>
        <div className="pencarian">
        <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
            placeholder="Cari catatan..."
          />
        <i className="fa-solid fa-magnifying-glass"/>
        </div>     
      </div>
    );
  }
}

export default Navbar;
