import React, { useContext } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

const ThemeSwitcher = () => {
  // BEGIN (write your solution here)
  const { themes, currentTheme, setTheme } = useContext(ThemeContext);
  // END

  return (
    <ButtonGroup className="mt-2">
      {themes.map((curTheme) => (
        <ToggleButton
          key={curTheme.id}
          id={`radio-${curTheme.id}`}
          type="radio"
          name="radio"
          value={curTheme.name}
          checked={curTheme.name === currentTheme.name}
          onChange={() => setTheme(curTheme)}
        >
          {curTheme.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ThemeSwitcher;
