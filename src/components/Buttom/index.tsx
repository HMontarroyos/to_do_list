import React from 'react'
import * as S from './styled'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  height?: string
  children?: React.ReactNode
}

function Button ({ width, height, children, ...props }: ButtonProps): JSX.Element {
  return (
    <S.Button width={width} height={height} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
