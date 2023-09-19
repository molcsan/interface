import styled from 'styled-components';
import { useState } from 'react';

const SwitcherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #333d59;
  height: 48px;

  & > *:not(:last-child) {
    border-right: 1px solid #333d59;
  }
`;

const SwitcherButton = styled.button<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: none;
  background: transparent;
  color: #f0f0f0;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  ${({ active }) =>
    active &&
    `
    background-color: #3d1c52;
    color: rgba(178, 103, 221, 0.94);
  `}

  &:hover, &:focus {
    background-color: #3d1c52;
    color: rgba(178, 103, 221, 0.94);
  }
`;

interface SwitcherProps {
  options: string[];
  onChange?: (option: string) => void;
}

export default function Switcher({ options, onChange }: SwitcherProps) {
  const [active, setActive] = useState<string>(options[0]);

  const handleClick = (option: string) => {
    if (option === active) return;

    setActive(option);
    onChange?.(option);
  };

  return (
    <SwitcherContainer>
      {options.map((option) => (
        <SwitcherButton
          active={active == option}
          key={option}
          onClick={() => handleClick(option)}
        >
          {option}
        </SwitcherButton>
      ))}
    </SwitcherContainer>
  );
}
