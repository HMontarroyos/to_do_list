import styled from "styled-components";
import { lighten } from "polished";

interface Props {
  color:string
}

export const Text = styled.p<Props>`
padding-left: 20px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.theme.fontSizes.small};
  cursor: pointer;

  &:hover {
    color: ${(props) => lighten(0.1, props.color)}
  }
`;
