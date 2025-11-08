import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Settings, Save, RefreshCw, Eye, EyeOff, AlertCircle } from 'lucide-react';
import orchestrationRules from '../../data/orchestration-rules.json';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${DARK_BLUE};
    margin: 0;
    font-family: var(--andover-font-serif);
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${DARK_BLUE};
  margin: 0 0 1rem 0;
  font-family: var(--andover-font-serif);
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
    
    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
  
  input:checked + span {
    background-color: ${ABBOT_BLUE};
  }
  
  input:checked + span:before {
    transform: translateX(26px);
  }
`;

const RoleCard = styled.div`
  background: white;
  border: 2px solid ${props => props.$isEnabled ? ABBOT_BLUE : '#e5e7eb'};
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.2s;
  
  ${props => !props.$isEnabled && `
    opacity: 0.6;
  `}
`;

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${DARK_BLUE};
    margin: 0;
  }
`;

const BannerItem = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  font-family: var(--andover-font-sans);
  
  ${props => props.$variant === 'primary' && `
    background-color: ${ABBOT_BLUE};
    color: white;
    
    &:hover {
      background-color: #3ba3db;
    }
  `}
  
  ${props => props.$variant === 'secondary' && `
    background-color: transparent;
    border: 1px solid #e5e7eb;
    color: #6b7280;
    
    &:hover {
      background-color: #f3f4f6;
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const Alert = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${props => props.$type === 'success' ? '#d1fae5' : '#fee2e2'};
  border: 1px solid ${props => props.$type === 'success' ? '#6ee7b7' : '#fca5a5'};
  color: ${props => props.$type === 'success' ? '#065f46' : '#991b1b'};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoText = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0.5rem 0;
  line-height: 1.5;
`;

export const OrchestrationAdmin = () => {
  const [rules, setRules] = useState(orchestrationRules);
  const [hasChanges, setHasChanges] = useState(false);
  const [alert, setAlert] = useState(null);
  const [enabledRoles, setEnabledRoles] = useState({});

  useEffect(() => {
    // Initialize enabled roles
    const enabled = {};
    Object.keys(rules.roles).forEach(roleId => {
      enabled[roleId] = true; // By default, all roles are enabled
    });
    setEnabledRoles(enabled);
  }, []);

  const showAlert = (message, type = 'success') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 5000);
  };

  const toggleOrchestration = () => {
    setRules({
      ...rules,
      globalSettings: {
        ...rules.globalSettings,
        enableOrchestration: !rules.globalSettings.enableOrchestration
      }
    });
    setHasChanges(true);
  };

  const toggleRole = (roleId) => {
    setEnabledRoles({
      ...enabledRoles,
      [roleId]: !enabledRoles[roleId]
    });
    setHasChanges(true);
  };

  const handleSave = () => {
    // In a real implementation, this would save to the server
    localStorage.setItem('orchestration_rules_override', JSON.stringify(rules));
    localStorage.setItem('orchestration_enabled_roles', JSON.stringify(enabledRoles));
    setHasChanges(false);
    showAlert('Orchestration rules saved successfully!', 'success');
  };

  const handleReset = () => {
    setRules(orchestrationRules);
    localStorage.removeItem('orchestration_rules_override');
    localStorage.removeItem('orchestration_enabled_roles');
    setHasChanges(false);
    showAlert('Rules reset to default', 'success');
  };

  return (
    <Container>
      <Header>
        <Settings size={32} color={ABBOT_BLUE} />
        <h2>Orchestration Management</h2>
      </Header>

      {alert && (
        <Alert $type={alert.type}>
          <AlertCircle size={20} />
          {alert.message}
        </Alert>
      )}

      <Section>
        <SectionTitle>Global Settings</SectionTitle>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <ToggleSwitch>
            <input 
              type="checkbox" 
              checked={rules.globalSettings.enableOrchestration}
              onChange={toggleOrchestration}
            />
            <span></span>
          </ToggleSwitch>
          <span style={{ fontWeight: 600 }}>
            Orchestration {rules.globalSettings.enableOrchestration ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        <InfoText>
          When enabled, the website will dynamically adapt content, banners, and messaging based on user roles. 
          When disabled, all users will see the default website experience.
        </InfoText>
      </Section>

      <Section>
        <SectionTitle>Role Management</SectionTitle>
        <InfoText style={{ marginBottom: '1rem' }}>
          Enable or disable specific roles. Disabled roles will not be shown in the role selector.
        </InfoText>
        
        {Object.entries(rules.roles)
          .filter(([key]) => key !== 'default')
          .map(([roleId, roleData]) => (
            <RoleCard key={roleId} $isEnabled={enabledRoles[roleId]}>
              <RoleHeader>
                <div>
                  <h4>{roleData.name}</h4>
                  <InfoText style={{ margin: '0.25rem 0 0 0' }}>{roleData.description}</InfoText>
                </div>
                <ToggleSwitch>
                  <input 
                    type="checkbox" 
                    checked={enabledRoles[roleId] || false}
                    onChange={() => toggleRole(roleId)}
                  />
                  <span></span>
                </ToggleSwitch>
              </RoleHeader>
              
              {enabledRoles[roleId] && roleData.contentModifications.banners && roleData.contentModifications.banners.length > 0 && (
                <div>
                  <strong style={{ fontSize: '0.875rem', color: DARK_BLUE }}>
                    Active Banners: {roleData.contentModifications.banners.length}
                  </strong>
                  {roleData.contentModifications.banners.map(banner => (
                    <BannerItem key={banner.id}>
                      <span style={{ fontSize: '0.875rem' }}>{banner.content}</span>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.25rem 0.5rem',
                        backgroundColor: banner.priority === 'high' ? '#fca5a5' : '#d1d5db',
                        borderRadius: '0.25rem',
                        fontWeight: 600
                      }}>
                        {banner.priority}
                      </span>
                    </BannerItem>
                  ))}
                </div>
              )}
            </RoleCard>
          ))}
      </Section>

      <Section>
        <SectionTitle>Statistics</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: ABBOT_BLUE }}>
              {Object.keys(rules.roles).length - 1}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total Roles</div>
          </div>
          <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: ABBOT_BLUE }}>
              {Object.values(enabledRoles).filter(Boolean).length}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Active Roles</div>
          </div>
          <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: ABBOT_BLUE }}>
              {Object.values(rules.roles)
                .filter(r => r.contentModifications?.banners)
                .reduce((acc, r) => acc + r.contentModifications.banners.length, 0)}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total Banners</div>
          </div>
        </div>
      </Section>

      <ButtonGroup>
        <Button $variant="primary" onClick={handleSave} disabled={!hasChanges}>
          <Save size={20} />
          Save Changes
        </Button>
        <Button $variant="secondary" onClick={handleReset}>
          <RefreshCw size={20} />
          Reset to Default
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default OrchestrationAdmin;
