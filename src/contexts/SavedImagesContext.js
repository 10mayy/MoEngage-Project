import React, { createContext, useState } from 'react';

export const SavedImagesContext = createContext();

export const SavedImagesProvider = ({ children }) => {
  const [savedImages, setSavedImages] = useState([]);

  const addImage = (url) => {
    setSavedImages((prevImages) => {
      const exists = prevImages.some(image => image.url === url);
      if (!exists) {
        return [...prevImages, { url, timestamp: new Date().toLocaleString() }];
      }
      return prevImages;
    });
  };

  const removeImage = (url) => {
    setSavedImages((prevImages) => prevImages.filter(image => image.url !== url));
  };

  return (
    <SavedImagesContext.Provider value={{ savedImages, addImage, removeImage }}>
      {children}
    </SavedImagesContext.Provider>
  );
};
