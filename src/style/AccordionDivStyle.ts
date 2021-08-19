import styled, { keyframes } from 'styled-components';

type responseType = {
    open: boolean;
}


const animated = keyframes`
from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`


export const QuestionAnimation = styled.p<responseType>`
  padding: 0.75rem;
  color: #bbbbbb;
  word-spacing: 1.6px;
  line-height: 1.75rem;
  color: white;
  display: ${({ open }) => (open ? "block" : "none")};
  animation: ${animated} 500ms ease-in-out;
`;

