import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    margin: 20px;
`


export const LinkRedirect = styled(Link)`
    text-decoration: none;
`

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: ${(props) => props.theme.fonts.title}

`

export const Paragraph = styled.p`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-family: ${(props) => props.theme.fonts.text}
`

export const ContainerParagraph = styled.div`
    width: 800px;
    height: 200px;
`

export const ContainerNote = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;