import styled from 'styled-components';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const DARK_BLUE = '#002147';

const FooterBar = styled.footer`
  background: var(--andover-blue);
  color: ${DARK_BLUE};
  padding: 0;
  font-family: var(--andover-font-serif);
  width: 100%;
`;

// Styled component for the main content container to control width and padding
const FooterContentWrapper = styled.div`
  width: 100%;
  padding-bottom: 3rem; /* Reduced bottom padding */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center children horizontally */

  @media (max-width: 768px) {
    padding-bottom: 2rem; /* Reduced mobile bottom padding */
  }
`;

// Styled component for the Take Action heading
const TakeActionHeading = styled.h3`
  font-style: italic;
  font-family: var(--andover-font-serif);
  text-align: center; /* Center-aligned within the content wrapper */
  margin: 0; /* Remove margin, controlled by parent */
  color: ${DARK_BLUE}; /* Ensure correct color */
  font-size: 2.2rem; /* Increased size significantly */
  padding-top: 0; /* Remove top padding, handled by parent */
  white-space: nowrap; /* Prevent wrapping */

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Adjusted mobile size */
  }
`;

const Actions = styled.div`
  margin: 0;
  display: flex;
  justify-content: center; /* Center the buttons */
  gap: 2.5rem; /* Increased gap between buttons */
  width: 100%; /* Take full width */

  @media (max-width: 768px) {
    gap: 1rem; /* Smaller gap on mobile */
    flex-wrap: wrap; /* Allow buttons to wrap on mobile */
  }
`;

const ActionBtn = styled.a`
  border: 2px solid ${DARK_BLUE};
  border-radius: 50px;
  padding: 1rem 3rem; /* Increased padding for bigger buttons */
  color: ${DARK_BLUE};
  font-size: 1.3rem; /* Increased font size for buttons */
  font-family: var(--andover-font-serif);
  margin: 0; /* Remove individual margins, rely on parent gap */
  background: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  text-decoration: none; /* Ensure no underline */
  white-space: nowrap; /* Prevent buttons from breaking text */

  &:hover {
    background: ${DARK_BLUE};
    color: var(--andover-blue);
  }
`;

// Styled component for the dotted divider line
const Divider = styled.div`
  border-bottom: 1px dotted var(--andover-accent);
  width: 100%;
  margin: 2rem auto; /* Reduced margin for tighter spacing */
`;

// We'll move MainFooterGrid to the end of the file, after all other styled components are defined

// Styled component for the Logo + Branding column
const LogoBranding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the left */

  @media (max-width: 768px) {
    align-items: center; /* Center on mobile */
  }
`;

// Styled component for the Logo (now an actual image)
const FooterLogo = styled.img`
  width: 100px; /* Adjusted size based on image */
  height: 100px; /* Adjusted size based on image */
  margin: 0 0 1rem 0; /* Default margin below logo */
  object-fit: contain; /* Ensure logo is contained */

  @media (max-width: 768px) {
    margin: 0 auto 1rem auto; /* Center on mobile */
  }
`;

// Styled component for the Institution Name
const InstitutionName = styled.div`
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
  margin-bottom: 0; /* Removed bottom margin */
  text-align: left; /* Left align text */

  div:first-child { /* Phillips Academy */
    font-size: 1rem; /* Keep size */
    font-weight: normal; /* Keep normal weight */
    text-transform: none; /* Keep case */
    margin-bottom: 0.2rem; /* Space below first line */
  }

  div:last-child { /* ANDOVER */
    font-size: 1.8rem; /* Larger size based on image */
    font-weight: bold; /* Bolder font based on image */
    text-transform: uppercase; /* Capitalize based on image */
  }

  @media (max-width: 768px) {
    text-align: center; /* Center on mobile */
  }
`;

// Styled component for the Address + Description column
const AddressDescription = styled.div`
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const AddressBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  transition: background-color 0.2s;
  flex: 1;
  min-width: 250px;
  max-width: 400px;

  &:hover {
    background-color: rgba(0, 33, 71, 0.05);
  }

  @media (max-width: 1200px) {
    width: 100%;
    max-width: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 0;
  }
