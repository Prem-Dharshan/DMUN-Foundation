import React from 'react';
import styled, { keyframes } from 'styled-components';
import { X } from 'lucide-react';
import { useOrchestration } from '../context/OrchestrationContext';

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const BannerContainer = styled.div`
  position: fixed;
  top: ${props => props.$position === 'floating' ? '80px' : '70px'};
  left: 0;
  right: 0;
  background-color: ${props => props.$backgroundColor || '#44b8f3'};
  color: ${props => props.$textColor || '#ffffff'};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  z-index: ${props => props.$position === 'floating' ? '999' : '9998'};
  animation: ${slideDown} 0.5s ease-out;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const BannerContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  a {
    color: inherit;
    text-decoration: underline;
    font-weight: 600;
    
    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const DismissButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

const BannersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const RoleBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }
`;

export const OrchestrationBanner = ({ banner }) => {
  const { dismissBanner } = useOrchestration();

  const handleDismiss = (e) => {
    e.preventDefault();
    dismissBanner(banner.id);
  };

  return (
    <BannerContainer
      $position={banner.position}
      $backgroundColor={banner.backgroundColor}
      $textColor={banner.textColor}
    >
      <BannerContent>
        {banner.priority === 'high' && <RoleBadge>New</RoleBadge>}
        {banner.link ? (
          <a href={banner.link} target="_blank" rel="noopener noreferrer">
            {banner.content}
          </a>
        ) : (
          <span>{banner.content}</span>
        )}
      </BannerContent>
      {banner.dismissible && (
        <DismissButton onClick={handleDismiss} aria-label="Dismiss banner">
          <X size={20} />
        </DismissButton>
      )}
    </BannerContainer>
  );
};

export const OrchestrationBanners = () => {
  const { getActiveBanners, orchestrationEnabled } = useOrchestration();

  if (!orchestrationEnabled) return null;

  const banners = getActiveBanners();
  
  if (banners.length === 0) return null;

  // Sort by priority
  const sortedBanners = [...banners].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  // Separate top and floating banners
  const topBanners = sortedBanners.filter(b => b.position === 'top');
  const floatingBanners = sortedBanners.filter(b => b.position === 'floating');

  return (
    <>
      {/* Top banners */}
      {topBanners.length > 0 && (
        <BannersWrapper>
          {topBanners.map(banner => (
            <OrchestrationBanner key={banner.id} banner={banner} />
          ))}
        </BannersWrapper>
      )}
      
      {/* Floating banners */}
      {floatingBanners.map(banner => (
        <OrchestrationBanner key={banner.id} banner={banner} />
      ))}
    </>
  );
};

export default OrchestrationBanners;
