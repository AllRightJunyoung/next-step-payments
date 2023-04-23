import styled, { css } from 'styled-components';
import { ContainerProps } from './AddCard.types';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
  border-radius: 5px;
  padding: 0px 10px;
  cursor: pointer;

  ${({ color }) =>
    color === 'red'
      ? css`
          background: #e14141;
        `
      : color === 'cyon'
      ? css`
          background: #92e3d5;
        `
      : color === 'blue'
      ? css`
          background: #557ce5;
        `
      : color === 'green'
      ? css`
          background: #73bc6d;
        `
      : color === 'pink'
      ? css`
          background: #e76e9b;
        `
      : color === 'yellow'
      ? css`
          background: #fbcc58;
        `
      : color === 'orange'
      ? css`
          background: #f37e3b;
        `
      : color === 'purple'
      ? css`
          background: #df59ba;
        `
      : css`
          background: #e5e5e5;
        `}
  ${({ size }) =>
    size === 'small'
      ? css`
          width: 208px;
          height: 130px;
        `
      : css`
          width: 290px;
          height: 180px;
        `}
`;
