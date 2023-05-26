import React from "react";
import * as S from "./styled";
import { edit, remove, close } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

interface NoteProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  closeIcon?: boolean;
  onClose?: () => void;
  onRemove?: () => void;
  onEdit?: () => void;
  id?: string;
}

function Note({
  children,
  closeIcon,
  onClose,
  onRemove,
  onEdit,
  id,
}: NoteProps): JSX.Element {
  const navigate = useNavigate();

  const navigateToDoListById = () => {
    id && navigate(`/todo/${id}`);
  };

  const stopIconClickPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <S.StickyContainer onClick={navigateToDoListById}>
        <S.StickyOuter>
          <S.Sticky>
            <svg width="0" height="0">
              <defs>
                <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                    strokeLinejoin="round"
                    strokeLinecap="square"
                  />
                </clipPath>
              </defs>
            </svg>
            <S.StickyContent>
              {children}
              <S.ContainerIcon>
                {closeIcon ? (
                  <S.Icon src={close} onClick={onClose} />
                ) : (
                  <>
                    <S.Icon
                      src={edit}
                      onClick={(event) => {
                        stopIconClickPropagation(event);
                        onEdit && onEdit();
                      }}
                    />
                    <S.Icon
                      src={remove}
                      onClick={(event) => {
                        stopIconClickPropagation(event);
                        onRemove && onRemove();
                      }}
                    />
                  </>
                )}
              </S.ContainerIcon>
            </S.StickyContent>
          </S.Sticky>
        </S.StickyOuter>
      </S.StickyContainer>
    </>
  );
}

export default Note;
