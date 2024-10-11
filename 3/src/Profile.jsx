import React, { useContext } from 'react';

import ThemeContext from './contexts';

const Profile = () => {
  // BEGIN (write your solution here)
    const { currentTheme } = useContext(ThemeContext);
    const className = currentTheme.className;
  // END

  return (
    <article className={className}>
      Текст для вкладки Profile
    </article>
  );
};

export default Profile;
