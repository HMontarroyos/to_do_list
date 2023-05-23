import styled from 'styled-components'
import { lighten } from 'polished'

interface Props {
  width?: string
  height?: string
}

export const Button = styled.button<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.backgroundConfirm};
  font-size: ${(props) => props.theme.fontSizes.small};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => lighten(0.1, props.theme.colors.backgroundConfirm)};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

`

