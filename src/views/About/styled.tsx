import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 20px auto;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 820px) {
    width: 600px;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    width: 300px;
  }

  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: ${(props) => props.theme.fonts.title};
    margin-top: 20px;
  }
  p {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.title};
    margin-top: 20px;
    white-space: pre-wrap;
  }
`;
export const Image = styled.img`
  width: 400px;

  @media (max-width: 500px) {
    width: 300px;
  }
`;
