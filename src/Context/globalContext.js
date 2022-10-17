import { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [componentName, setComponentName] = useState('');

  const data = { componentName, setComponentName };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;

export { GlobalContextProvider };
