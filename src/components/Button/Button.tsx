import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #96e2b6;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 16px;

  ${({ disabled }) => disabled && `
    background-color: gray;
    cursor: not-allowed;
  `}

  ${({ fullWidth }: { fullWidth?: boolean }) => fullWidth && `
    width: 100%;
  `}
`;

interface ButtonProps {
  onClick?: (e: React.PointerEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
  const { disabled, children, onClick, fullWidth } = props;
  return <StyledButton fullWidth={fullWidth} onClick={onClick} disabled={disabled}>{children}</StyledButton>
}

export default Button
