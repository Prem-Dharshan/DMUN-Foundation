import React from 'react';
import styled from 'styled-components';
import { useOrchestration } from '../context/OrchestrationContext';
import SplitText from '../components/SplitText';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh + 70px);
  min-height: calc(100vh + 70px);
  margin-top: -70px;
  background: url('/hero-home.jpeg') center/cover no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  z-index: 1;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 768px) {
    min-height: calc(100vh + 70px);
    height: calc(100vh + 70px);
    padding: 0;
    align-items: center;
    justify-content: center;
    background-position: center center;
    background-size: cover;
    text-align: center;
    h1, h2, h3, h4, h5, h6, p, span, div {
      text-align: center !important;
      word-break: break-word;
    }
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 1200px;
  padding: 2rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  background-color: ${ABBOT_BLUE};
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  font-family: var(--andover-font-sans);
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #3ba3db;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

const Subtitle = styled.p`
  color: white;
  font-size: 1.5rem;
  margin: 1.5rem auto 0;
  max-width: 800px;
  font-family: var(--andover-font-sans);
  font-weight: 400;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-top: 1rem;
  }
`;

export const OrchestrationHero = () => {
  const { getHeroMessage, userRole } = useOrchestration();
  const heroConfig = getHeroMessage();

  // If no custom hero config (default role), return null and let original hero show
  if (!heroConfig || userRole === 'default') {
    return null;
  }

  return (
    <HeroWrapper className="dmun-hero-section orchestrated">
      <HeroContent>
        <SplitText
          text={heroConfig.title}
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words, chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          style={{
            position: 'relative',
            zIndex: 3,
            color: '#FFFFFF',
            fontSize: '5vw',
            fontFamily: 'Benton Sans Bold, var(--andover-font-sans)',
            fontWeight: 700,
            letterSpacing: '2px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            textTransform: 'uppercase',
            lineHeight: 1.2,
          }}
        />
        
        <Subtitle>{heroConfig.subtitle}</Subtitle>
        
        <CTAButton href={heroConfig.ctaLink}>
          {heroConfig.ctaText}
        </CTAButton>
      </HeroContent>
    </HeroWrapper>
  );
};

// Text replacement component
const OrchestratedText = styled.span``;

export const OrchText = ({ children, ...props }) => {
  const { getWording } = useOrchestration();
  
  if (typeof children === 'string') {
    const orchestratedText = getWording(children);
    return <OrchestratedText {...props}>{orchestratedText}</OrchestratedText>;
  }
  
  return <OrchestratedText {...props}>{children}</OrchestratedText>;
};

// Section highlight wrapper
const HighlightedSection = styled.div`
  ${props => props.$isHighlighted && `
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border: 3px solid ${ABBOT_BLUE};
      border-radius: 1.5rem;
      opacity: 0.3;
      pointer-events: none;
      animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.6;
      }
    }
  `}
`;

export const OrchSection = ({ sectionId, children, ...props }) => {
  const { isSectionHighlighted } = useOrchestration();
  const isHighlighted = isSectionHighlighted(sectionId);

  return (
    <HighlightedSection $isHighlighted={isHighlighted} {...props}>
      {children}
    </HighlightedSection>
  );
};

export default OrchestrationHero;
