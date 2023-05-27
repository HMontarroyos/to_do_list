import styled from "styled-components";

interface ItemProps {
  checked: boolean;
}

interface ContainerInputProps {
  taskChildren?: boolean;
}

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts.title};
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-top: 50px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts.title};
`;

export const ContainerTable = styled.div`
  margin: 20px;
  margin-top: 150px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerInput = styled.div<ContainerInputProps>`
  margin: 20px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    margin-left: ${(props) => (props.taskChildren ? "30px" : 0)};
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Item = styled.p<ItemProps>`
  padding: 10px;
  color: ${(props) =>
    props.checked ? props.theme.colors.disabledText : props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: bold;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-right: 30px;

  input:checked + Item {
    color: ${(props) => props.theme.colors.disabledText};
    opacity: 0.5;
    text-decoration: line-through;
  }
`;

export const WrapperTextButton = styled.div`
  overflow: hidden;
  white-space: wrap;
  padding: 5px;
  p {
    width: 100%;
    text-align: center;
  }

  
`