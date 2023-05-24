import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 800px;
    margin: 20px auto;

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
    }
`
export const Image = styled.img`
width: 400px;
height: 400px;

`