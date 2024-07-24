import React from 'react';

function ToggleThemeButton(props) {
  const { toggleTheme, isDarkMode } = props;

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Chế độ sáng' : 'Chế độ tối'}
    </button>
  );
}

export default ToggleThemeButton;
