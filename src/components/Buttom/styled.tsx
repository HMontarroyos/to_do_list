import styled from "styled-components";
import { lighten } from "polished";

interface Props {
  width?: string;
  height?: string;
  colorWarning?: boolean;
  disabled?: boolean;
}

export const Button = styled.button<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.disabledBackground
      : props.colorWarning
      ? props.theme.colors.remove
      : props.theme.colors.backgroundConfirm};
  font-size: ${(props) => props.theme.fontSizes.small};
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin-left: 20px;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? props.theme.colors.disabledBackground
        : props.colorWarning
        ? lighten(0.1, props.theme.colors.remove)
        : lighten(0.1, props.theme.colors.backgroundConfirm)};
    box-shadow: ${(props) =>
      props.disabled ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.25)"};
  }
`;
