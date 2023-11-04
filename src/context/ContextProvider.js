import React, { useContext, createContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false
};


export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    // Handling the Navbar section
    const [profile, setProfile] = useState(false);
    const [notification, setNotification] = useState(false);
    const [chat, setChat] = useState(false);

    const handleProfile = () => {
        setProfile(!profile)
        setChat(false)
        setNotification(false)
    }
    const handleNotification = () => {
        setNotification(!notification)
        setChat(false)
        setProfile(false)
    }
    const handleChat = () => {
        setChat(!chat)
        setNotification(false)
        setProfile(false)
    }
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
        setProfile(false)
        setChat(false)
        setNotification(false)

    }
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    };
    return (
        <StateContext.Provider
            value={
                {
                    currentColor,
                    currentMode,
                    activeMenu,
                    screenSize,
                    setScreenSize,
                    handleClick,
                    isClicked,
                    initialState,
                    setIsClicked,
                    setActiveMenu,
                    setCurrentColor,
                    setCurrentMode,
                    setMode, setColor,
                    themeSettings,
                    setThemeSettings,
                    profile, setProfile,
                    handleProfile
                    , notification, setNotification, chat, setChat, handleNotification, handleChat
                }}
        >
            {children}

        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);