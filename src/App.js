import React from 'react';
import AppRouter from './AppRouter';
import { SavedImagesProvider } from './contexts/SavedImagesContext';

const App = () => {
  return (
    <SavedImagesProvider>
      <AppRouter />
    </SavedImagesProvider>
  );
};

export default App;
