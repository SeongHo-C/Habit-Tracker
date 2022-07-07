import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <i className='navbar-logo fa-solid fa-piggy-bank'></i>
        <span className='navbar-name'>Habit Tracker</span>
        <span className='navbar-count'>{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
