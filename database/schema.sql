-- DMUN Foundation Executive Portal Database Schema
-- Run this SQL in your Supabase SQL Editor

-- ================================================
-- 1. Create Executives Table
-- ================================================
CREATE TABLE IF NOT EXISTS executives (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('lead', 'colead', 'general')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Add index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_executives_email ON executives(email);
CREATE INDEX IF NOT EXISTS idx_executives_role ON executives(role);

-- ================================================
-- 2. Create Messages Table
-- ================================================
CREATE TABLE IF NOT EXISTS messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('announcement', 'alert', 'task')),
    sender_id UUID NOT NULL REFERENCES executives(id) ON DELETE CASCADE,
    requires_response BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_messages_sender ON messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_created ON messages(created_at DESC);

-- ================================================
-- 3. Create Message Responses Table
-- ================================================
CREATE TABLE IF NOT EXISTS message_responses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    message_id UUID NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES executives(id) ON DELETE CASCADE,
    response TEXT NOT NULL CHECK (response IN ('yes', 'no', 'maybe', 'discussion')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    UNIQUE(message_id, user_id)
);

-- Add indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_responses_message ON message_responses(message_id);
CREATE INDEX IF NOT EXISTS idx_responses_user ON message_responses(user_id);

-- ================================================
-- 4. Enable Row Level Security (RLS)
-- ================================================
ALTER TABLE executives ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE message_responses ENABLE ROW LEVEL SECURITY;

-- ================================================
-- 5. Create RLS Policies
-- ================================================

-- Executives table policies
CREATE POLICY "Allow authenticated users to read all executives"
    ON executives FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow lead to insert executives"
    ON executives FOR INSERT
    TO authenticated
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM executives
            WHERE email = auth.jwt()->>'email'
            AND role = 'lead'
        )
    );

CREATE POLICY "Allow lead to update executives"
    ON executives FOR UPDATE
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM executives
            WHERE email = auth.jwt()->>'email'
            AND role = 'lead'
        )
    );

CREATE POLICY "Allow lead to delete executives"
    ON executives FOR DELETE
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM executives
            WHERE email = auth.jwt()->>'email'
            AND role = 'lead'
        )
    );

-- Messages table policies
CREATE POLICY "Allow all authenticated users to read messages"
    ON messages FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow lead and colead to insert messages"
    ON messages FOR INSERT
    TO authenticated
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM executives
            WHERE email = auth.jwt()->>'email'
            AND role IN ('lead', 'colead')
        )
    );

-- Message responses policies
CREATE POLICY "Allow all authenticated users to read responses"
    ON message_responses FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow users to insert their own responses"
    ON message_responses FOR INSERT
    TO authenticated
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM executives
            WHERE email = auth.jwt()->>'email'
            AND id = user_id
        )
    );

CREATE POLICY "Allow users to update their own responses"
    ON message_responses FOR UPDATE
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM executives
            WHERE email = auth.jwt()->>'email'
            AND id = user_id
        )
    );

-- ================================================
-- 6. Insert Initial Users (Update emails as needed)
-- ================================================
INSERT INTO executives (name, email, title, role) VALUES
    ('Jaewon Choi', 'jaewon.choi@dmun.org', 'Founder & Executive Director', 'lead'),
    ('Harshan M V', 'harshan.mv@dmun.org', 'Deputy Executive Director', 'colead'),
    ('Ishaan Bajaj', 'ishaan.bajaj@dmun.org', 'Programs Associate', 'general')
ON CONFLICT (email) DO NOTHING;

-- ================================================
-- 7. Create Updated At Trigger Function
-- ================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ================================================
-- 8. Add Triggers for Updated At
-- ================================================
CREATE TRIGGER update_executives_updated_at
    BEFORE UPDATE ON executives
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_message_responses_updated_at
    BEFORE UPDATE ON message_responses
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ================================================
-- Database schema setup complete!
-- ================================================
