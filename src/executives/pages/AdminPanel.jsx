import React, { useState, useEffect } from 'react';
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

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const Button = styled.button`
  padding: ${props => props.$small ? '0.4rem 1rem' : '0.5rem 1.25rem'};
  background: ${props => {
    if (props.$variant === 'danger') return '#dc2626';
    if (props.$variant === 'secondary') return '#44b8f3';
    return 'white';
  }};
  color: ${props => (props.$variant === 'danger' || props.$variant === 'secondary') ? 'white' : '#002147'};
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: ${props => props.$small ? '0.875rem' : '1rem'};
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

const Section = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  background: #f9fafb;
  color: #374151;
  font-weight: 600;
  font-size: 0.875rem;
  border-bottom: 2px solid #e5e7eb;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
`;

const Badge = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${props => {
    if (props.$role === 'lead') return '#dbeafe';
    if (props.$role === 'colead') return '#fef3c7';
    return '#e5e7eb';
  }};
  color: ${props => {
    if (props.$role === 'lead') return '#1e40af';
    if (props.$role === 'colead') return '#92400e';
    return '#374151';
  }};
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
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

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const AdminPanel = () => {
  const { user, isLead } = useExecutiveAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // User form state
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    title: '',
    role: 'general',
  });

  // Message form state
  const [messageForm, setMessageForm] = useState({
    title: '',
    content: '',
    type: 'announcement',
    requires_response: false,
  });

  useEffect(() => {
    if (!isLead()) {
      navigate('/executives/dashboard');
      return;
    }
    loadUsers();
  }, [isLead, navigate]);

  const loadUsers = async () => {
    try {
      const data = await executivesDb.getUsers();
      setUsers(data || []);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    // Validate email domain
    if (!userForm.email.toLowerCase().endsWith('@dmun.org')) {
      setMessage({ type: 'error', text: 'Email must be from @dmun.org domain' });
      return;
    }

    // Check if email already exists
    const existingUser = users.find(u => u.email.toLowerCase() === userForm.email.toLowerCase());
    if (existingUser) {
      setMessage({ type: 'error', text: 'User with this email already exists' });
      return;
    }

    setLoading(true);
    try {
      await executivesDb.createUser(userForm);
      setMessage({ type: 'success', text: 'User added successfully!' });
      setUserForm({ name: '', email: '', title: '', role: 'general' });
      loadUsers();
    } catch (error) {
      console.error('Error adding user:', error);
      setMessage({ type: 'error', text: error.message || 'Failed to add user' });
    } finally {
      setLoading(false);
    }
  };

  const handleReassignCoLead = async (userId) => {
    if (!confirm('Are you sure you want to reassign the Co-Lead position to this user?')) {
      return;
    }

    setLoading(true);
    try {
      // First, demote current co-lead to general
      const currentCoLead = users.find(u => u.role === 'colead');
      if (currentCoLead) {
        await executivesDb.updateUser(currentCoLead.id, { role: 'general' });
      }

      // Then promote new user to co-lead
      await executivesDb.updateUser(userId, { role: 'colead' });
      
      setMessage({ type: 'success', text: 'Co-Lead position reassigned successfully!' });
      loadUsers();
    } catch (error) {
      console.error('Error reassigning Co-Lead:', error);
      setMessage({ type: 'error', text: 'Failed to reassign Co-Lead position' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!confirm('Are you sure you want to remove this user? This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    try {
      await executivesDb.deleteUser(userId);
      setMessage({ type: 'success', text: 'User removed successfully' });
      loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      setMessage({ type: 'error', text: 'Failed to remove user' });
    } finally {
      setLoading(false);
    }
  };

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
            <h1>Admin Panel</h1>
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

        <TabBar>
          <Tab $active={activeTab === 'users'} onClick={() => setActiveTab('users')}>
            Manage Users
          </Tab>
          <Tab $active={activeTab === 'messages'} onClick={() => setActiveTab('messages')}>
            Send Message
          </Tab>
        </TabBar>

        {activeTab === 'users' && (
          <>
            <Section>
              <SectionTitle>Add New User</SectionTitle>
              <Form onSubmit={handleAddUser}>
                <FormGroup>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={userForm.name}
                    onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                    required
                    placeholder="e.g., John Doe"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={userForm.email}
                    onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                    required
                    placeholder="john.doe@dmun.org"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="title">Job Title *</Label>
                  <Input
                    id="title"
                    type="text"
                    value={userForm.title}
                    onChange={(e) => setUserForm({ ...userForm, title: e.target.value })}
                    required
                    placeholder="e.g., Programs Associate"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="role">Role *</Label>
                  <Select
                    id="role"
                    value={userForm.role}
                    onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                  >
                    <option value="general">General User</option>
                    <option value="colead">Co-Lead</option>
                  </Select>
                </FormGroup>

                <Button type="submit" disabled={loading}>
                  {loading ? 'Adding User...' : 'Add User'}
                </Button>
              </Form>
            </Section>

            <Section>
              <SectionTitle>All Users ({users.length})</SectionTitle>
              <Table>
                <thead>
                  <tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Title</Th>
                    <Th>Role</Th>
                    <Th>Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id}>
                      <Td>{u.name}</Td>
                      <Td>{u.email}</Td>
                      <Td>{u.title}</Td>
                      <Td>
                        <Badge $role={u.role}>{u.role}</Badge>
                      </Td>
                      <Td>
                        <ButtonGroup>
                          {u.role !== 'lead' && u.role !== 'colead' && (
                            <Button
                              $small
                              $variant="secondary"
                              onClick={() => handleReassignCoLead(u.id)}
                              disabled={loading}
                            >
                              Make Co-Lead
                            </Button>
                          )}
                          {u.role === 'colead' && (
                            <Button
                              $small
                              onClick={() => handleReassignCoLead(u.id)}
                              disabled={loading}
                            >
                              Revoke Co-Lead
                            </Button>
                          )}
                          {u.role !== 'lead' && (
                            <Button
                              $small
                              $variant="danger"
                              onClick={() => handleDeleteUser(u.id)}
                              disabled={loading}
                            >
                              Remove
                            </Button>
                          )}
                        </ButtonGroup>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Section>
          </>
        )}

        {activeTab === 'messages' && (
          <Section>
            <SectionTitle>Send Message to Team</SectionTitle>
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

              <Button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </Section>
        )}
      </MainContent>
    </Container>
  );
};

export default AdminPanel;
