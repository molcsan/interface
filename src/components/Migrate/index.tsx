import styled from 'styled-components';

export const PanelContainer = styled.div`
  display: flex;
  padding: 18px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
`;

export const PanelSection = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ gap }) => gap ?? 0}px;
`;
export const PanelDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(41, 50, 73, 0.85);
  display: flex;
`;
export const PanelTitle = styled.h2`
  color: rgba(178, 103, 221, 0.94);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.33;
  padding: 0;
  margin: 0;
`;
export const PanelDescription = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  padding: 0;
  margin: 0;
`;
export const PanelSelect = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #333d59;
  background: transparent;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  color: #f0f0f0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  position: relative;
`;

export const PanelSelectToken = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: flex-start;
  color: #f0f0f0;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  &:after {
    content: '';
    width: 16px;
    height: 16px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23f0f0f0"><path d="M8 10.5L3.5 6l1-1 3.5 3.5L12.5 5l1 1z"/></svg>');
  }
`;

export const PanelButton = styled.a`
  width: 100%;
  border-radius: 8px;
  background: #3d1c52;
  display: flex;
  height: 50px;
  color: #f0f0f0;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    // lighten(#3d1c52, 25%) = #74359d
    background: #74359d;
  }
`;
export const PanelLabel = styled.p`
  color: #f0f0f0;
  font-size: 16px;
  line-height: 1;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
`;

export const VerticalSteps = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 300px;
  z-index: 1;
  left: -36px;
  top: 0;
  transform: translateX(-100%);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background-color: #334155;
    z-index: 1;
  }
`;

export const VerticalStep = styled.div<{ top: number }>`
  display: flex;
  position: absolute;
  gap: 16px;
  right: 0;
  top: ${({ top }) => top}px;
`;

export const VerticalStepCircle = styled.div<{ active?: boolean }>`
  width: 32px;
  height: 32px;
  background: #21132a;
  border-radius: 50%;
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  line-height: 1;

  ${({ active }) =>
    active &&
    `
    border: 1px solid #6D358D;
    box-shadow: 0px 0px 10px 6px rgba(109, 53, 141, 0.25);
  `}
`;

export const VerticalStepText = styled.div`
  display: flex;
  color: #f0f0f0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;
`;
