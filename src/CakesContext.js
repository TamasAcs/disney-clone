import React, { createContext, useState } from 'react';
import cakes from './cakes.json';

export const CakesContext = createContext();

export const CakesProvider = ({ children }) => {
  const [cake, setCakes] = useState(cakes);
  const [sort, setSort] = useState({
    sort: 'all',
    search: '',
  });
  return (
    <CakesContext.Provider value={{ cake, setCakes, sort, setSort }}>
      {children}
    </CakesContext.Provider>
  );
};