`;

const AddressIcon = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: ${DARK_BLUE};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const AddressText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
  flex: 1;
  width: 100%;

  h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${DARK_BLUE};
    white-space: nowrap;
  }

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    color: ${DARK_BLUE};
    white-space: nowrap;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${DARK_BLUE};
  font-size: 0.9rem;
  margin-top: 0.25rem;
  white-space: nowrap;
  width: 100%;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ReachOut = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    color: ${DARK_BLUE};
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: left;
  }

  ${AddressBlock} {
    width: 100%;
    max-width: none;
    padding: 0;
    margin: 0 0 0.25rem 0; /* Reduced bottom margin */
    
    &:hover {
      background-color: transparent;
    }
  }

  ${AddressText} {
    align-items: flex-start;
  }

  ${ContactInfo} {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    align-items: center;

    h3 {
      text-align: center;
    }

    ${AddressBlock} {
      align-items: center;
      text-align: center;

      ${AddressText} {
        align-items: center;
      }
    }
  }
`;

const QuickLinks = styled.div`
  margin: 0; /* Remove top margin since we'll add h3 */
  display: flex;
  flex-direction: column; /* Stack links vertically */
  gap: 0.6rem; /* Reduced space between links */
  align-items: flex-start; /* Align links to the left to match other content */
  width: 100%;

  h3 {
    color: ${DARK_BLUE};
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: left;
    white-space: nowrap; /* Prevent title from breaking into two lines */
  }

  @media (max-width: 768px) {
    align-items: center; /* Center links on mobile */
    
    h3 {
      text-align: center;
    }
  }
`;

const QuickLink = styled.a`
  color: ${DARK_BLUE};
  font-size: 1rem;
  font-family: var(--andover-font-sans);
  text-decoration: none; /* Ensure no underline by default */
  white-space: nowrap; /* Prevent text wrapping */
  display: block; /* Ensure full width for hover effect */

  &:hover {
    text-decoration: underline;
  }
`;

