import styled from 'styled-components';
import { BodyWrapper } from '../AppBody';
import {
  PanelButton,
  PanelContainer,
  PanelDescription,
  PanelDivider,
  PanelLabel,
  PanelSection,
  PanelSelect,
  PanelSelectToken,
  PanelTitle,
  VerticalStep,
  VerticalStepCircle,
  VerticalSteps,
  VerticalStepText,
} from '../../components/Migrate';
import Switcher from '../../components/Migrate/Switcher';
import futurePng from '../../assets/images/future.png';

const StyledPositionCard = styled.div`
  border: none;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background: #1b2236;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const PanelInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const MigrateContainer = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;
  width: 100%;
  height: 100%;
  //flex: 1;
  overflow: hidden;
`;

export default function Migrate() {
  return (
    <MigrateContainer>
      <img
        src={futurePng}
        alt="future"
        style={{
          width: '35vw',
          maxWidth: '800px',
          position: 'absolute',
          top: '65vh',
          transform: 'translateY(-50%) translateX(50%)',
          right: '20vw',
          zIndex: 0,
          mixBlendMode: 'lighten',
          aspectRatio: '1',
        }}
      />
      <BodyWrapper
        style={{
          padding: 0,
          marginTop: '90px',
          maxWidth: 400,
          width: '100%',
          position: 'relative',
          background: 'transparent',
          borderRadius: '10px',
          border: 'none',
        }}
      >
        <VerticalSteps>
          <VerticalStep top={0}>
            <VerticalStepText>
              Start by selecting of what you want to migrate
            </VerticalStepText>
            <VerticalStepCircle active={true}>1</VerticalStepCircle>
          </VerticalStep>
          <VerticalStep top={0}>
            <VerticalStepText>
              Select token you want to migrate to arbitrum
            </VerticalStepText>
            <VerticalStepCircle active={false}>2</VerticalStepCircle>
          </VerticalStep>
          <VerticalStep top={0}>
            <VerticalStepText>
              After clicking migrate, the process will start
            </VerticalStepText>
            <VerticalStepCircle active={false}>2</VerticalStepCircle>
          </VerticalStep>
        </VerticalSteps>
        <StyledPositionCard>
          <PanelContainer>
            <PanelSection gap={22}>
              <div>
                <PanelTitle>Pick</PanelTitle>
                <PanelDescription>
                  Pick what you want to migrate
                </PanelDescription>
              </div>
              <Switcher options={['TOKENS', 'LIQUIDITY']} />
            </PanelSection>
            <PanelDivider />

            <PanelSection gap={22}>
              <div>
                <PanelTitle>Migrate</PanelTitle>
                <PanelDescription>
                  Migrate your assets to arbitrum chain
                </PanelDescription>
              </div>
              <PanelSelect>
                <PanelSelectToken>
                  <img
                    src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                    alt="Token"
                  />
                  <span>Hermes</span>
                </PanelSelectToken>
              </PanelSelect>
              <PanelLabel>
                Eligible
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  120 056
                  <img
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 12,
                      height: 28,
                      width: 28,
                    }}
                    src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                    alt="Token"
                  />
                </span>
              </PanelLabel>
              <PanelDivider />
              <PanelButton>Migrate</PanelButton>
            </PanelSection>
          </PanelContainer>
        </StyledPositionCard>
      </BodyWrapper>
    </MigrateContainer>
  );
}
