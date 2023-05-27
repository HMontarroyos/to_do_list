import styled from "styled-components";

export const StickyContainer = styled.div`
  width: 230px;
  position: relative;
`;

export const StickyOuter = styled.div`
  display: flex;
  padding-top: 92%;
  position: relative;
  width: 100%;
`;

export const Sticky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &::before {
    box-shadow: -2px 2px 15px 0 rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.25);
    content: "";
    width: 90%;
    left: 5px;
    height: 83%;
    position: absolute;
    top: 30%;
  }
`;

export const StickyBefore = styled.div`
  box-shadow: -2px 2px 15px 0 rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.25);
  content: "";
  width: 90%;
  left: 5px;
  height: 83%;
  position: absolute;
  top: 30%;
`;

export const StickyContent = styled.div`
  background: ${(props) => props.theme.colors.note};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  clip-path: url(#stickyClip);
  cursor: pointer;
  position: relative;
`;
export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
`;

export const ContainerIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  word-wrap: break-word;
  hyphens: auto;
`;
