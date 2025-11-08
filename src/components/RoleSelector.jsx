import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { X, Users, UserCircle } from 'lucide-react';
import { useOrchestration } from '../context/OrchestrationContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-out;
  padding: 1rem;
`;

const Modal = styled.div`
  background: white;
  border-radius: 1rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${slideUp} 0.4s ease-out;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 85vh;
  }
`;

const ModalHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #002147;
    margin: 0 0 0.5rem 0;
    font-family: var(--andover-font-serif);
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 1rem;
    color: #6b7280;
    margin: 0;
    font-family: var(--andover-font-sans);
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  
  &:hover {
    background-color: #f3f4f6;
    color: #002147;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const RolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RoleCard = styled.button`
  background: white;
  border: 2px solid ${props => props.$isSelected ? '#44b8f3' : '#e5e7eb'};
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  
  &:hover {
    border-color: #44b8f3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  ${props => props.$isSelected && `
    background-color: #f0f9ff;
    box-shadow: 0 4px 6px -1px rgba(68, 184, 243, 0.2);
  `}
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const RoleIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.$isSelected ? '#44b8f3' : '#e5e7eb'};
  color: ${props => props.$isSelected ? 'white' : '#6b7280'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.2s;
`;

const RoleName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #002147;
  margin: 0 0 0.5rem 0;
  font-family: var(--andover-font-serif);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const RoleDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-family: var(--andover-font-sans);
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SelectedBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: #44b8f3;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const ModalFooter = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column-reverse;
  }
`;

const FooterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-family: var(--andover-font-sans);
  cursor: pointer;
  transition: all 0.2s;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SkipButton = styled(FooterButton)`
  background: transparent;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  
  &:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
  }
`;

const ConfirmButton = styled(FooterButton)`
  background-color: #44b8f3;
  border: none;
  color: white;
  
  &:hover {
    background-color: #3ba3db;
  }
  
  &:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }
`;

const roleIcons = {
  delegate: '🎯',
  parent: '👨‍👩‍👧‍👦',
  educator: '📚',
  volunteer: '🤝',
  donor: '💝',
  alumni: '🎓',
  media: '📰'
};

export const RoleSelector = ({ isOpen, onClose }) => {
  const { getAvailableRoles, changeUserRole, userRole } = useOrchestration();
  const [selectedRole, setSelectedRole] = useState(userRole !== 'default' ? userRole : null);

  if (!isOpen) return null;

  const roles = getAvailableRoles();

  const handleConfirm = () => {
    if (selectedRole) {
      changeUserRole(selectedRole);
    }
    onClose();
  };

  const handleSkip = () => {
    changeUserRole('default');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal>
        <ModalHeader>
          <HeaderContent>
            <h2>👋 Personalize Your Experience</h2>
            <p>Help us show you the most relevant content and opportunities</p>
          </HeaderContent>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <RolesGrid>
            {roles.map(role => (
              <RoleCard
                key={role.id}
                $isSelected={selectedRole === role.id}
                onClick={() => setSelectedRole(role.id)}
              >
                {selectedRole === role.id && <SelectedBadge>Selected</SelectedBadge>}
                <RoleIcon $isSelected={selectedRole === role.id}>
                  <span style={{ fontSize: '24px' }}>{roleIcons[role.id] || '👤'}</span>
                </RoleIcon>
                <RoleName>{role.name}</RoleName>
                <RoleDescription>{role.description}</RoleDescription>
              </RoleCard>
            ))}
          </RolesGrid>
        </ModalBody>
        
        <ModalFooter>
          <SkipButton onClick={handleSkip}>
            Skip for now
          </SkipButton>
          <ConfirmButton onClick={handleConfirm} disabled={!selectedRole}>
            Continue
          </ConfirmButton>
        </ModalFooter>
      </Modal>
    </Overlay>
  );
};

// Floating button to open role selector
const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #44b8f3;
  color: white;
  border: none;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 998;
  
  &:hover {
    background-color: #3ba3db;
    transform: scale(1.1);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 48px;
    height: 48px;
  }
`;

export const RoleSelectorButton = () => {
  const { setShowRoleSelector } = useOrchestration();

  return (
    <FloatingButton onClick={() => setShowRoleSelector(true)} aria-label="Change user role">
      <UserCircle size={28} />
    </FloatingButton>
  );
};

export default RoleSelector;
