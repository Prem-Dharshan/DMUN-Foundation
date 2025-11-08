import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useExecutiveAuth } from '../context/ExecutiveAuthContext';
import styled from 'styled-components';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #002147 0%, #44b8f3 100%);
  padding: 2rem;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  padding: 3rem;
  max-width: 480px;
  width: 100%;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  img {
    height: 60px;
    margin: 0 auto 1rem;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #002147;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    font-size: 0.95rem;
  }
`;

const Form = styled.form`
  margin-top: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
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

  &:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: #002147;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #003366;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 33, 71, 0.3);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
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

  &.info {
    background: #eff6ff;
    color: #1e40af;
    border: 1px solid #bfdbfe;
  }
`;

const HelpText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #6b7280;
`;

const BackLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 1.5rem;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: #002147;
    text-decoration: underline;
  }
`;

const ExecutiveLogin = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [emailSent, setEmailSent] = useState(false);

  const { signIn } = useExecutiveAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/executives/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    // Validate email format
    if (!email || !email.includes('@')) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    // Validate @dmun.org domain
    if (!email.toLowerCase().endsWith('@dmun.org')) {
      setMessage({
        type: 'error',
        text: 'Access restricted to @dmun.org email addresses only.',
      });
      return;
    }

    setLoading(true);

    try {
      await signIn(email);
      setEmailSent(true);
      setMessage({
        type: 'success',
        text: 'Check your email! We sent you a login link.',
      });
    } catch (error) {
      console.error('Login error:', error);
      setMessage({
        type: 'error',
        text: error.message || 'An error occurred. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Logo>
          <img src="/dmun-white-logo.png" alt="DMUN Foundation" style={{ filter: 'invert(1)' }} />
          <h1>DMUN Executives</h1>
          <p>Secure access for executive team members</p>
        </Logo>

        {message.text && (
          <Alert className={message.type}>
            {message.text}
          </Alert>
        )}

        {!emailSent ? (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="yourname@dmun.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
                autoFocus
              />
              <HelpText>
                Only @dmun.org email addresses are permitted.
              </HelpText>
            </FormGroup>

            <Button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Login Link'}
            </Button>

            <HelpText style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              A secure login link will be sent to your email. No password required.
            </HelpText>
          </Form>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#002147' }}>
              Check Your Email
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              We've sent a login link to <strong>{email}</strong>
            </p>
            <Button
              onClick={() => {
                setEmailSent(false);
                setEmail('');
                setMessage({ type: '', text: '' });
              }}
            >
              Try Different Email
            </Button>
          </div>
        )}

        <BackLink href="/">← Back to Main Site</BackLink>
      </LoginCard>
    </LoginContainer>
  );
};

export default ExecutiveLogin;
