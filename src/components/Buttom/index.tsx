import React from 'react'
import * as S from './styled'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  height?: string
  colorWarning?: boolean
  children?: React.ReactNode
}

function Button ({ width, height,  colorWarning, children,  ...props }: ButtonProps): JSX.Element {
  return (
    <S.Button width={width} height={height} colorWarning={colorWarning} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
