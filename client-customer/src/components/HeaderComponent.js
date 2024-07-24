import React, { Component } from 'react';
import Menu from './MenuComponent';
import ToggleThemeButton from './ToggleThemeButton'; // Import your toggle button component

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false, // Initial state: light mode
    };
    this.toggleTheme = this.toggleTheme.bind(this); // Bind "this" context
  }

  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  render() {
    return (
      <header className="header">
        <Menu />
        <ToggleThemeButton toggleTheme={this.toggleTheme} isDarkMode={this.state.isDarkMode} />
      </header>
    );
  }
}

export default Header;
