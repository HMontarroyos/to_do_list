import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 20px;
`;

export const LinkRedirect = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts.title};
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts.title};
  white-space: pre-wrap;
  margin-top: 30px;
`;

export const TextToDo = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.small};
  white-space: pre-wrap;
  text-align: center;
  padding: 10px;
`;

export const ContainerParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  margin: 0 auto;
  margin-bottom: 30px;

  @media (max-width: 820px) {
    width: 500px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const ContainerNote = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
