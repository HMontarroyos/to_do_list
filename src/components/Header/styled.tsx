import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

interface Props {
  height: string;
}

export const Menu = styled.div<Props>`
  width: 100vw;
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
`;

export const NavItems = styled.ul`
z-index: 9999;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  text-align: center;
  position: relative;
  z-index: 1;


  li {
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.title}
    font-weight: bold;
    display: inline-block;
    padding: 10px;
    margin-right: 20px;
    font-size: ${(props) => props.theme.fontSizes.small};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => lighten(0.1, props.theme.colors.text)};
    }
  }
`;

export const LinkRedirect = styled(Link)`
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  top: 50%;
  transform: translateY(-50%); 
  z-index: 0;
  
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  margin-left: 10px;
`;
