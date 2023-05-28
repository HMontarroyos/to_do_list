import React from "react";
import { Fade } from "react-reveal";
import * as S from "./styled";
import { toDoList } from "../../assets/images";

const About: React.FC = () => {
  return (
    <>
      <S.Container>
        <Fade top cascade>
          <div>
            <h1>Sobre Nós</h1>
            <p>
              Bem-vindo(a) ao nosso sistema de gerenciamento de tarefas! Sabemos
              o quão essencial é ser organizado(a) e eficiente em suas
              atividades diárias. Para ajudá-lo(a) a alcançar esse objetivo,
              criamos um recurso poderoso que permite que você crie, personalize
              e acompanhe suas listas de tarefas com facilidade.
            </p>
            <p>
              Além disso, nosso sistema permite que você edite e gerencie suas
              tarefas. E se alguma tarefa não for mais relevante, você pode
              excluí-la sem problemas.
            </p>
            <p>
              Então, não espere mais! começe logo a criar sua primeira lista de
              tarefas agora mesmo. Com recursos abrangentes e uma interface
              intuitiva, estamos aqui para ajudá-lo(a) a atingir níveis elevados
              de produtividade e alcançar seus objetivos. Seja organizado(a),
              seja eficiente e conquiste o sucesso em suas tarefas diárias!
            </p>
          </div>
        </Fade>
        <Fade right>
          <S.Image src={toDoList} />
        </Fade>
      </S.Container>
    </>
  );
};

export default About;
