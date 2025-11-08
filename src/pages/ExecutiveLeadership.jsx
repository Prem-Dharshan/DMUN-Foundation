import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const LIGHT_BLUE = '#97e1e6';
const PAGE_BACKGROUND_COLOR = '#E7F1FA';

// Hero Section
const HeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 400px;
  background: linear-gradient(135deg, ${DARK_BLUE} 0%, ${ABBOT_BLUE} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const HeroText = styled.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4.5vw;
  font-family: var(--andover-font-serif);
  font-weight: 700;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
  text-align: center;
  padding: 0 3vw;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0 1rem;
  }
`;

const HeroSubtitle = styled.p`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 1.5rem;
  font-family: var(--andover-font-sans);
  font-weight: 400;
  text-align: center;
  margin-top: 1rem;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

// Main Content
const ContentWrapper = styled.div`
  border-left: 17px solid ${ABBOT_BLUE};
  border-right: 17px solid ${ABBOT_BLUE};
  background-color: ${PAGE_BACKGROUND_COLOR};
  padding: 4rem 0;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3vw;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  text-align: center;
  margin: 3rem 0 1rem 0;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 2rem 0 0.8rem 0;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  font-family: var(--andover-font-sans);
  color: #555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

// Card Animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Executive Cards Grid
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// Professional Card with Hover Effects
const ExecutiveCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 33, 71, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.$delay || '0s'};
  animation-fill-mode: both;
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 33, 71, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, ${ABBOT_BLUE}, ${DARK_BLUE});
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background: linear-gradient(135deg, ${DARK_BLUE} 0%, ${ABBOT_BLUE} 100%);
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  
  ${ExecutiveCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardName = styled.h3`
  font-size: 1.6rem;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  margin: 0 0 0.5rem 0;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CardRole = styled.div`
  font-size: 1.1rem;
  font-family: var(--andover-font-sans);
  color: ${ABBOT_BLUE};
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  font-family: var(--andover-font-sans);
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--andover-font-sans);
  font-size: 0.95rem;
  font-weight: 600;
  color: ${DARK_BLUE};
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border: 2px solid ${DARK_BLUE};
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${DARK_BLUE};
    color: white;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ExecutiveLeadership = () => {
  // Staff data - you can move this to a separate JSON file later
  const executiveStaff = [
    {
      id: 1,
      name: "Jaewon Choi",
      role: "Executive Director",
      description: "Jaewon leads the organization with strategic vision, guiding its mission and overseeing all key initiatives. With extensive experience in youth advocacy and international relations, he ensures the Foundation achieves its goals of empowering young leaders worldwide.",
      image: "/jaewon-picture.jpg",
      linkedin: "https://www.linkedin.com/in/jaewonchoidmun/",
      email: "jaewon@dmunfoundation.org"
    },
    {
      id: 2,
      name: "Atharv Singh",
      role: "Deputy Executive Director",
      description: "Atharv supports overall operations, drives program development, and strengthens community engagement. His innovative approach to youth leadership and commitment to inclusive education has helped expand the Foundation's reach across multiple continents.",
      image: "/atharv-singh-professional.jpeg",
      linkedin: "https://www.linkedin.com/in/atharv-singh-b21159369/",
      email: "atharv@dmunfoundation.org"
    },
    {
      id: 3,
      name: "Lily Yang Liu",
      role: "Deputy Executive Director",
      description: "Lily oversees internal operations and strategic program coordination, ensuring seamless execution of the Foundation's initiatives. Her expertise in organizational management and passion for youth empowerment drive operational excellence across all programs.",
      image: "/lily-picture.png",
      linkedin: "https://www.linkedin.com/in/lily-yangliu-9b7471262/",
      email: "lily@dmunfoundation.org"
    }
  ];

  return (
    <>
      <HeroWrapper>
        <div style={{ textAlign: 'center' }}>
          <HeroText>Executive Leadership</HeroText>
          <HeroSubtitle>Meet the visionaries driving our mission forward</HeroSubtitle>
        </div>
      </HeroWrapper>

      <ContentWrapper>
        <Container>
          <SectionTitle>Our Leadership Team</SectionTitle>
          <SectionSubtitle>
            Our executive team brings together diverse expertise in international relations, youth advocacy, 
            and organizational leadership. Together, they guide the DMUN Foundation in empowering young leaders 
            around the globe to become active global citizens and future changemakers.
          </SectionSubtitle>

          <CardsGrid>
            {executiveStaff.map((exec, index) => (
              <ExecutiveCard key={exec.id} $delay={`${index * 0.1}s`}>
                <CardImageWrapper>
                  <CardImage 
                    src={exec.image} 
                    alt={exec.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x320/002147/ffffff?text=' + exec.name.split(' ').map(n => n[0]).join('');
                    }}
                  />
                </CardImageWrapper>
                <CardContent>
                  <CardName>{exec.name}</CardName>
                  <CardRole>{exec.role}</CardRole>
                  <CardDescription>{exec.description}</CardDescription>
                  <CardLinks>
                    {exec.linkedin && (
                      <CardLink href={exec.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                        LinkedIn
                      </CardLink>
                    )}
                    {exec.email && (
                      <CardLink href={`mailto:${exec.email}`}>
                        <EmailIcon />
                        Email
                      </CardLink>
                    )}
                  </CardLinks>
                </CardContent>
              </ExecutiveCard>
            ))}
          </CardsGrid>

          <SectionTitle>Our Commitment</SectionTitle>
          <SectionSubtitle>
            The DMUN Foundation's leadership is committed to transparency, excellence, and youth empowerment. 
            We believe in creating opportunities for young people to develop leadership skills, engage with 
            global issues, and make meaningful contributions to sustainable development and peace. Our team 
            works tirelessly to ensure every program we offer reflects these values and creates lasting impact.
          </SectionSubtitle>
        </Container>
      </ContentWrapper>
    </>
  );
};

export default ExecutiveLeadership;
