import { createContext, useState, useEffect, useContext } from "react";


//////////////////////////////////////////////
//// CREATING CONTEXT ////
//////////////////////////////////////////////
const DataContext = createContext();
export default DataContext;


//////////////////////////////////////////////
//// CREATING PROVIDER ////
//////////////////////////////////////////////
export const DataProvider = ({ children }) => {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    const [isDarkMode, setIsDarkMode] = useState(storedDarkMode !== null ? JSON.parse(storedDarkMode) : false);


    function onMode() {
        setIsDarkMode(!isDarkMode);
    }

    useEffect(function() {
        localStorage.setItem('isDarkMode', isDarkMode);

        if(isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);


    // CREATE CONTEXT DATA
    let contextData = {
        onMode,
        isDarkMode,
        setIsDarkMode
    }


    return <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
}


//////////////////////////////////////////////
//// CREATING HOOK AND EXPORTING ////
//////////////////////////////////////////////
export const useDataContext = () => useContext(DataContext);