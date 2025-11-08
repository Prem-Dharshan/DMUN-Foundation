import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExecutiveAuth } from '../context/ExecutiveAuthContext';
import { executivesDb } from '@/lib/supabase';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

const Header = styled.header`
  background: #002147;
  color: white;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.25rem;
  background: ${props => props.$variant === 'secondary' ? '#44b8f3' : 'white'};
  color: ${props => props.$variant === 'secondary' ? 'white' : '#002147'};
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #6b7280;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #374151;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #44b8f3;
    box-shadow: 0 0 0 3px rgba(68, 184, 243, 0.1);
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #44b8f3;
    box-shadow: 0 0 0 3px rgba(68, 184, 243, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #44b8f3;
    box-shadow: 0 0 0 3px rgba(68, 184, 243, 0.1);
  }
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const Alert = styled.div`
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;

  &.error {
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #fecaca;
  }

  &.success {
    background: #f0fdf4;
    color: #166534;
    border: 1px solid #bbf7d0;
  }
`;

const CoLeadMessaging = () => {
  const { user, isCoLead } = useExecutiveAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [messageForm, setMessageForm] = useState({
    title: '',
    content: '',
    type: 'announcement',
    requires_response: false,
  });

  React.useEffect(() => {
    if (!isCoLead()) {
      navigate('/executives/dashboard');
    }
  }, [isCoLead, navigate]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!messageForm.title || !messageForm.content) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }

    setLoading(true);
    try {
      await executivesDb.createMessage({
        ...messageForm,
        sender_id: user.id,
      });
      setMessage({ type: 'success', text: 'Message sent successfully!' });
      setMessageForm({
        title: '',
        content: '',
        type: 'announcement',
        requires_response: false,
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setMessage({ type: 'error', text: 'Failed to send message' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo>
            <h1>Send Message</h1>
          </Logo>
          <Button onClick={() => navigate('/executives/dashboard')}>
            ← Back to Dashboard
          </Button>
        </HeaderContent>
      </Header>

      <MainContent>
        {message.text && (
          <Alert className={message.type}>
            {message.text}
          </Alert>
        )}

        <Section>
          <SectionTitle>Send Message to Team</SectionTitle>
          <Description>
            As Co-Lead, you can send messages and alerts to all executive team members.
          </Description>
          
          <Form onSubmit={handleSendMessage}>
            <FormGroup>
              <Label htmlFor="messageTitle">Message Title *</Label>
              <Input
                id="messageTitle"
                type="text"
                value={messageForm.title}
                onChange={(e) => setMessageForm({ ...messageForm, title: e.target.value })}
                required
                placeholder="e.g., Upcoming Team Meeting"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="messageType">Message Type *</Label>
              <Select
                id="messageType"
                value={messageForm.type}
                onChange={(e) => setMessageForm({ ...messageForm, type: e.target.value })}
              >
                <option value="announcement">Announcement</option>
                <option value="alert">Alert</option>
                <option value="task">Task Assignment</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="messageContent">Message Content *</Label>
              <TextArea
                id="messageContent"
                value={messageForm.content}
                onChange={(e) => setMessageForm({ ...messageForm, content: e.target.value })}
                required
                placeholder="Enter your message here..."
              />
            </FormGroup>

            <FormGroup>
              <Label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Checkbox
                  type="checkbox"
                  checked={messageForm.requires_response}
                  onChange={(e) => setMessageForm({ ...messageForm, requires_response: e.target.checked })}
                />
                Require response (Yes/No/Maybe/Discussion)
              </Label>
            </FormGroup>

            <Button type="submit" disabled={loading} $variant="secondary">
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </Form>
        </Section>
      </MainContent>
    </Container>
  );
};

export default CoLeadMessaging;
