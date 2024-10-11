import React, {useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
    {
        id: 1,
        name: 'White',
        className: 'light',
    },
    {
        id: 2,
        name: 'Black',
        className: 'dark',
    },
    {
        id: 3,
        name: 'Blue',
        className: 'dark-blue',
    },
];

const ThemeProvider = ({children}) => {
    // BEGIN (write your solution here)
    const [currentTheme, setCurrentTheme] = useState(themes[0]); // Установка темы по умолчанию

    const setTheme = (theme) => {
        setCurrentTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{ themes, currentTheme, setTheme }}>
            <div className={currentTheme.className}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
    // END
};

const App = () => (
    <ThemeProvider>
        <Tabs className="mb-3">
            <Tab eventKey="home" title="Home">
                <Home/>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Profile/>
            </Tab>
        </Tabs>
        <ThemeSwitcher/>
    </ThemeProvider>
);

export default App;
