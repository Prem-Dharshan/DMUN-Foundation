import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet"

const DARK_BLUE = '#002147';
const ABBOT_BLUE = '#44b8f3';

const StyledSheetContent = styled(SheetContent)`
  background: var(--andover-blue) !important;
  border-left: 1px solid rgba(0, 33, 71, 0.1) !important;
  max-width: 500px !important;
  width: 90vw !important;
  padding: 0 !important;

  @media (max-width: 640px) {
    max-width: 100vw !important;
  }

  /* Style the close button X icon */
  button[class*="absolute"] {
    svg {
      color: ${DARK_BLUE};
      stroke: ${DARK_BLUE};
    }
  }
`;

const MenuContent = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 640px) {
    padding: 1.5rem 1.5rem;
    gap: 1.5rem;
  }
`;

const HeaderSection = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 33, 71, 0.1);
`;

const InstitutionName = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: ${DARK_BLUE};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const ActionButton = styled(Link)`
  border: 1px solid ${DARK_BLUE};
  background: none;
  color: ${DARK_BLUE};
  border-radius: 20px;
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  font-family: var(--andover-font-sans);
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  text-align: center;
  display: block;

  &:hover {
    background: ${DARK_BLUE};
    color: var(--andover-blue);
  }
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SectionTitle = styled.h3`
  font-family: var(--andover-font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  color: ${DARK_BLUE};
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.7;
`;

const MenuLink = styled(Link)`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  color: ${DARK_BLUE};
  text-decoration: none;
  font-weight: 400;
  padding: 0.4rem 0;
  line-height: 1.4;
  transition: all 0.2s ease;

  &:hover { 
    color: ${DARK_BLUE};
    text-decoration: underline;
    padding-left: 0.5rem;
  }

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const BottomSection = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 33, 71, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactInfo = styled.div`
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
  font-size: 0.75rem;
  line-height: 1.6;

  div {
    margin-bottom: 0.25rem;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 0.5rem;
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid ${DARK_BLUE};
  border-radius: 50%;
  color: ${DARK_BLUE};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background: ${DARK_BLUE};
    color: var(--andover-blue);
  }

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    filter: brightness(0) saturate(100%);
  }

  &:hover img {
    filter: brightness(0) saturate(100%) invert(1);
  }
`;

const MenuDrawer = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleLinkClick = (to) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    navigate(to);
    onClose();
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <StyledSheetContent>
        <MenuContent>
          <HeaderSection>
            <InstitutionName>DMUN Foundation</InstitutionName>
          </HeaderSection>

          <ActionButtons>
            <ActionButton to="/volunteer" onClick={onClose}>Volunteer</ActionButton>
            <ActionButton to="/donate" onClick={onClose}>Donate</ActionButton>
            <ActionButton to="/partner" onClick={onClose}>Partner</ActionButton>
            <ActionButton to="/about" onClick={onClose}>Contact</ActionButton>
          </ActionButtons>

          <MenuSection>
            <SectionTitle>Navigate</SectionTitle>
            <MenuLink to="/" onClick={() => handleLinkClick("/")}>Home</MenuLink>
            <MenuLink to="/about" onClick={() => handleLinkClick("/about")}>About</MenuLink>
            <MenuLink to="/programs" onClick={() => handleLinkClick("/programs")}>Programs</MenuLink>
            <MenuLink to="/advocacy" onClick={() => handleLinkClick("/advocacy")}>Advocacy</MenuLink>
            <MenuLink to="/research" onClick={() => handleLinkClick("/research")}>Research</MenuLink>
          </MenuSection>

          <MenuSection>
            <SectionTitle>Get Involved</SectionTitle>
            <MenuLink to="/integrity" onClick={() => handleLinkClick("/integrity")}>Integrity</MenuLink>
            <MenuLink to="/take-action" onClick={() => handleLinkClick("/take-action")}>Take Action</MenuLink>
            <MenuLink to="/newsroom" onClick={() => handleLinkClick("/newsroom")}>Newsroom</MenuLink>
            <MenuLink to="/membership" onClick={() => handleLinkClick("/membership")}>Membership</MenuLink>
            <MenuLink to="/executive-leadership" onClick={() => handleLinkClick("/executive-leadership")}>Leadership</MenuLink>
          </MenuSection>

          <MenuSection>
            <SectionTitle>Resources</SectionTitle>
            <MenuLink to="/donor-relations" onClick={() => handleLinkClick("/donor-relations")}>Donor Relations</MenuLink>
            <MenuLink to="/mandate" onClick={() => handleLinkClick("/mandate")}>Our Mission</MenuLink>
            <MenuLink to="/publications" onClick={() => handleLinkClick("/publications")}>Publications</MenuLink>
            <MenuLink to="/draft-assistant" onClick={() => handleLinkClick("/draft-assistant")}>Draft Assistant</MenuLink>
          </MenuSection>

          <BottomSection>
            <ContactInfo>
              <div><strong>DMUN Foundation</strong></div>
              <div>Seoul, Korea | Boston, USA</div>
              <div>enquiries@dmun.org</div>
              <div>+1 (339) 927 8826</div>
            </ContactInfo>
            <Socials>
              <SocialIcon href="https://www.instagram.com/discovermun/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram-icon.png" alt="Instagram" />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/dmun-foundation/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin-icon.png" alt="LinkedIn" />
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@dmunfoundation" target="_blank" rel="noopener noreferrer">
                <img src="/Youtube-icon.png" alt="YouTube" />
              </SocialIcon>
            </Socials>
          </BottomSection>
        </MenuContent>
      </StyledSheetContent>
    </Sheet>
  );
};

export default MenuDrawer;
