import React, { useContext } from 'react';
import { SavedImagesContext } from '../contexts/SavedImagesContext';
import styled from 'styled-components';
import { format } from 'date-fns';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80%;
  padding: 40px;
  background-color: #b3e6ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow-y: auto;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const ImageCard = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  &:hover {
    transform: scale(1.05);
    background-color: grey;
  }

  img {
    border-radius: 5px;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
  }

  p {
    margin: 10px 0;
    font-size: 14px;
    color: #666;
    font-style: italic;
  }
`;

const Button = styled.button`
  padding: 20px;
  margin: 20px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Lists = () => {
  const { savedImages, removeImage } = useContext(SavedImagesContext);

  return (
    <PageContainer>
      <ListsContainer>
        <h2>Saved Images</h2>
        <ImageContainer>
          {savedImages.map(({ url, timestamp }) => (
            <ImageCard key={url}>
              <img src={url} alt="dog" />
              <p>Added on: {format(new Date(timestamp), 'MMMM do, yyyy')}</p>
              <Button onClick={() => removeImage(url)}>Remove</Button>
            </ImageCard>
          ))}
        </ImageContainer>
      </ListsContainer>
    </PageContainer>
  );
};

export default Lists;
