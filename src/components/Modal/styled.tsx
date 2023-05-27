import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  justify-content: center;
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  background-color: #e8e8a2;
  background-color: ${(props) => props.theme.fonts.title};
  color: #333;
  width: 160px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 5px;
`;

export const ContainerInput = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextMaxCharacter = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.colors.remove};
  font-family: ${(props) => props.theme.fonts.title};
  padding-bottom: 10px;
`;
