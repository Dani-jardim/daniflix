import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity 0.6s;
  &:hover,
  &:focus {
    opacity: .5;
    width: 320px;
    transition: width 0.5s;
    
    
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 400px) {
    flex: 0 0 140px;
    width:140px;
    height: 240px;

    transition: opacity 0.6s;
    &:hover,
    &:focus {
    opacity: .5;
    width: 100px;
    transition: width 0.5s;
    
    

  }

`;
