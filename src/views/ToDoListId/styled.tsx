import styled from 'styled-components';


export const Container = styled.div`
    margin: 20px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: ${(props) => props.theme.fonts.title}

`

export const Paragraph = styled.p`
    text-align: center;
    margin-top: 50px;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-family: ${(props) => props.theme.fonts.title};
`



export const ContainerTable = styled.div`
    margin: 20px;
    margin-top: 150px;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 30px;
    }
`

export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
`

export const ContainerInput = styled.div`
margin: 20px;
align-items: center;
display:flex;
flex-direction: row;
justify-content: space-between;

div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

`

export const Item = styled.p`
    padding: 10px;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: bold;
    text-decoration: underline;
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-right: 30px;
`;
