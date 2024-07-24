import React, { Component } from 'react';
import Menu from './MenuComponent';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Menu />
      </header>
    );
  }
}

export default Header;