// Styled component for the social icons container (part of the right column)
const Socials = styled.div`
  margin-top: 0.25rem; /* Further reduced margin for tighter spacing */
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const SocialIcon = styled.span`
  width: 48px;
  height: 48px;
  display: inline-block;
  background: transparent;
  border-radius: 50%;
  color: var(--andover-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;

const ActionRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem; /* Space between heading and buttons */
  padding: 3rem 5vw 1.5rem; /* Reduced top/bottom padding */
  width: 100%;
  box-sizing: border-box;
  max-width: 1200px; /* Limit the width */
  margin: 0 auto; /* Center in the screen */

  @media (max-width: 768px) {
    gap: 1.5rem; /* Adjusted gap for mobile */
    padding: 2rem 3vw 1rem; /* Reduced mobile padding */
  }
`;

const Footer = () => (
  <FooterBar>
    <FooterContentWrapper> {/* Wrap content for max-width and padding */}
      <ActionRow>
        <TakeActionHeading>Take Action…</TakeActionHeading>
        <Actions>
          <ActionBtn href="https://mymun.com">REGISTER</ActionBtn>
          <ActionBtn href="/volunteer">VOLUNTEER</ActionBtn>
          <ActionBtn href="/donate">GIVE</ActionBtn>
        </Actions>
      </ActionRow>
      <Divider />
      <MainFooterGrid>
        <LogoBranding>
          <FooterLogo src="/dmun-white-logo.png" alt="DMUN Foundation Logo" /> {/* Updated to Header Logo.png */}
          <InstitutionName>
           <div>DMUN Foundation</div> {/* Capitalized based on image */}
          </InstitutionName>
        </LogoBranding>

        <AddressDescription>
          <AddressBlock>
            <AddressIcon>
              <MapPinIcon />
            </AddressIcon>
            <AddressText>
              <h4>The Secretariat</h4>
              <p>4th Floor, 12 Gangnamdaero 156-gil<br />Seoul, Republic of Korea 06035</p>
              <ContactInfo>
                <PhoneIcon />
                +82 10 5696 8302
              </ContactInfo>
            </AddressText>
          </AddressBlock>

          <AddressBlock>
            <AddressIcon>
              <MapPinIcon />
            </AddressIcon>
            <AddressText>
              <h4>The Liaison Office</h4>
              <p>Unit 1814, 50 Causeway St.<br />Boston, MA, USA 02114</p>
              <ContactInfo>
                <PhoneIcon />
                +1 (339) 927 8826
              </ContactInfo>
            </AddressText>
          </AddressBlock>
        </AddressDescription>

        <ContactAndLinksContainer>
          <ReachOut>
            <h3>Reach Out to Us</h3>
            <AddressBlock>
              <AddressIcon>
                <EnvelopeIcon />
              </AddressIcon>
              <AddressText>
                <h4>Email Us</h4>
                <ContactInfo>
                  enquiries@dmun.org
                </ContactInfo>
              </AddressText>
            </AddressBlock>

            <Socials> {/* Social icons */}
              <SocialIcon as="a" href="https://www.instagram.com/discovermun/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram-icon.png" alt="Instagram" />
              </SocialIcon>
              <SocialIcon as="a" href="https://www.linkedin.com/company/dmun-foundation/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin-icon.png" alt="LinkedIn" />
              </SocialIcon>
              <SocialIcon as="a" href="https://www.youtube.com/@dmunfoundation" target="_blank" rel="noopener noreferrer">
                <img src="/Youtube-icon.png" alt="Youtube" />
              </SocialIcon>
            </Socials>
          </ReachOut>
          
          <QuickLinks>
            <h3>Quick Links</h3>
            <QuickLink href="/donor-relations">Donor Relations</QuickLink>
            <QuickLink href="/integrity">Integrity</QuickLink>
            <QuickLink href="/newsroom">News</QuickLink>
            <QuickLink href="/Membership">Membership</QuickLink>
            <QuickLink href="https://docs.google.com/document/d/1QTCCh-nEZfUvIFdN0KzOfbDRWMk05jKL6IOv9okRB5c/edit?usp=sharing">Privacy Policy</QuickLink>
            <QuickLink href="https://docs.google.com/document/d/1QTCCh-nEZfUvIFdN0KzOfbDRWMk05jKL6IOv9okRB5c/edit?usp=sharing">Terms of Use</QuickLink>
          </QuickLinks>
        </ContactAndLinksContainer>
      </MainFooterGrid>
    </FooterContentWrapper>
    <CopyrightText>© 2025 DMUN Foundation, All Rights Reserved.</CopyrightText>
  </FooterBar>
);

// Add new styled component for copyright text
const CopyrightText = styled.div`
  text-align: center;
  color: var(--andover-accent);
  font-family: var(--andover-font-sans);
  font-size: 0.9rem;
  padding: 1.5rem 0;
  width: 100%;
  background: var(--andover-blue); /* Match footer background */
`;

// Styled component for the main 3-column grid section
const ContactAndLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem; /* Matched with MainFooterGrid gap */
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MainFooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1.5fr; /* Logo, Addresses, Contact+Links */
  gap: 4rem; /* Increased gap between main columns */
  padding: 0 5vw; /* Added horizontal padding */
  align-items: start; /* Align grid items to the top */
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1.5fr; /* Stack to 2 columns with better proportion */
    gap: 3.5rem; /* Increased gap for better separation */

    ${LogoBranding} {
      grid-column: 1;
      grid-row: 1;
    }

    ${AddressDescription} {
      grid-column: 2;
      grid-row: 1;
    }

    ${ReachOut}, ${QuickLinks} {
      grid-column: span 1;
      grid-row: 2;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns on mobile */
    gap: 2rem;
    text-align: center; /* Center content on mobile */
    padding: 0 3vw; /* Adjusted mobile padding */

    ${LogoBranding}, ${AddressDescription}, ${ReachOut}, ${QuickLinks} {
      grid-column: 1;
    }

    ${LogoBranding} { grid-row: 1; }
    ${AddressDescription} { grid-row: 2; }
    ${ReachOut} { grid-row: 3; }
    ${QuickLinks} { grid-row: 4; }
  }
`;

export default Footer;