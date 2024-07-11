import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SavedImagesContext } from '../contexts/SavedImagesContext';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #b3e6ff;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #b3e6ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 300px;

  &:hover {
      background-color: grey;
    }

`;

const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
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

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageCard = styled.div`
  margin: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: transform 0.3s, background-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white; /* White background for image cards */

  &:hover {
    transform: scale(1.05);
    background-color: grey; /* Change background color on hover */
  }

  img {
    border-radius: 5px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #333;
  }

  button {
    margin-top: 10px;
    padding: 5px 10px;
  }
`;

const Search = () => {
  const [images] = useState([
    { url: 'https://http.dog/100.jpg', code: '100' },
    { url: 'https://http.dog/101.jpg', code: '101' },
    { url: 'https://http.dog/102.jpg', code: '102' },
    { url: 'https://http.dog/103.jpg', code: '103' },
    { url: 'https://http.dog/200.jpg', code: '200' },
    { url: 'https://http.dog/201.jpg', code: '201' },
    { url: 'https://http.dog/202.jpg', code: '202' },
    { url: 'https://http.dog/203.jpg', code: '203' },
    { url: 'https://http.dog/204.jpg', code: '204' },
    { url: 'https://http.dog/205.jpg', code: '205' },
    { url: 'https://http.dog/206.jpg', code: '206' },
    { url: 'https://http.dog/207.jpg', code: '207' },
    { url: 'https://http.dog/208.jpg', code: '208' },
    { url: 'https://http.dog/218.jpg', code: '218' },
    { url: 'https://http.dog/226.jpg', code: '226' },
    { url: 'https://http.dog/300.jpg', code: '300' },
    { url: 'https://http.dog/301.jpg', code: '301' },
    { url: 'https://http.dog/302.jpg', code: '302' },
    { url: 'https://http.dog/400.jpg', code: '400' },
    { url: 'https://http.dog/511.jpg', code: '511' },
    { url: 'https://http.dog/405.jpg', code: '405' },
    { url: 'https://http.dog/505.jpg', code: '505' },
    { url: 'https://http.dog/999.jpg', code: '999' },
  ]);
  const [filter, setFilter] = useState('');
  const { addImage } = useContext(SavedImagesContext);
  const navigate = useNavigate();

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSave = (url) => {
    addImage(url);
  };

  const handleNavigateToList = () => {
    navigate('/lists');
  };

  const filteredImages = images.filter(image => {
    return image.code.startsWith(filter);
  });

  return (
    <PageContainer>
      <SearchContainer>
        <h2>Search</h2>
        <Input
          type="text"
          placeholder="Filter by code"
          value={filter}
          onChange={handleFilter}
        />
        <ImageContainer>
          {filteredImages.map(image => (
            <ImageCard key={image.url}>
              <img src={image.url} alt="dog" />
              <p>{image.code}</p>
              <Button onClick={() => handleSave(image.url)}>Save</Button>
            </ImageCard>
          ))}
        </ImageContainer>
        <Button onClick={handleNavigateToList}>Go to Saved Images</Button>
      </SearchContainer>
    </PageContainer>
  );
};

export default Search;
