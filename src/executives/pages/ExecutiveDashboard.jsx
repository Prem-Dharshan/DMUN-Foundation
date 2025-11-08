import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExecutiveAuth } from '../context/ExecutiveAuthContext';
import { executivesDb } from '@/lib/supabase';
import styled from 'styled-components';

const DashboardContainer = styled.div`
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
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    height: 40px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const UserDetails = styled.div`
  text-align: right;

  h3 {
    font-weight: 600;
    font-size: 1rem;
  }

  p {
    font-size: 0.85rem;
    opacity: 0.8;
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

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const MainContent = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const TabBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e5e7eb;
`;

const Tab = styled.button`
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 3px solid ${props => props.$active ? '#002147' : 'transparent'};
  color: ${props => props.$active ? '#002147' : '#6b7280'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #002147;
  }
`;

const MessagesSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const MessageCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: ${props => props.$type === 'alert' ? '#fef2f2' : 'white'};

  &:last-child {
    margin-bottom: 0;
  }
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
`;

const MessageMeta = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
  }
`;

const Badge = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${props => {
    if (props.$type === 'alert') return '#fee2e2';
    if (props.$type === 'announcement') return '#dbeafe';
    return '#e5e7eb';
  }};
  color: ${props => {
    if (props.$type === 'alert') return '#991b1b';
    if (props.$type === 'announcement') return '#1e40af';
    return '#374151';
  }};
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const MessageBody = styled.div`
  color: #374151;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ResponseButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const ResponseButton = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid ${props => {
    if (props.$selected) return '#002147';
    return '#d1d5db';
  }};
  background: ${props => props.$selected ? '#002147' : 'white'};
  color: ${props => props.$selected ? 'white' : '#374151'};
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #002147;
    background: ${props => props.$selected ? '#002147' : '#f9fafb'};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;

  svg {
    width: 64px;
    height: 64px;
    margin: 0 auto 1rem;
    opacity: 0.5;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

const ExecutiveDashboard = () => {
  const { user, signOut, isLead, isCoLead } = useExecutiveAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('messages');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const data = await executivesDb.getMessages();
      setMessages(data || []);
      
      // Load user's responses
      const userResponses = {};
      for (const msg of data || []) {
        const msgResponses = await executivesDb.getMessageResponses(msg.id);
        const userResponse = msgResponses.find(r => r.user_id === user.id);
        if (userResponse) {
          userResponses[msg.id] = userResponse.response;
        }
      }
      setResponses(userResponses);
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResponse = async (messageId, response) => {
    try {
      await executivesDb.submitResponse({
        message_id: messageId,
        user_id: user.id,
        response,
      });
      setResponses(prev => ({ ...prev, [messageId]: response }));
    } catch (error) {
      console.error('Error submitting response:', error);
      alert('Failed to submit response. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/executives/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <DashboardContainer>
      <Header>
        <HeaderContent>
          <Logo>
            <img src="/dmun-white-logo.png" alt="DMUN Foundation" />
            <h1>Executive Portal</h1>
          </Logo>
          <UserInfo>
            <UserDetails>
              <h3>{user?.name}</h3>
              <p>{user?.title}</p>
            </UserDetails>
            {isLead() && (
              <Button $variant="secondary" onClick={() => navigate('/executives/admin')}>
                Admin Panel
              </Button>
            )}
            {isCoLead() && (
              <Button $variant="secondary" onClick={() => navigate('/executives/messaging')}>
                Send Message
              </Button>
            )}
            <Button onClick={handleLogout}>Logout</Button>
          </UserInfo>
        </HeaderContent>
      </Header>

      <MainContent>
        <TabBar>
          <Tab $active={activeTab === 'messages'} onClick={() => setActiveTab('messages')}>
            Messages & Alerts
          </Tab>
        </TabBar>

        <MessagesSection>
          {loading ? (
            <EmptyState>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4">Loading messages...</p>
            </EmptyState>
          ) : messages.length === 0 ? (
            <EmptyState>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3>No messages yet</h3>
              <p>New messages and alerts will appear here</p>
            </EmptyState>
          ) : (
            messages.map((message) => (
              <MessageCard key={message.id} $type={message.type}>
                <MessageHeader>
                  <MessageMeta>
                    <h3>{message.title}</h3>
                    <p>
                      From: {message.sender?.name} • {formatDate(message.created_at)}
                    </p>
                  </MessageMeta>
                  <Badge $type={message.type}>{message.type}</Badge>
                </MessageHeader>
                <MessageBody>{message.content}</MessageBody>

                {message.requires_response && (
                  <ResponseButtons>
                    <ResponseButton
                      $selected={responses[message.id] === 'yes'}
                      onClick={() => handleResponse(message.id, 'yes')}
                    >
                      ✓ Yes
                    </ResponseButton>
                    <ResponseButton
                      $selected={responses[message.id] === 'no'}
                      onClick={() => handleResponse(message.id, 'no')}
                    >
                      ✗ No
                    </ResponseButton>
                    <ResponseButton
                      $selected={responses[message.id] === 'maybe'}
                      onClick={() => handleResponse(message.id, 'maybe')}
                    >
                      ? Maybe
                    </ResponseButton>
                    <ResponseButton
                      $selected={responses[message.id] === 'discussion'}
                      onClick={() => handleResponse(message.id, 'discussion')}
                    >
                      💬 Discussion Needed
                    </ResponseButton>
                  </ResponseButtons>
                )}
              </MessageCard>
            ))
          )}
        </MessagesSection>
      </MainContent>
    </DashboardContainer>
  );
};

export default ExecutiveDashboard;
