import React, { useState } from 'react'
import * as S from './styled'
import { Buttom, Note } from '../../components'

interface todoList {
    _id: string
    name: string
  }


const Home: React.FC = () => {
    const [todoLists, setTodoLists] = useState<todoList[]>([{
        _id: 'teste',
        name: 'Hello Word'
    }, {
        _id: 'teste2',
        name: 'Hello Word 2'
    }])
  return (
        <S.Container>
            <S.Title>ToDo List</S.Title>
            <S.ContainerParagraph>
                <S.Paragraph>
                    Bem-vindo(a) ao nosso sistema de gerenciamento de tarefas! 
                    Sabemos o quão importante é ser produtivo e organizar suas atividades
                    diárias de maneira eficiente. Para ajudá-lo(a) nessa jornada, criamos um
                    recurso que permite a criação de uma nova lista de tarefas com um simples 
                    clique no botão "Criar Novo ToDo List".
                </S.Paragraph>
            </S.ContainerParagraph>
            <Buttom width='185px' height='40px'>Criar Novo ToDo List</Buttom>
            {todoLists.length === 0 ? (
                <S.ContainerParagraph>
                    <S.Paragraph>
                        Não existe listas criadas ainda ;( 
                        Não deixe o vazio dominar sua produtividade !
                        Crie agora mesmo sua primeira lista de tarefas e dê um passo rumo ao sucesso
                    </S.Paragraph>
                </S.ContainerParagraph>
            ) : (
                <>           
                    {todoLists.map((todo) => (
                    <Note key={todo._id} name={todo.name} />
                    ))}
                </>               
            )}
        </S.Container>
  )
}

export default Home
