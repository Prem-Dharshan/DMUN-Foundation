# GMUN Documents Draft Assistant

## Overview

The Documents Draft Assistant is an intelligent evaluation tool that helps delegates assess their MUN documents (Position Papers, Op-Eds, Working Papers, Draft Resolutions) based on GMUN Rules of Procedure.

## Supported Documents

### 1. Position Paper

A position paper represents a country's official stance on the issues being discussed in committee.

#### Rules & Evaluation Criteria

**Structure Requirements:**

- **Header Section**: Must include Committee name, Country name, Delegate name(s), and Topic
- **Introduction**: Brief overview of the issue and its relevance (1 paragraph)
- **Country's Position**: Clear statement of the country's stance (1-2 paragraphs)
- **Past Actions**: Historical context and previous UN resolutions (1-2 paragraphs)
- **Proposed Solutions**: Concrete policy recommendations (2-3 paragraphs)
- **Conclusion**: Summary and call to action (1 paragraph)

**Content Requirements:**

- Length: 1-2 pages (typically 500-800 words)
- Citation: Must include at least 3-5 credible sources
- Tone: Formal, diplomatic language
- Perspective: Must represent the assigned country's actual position
- Accuracy: Facts must be verifiable and current

**Formatting Requirements:**

- Font: Times New Roman, 12pt
- Spacing: Double-spaced
- Margins: 1 inch on all sides
- Citations: Footnotes or endnotes in MLA/Chicago format

**Evaluation Rubric (100 points):**

- Structure & Organization (20 points)
- Country Representation & Accuracy (25 points)
- Research & Citations (20 points)
- Proposed Solutions & Feasibility (20 points)
- Writing Quality & Diplomacy (15 points)

---

### 2. Working Paper

A working paper is a preliminary draft that outlines potential solutions before becoming a draft resolution.

#### Rules & Evaluation Criteria

**Structure Requirements:**

- **Header**: Committee, Topic, Sponsors (countries proposing), Signatories (countries supporting)
- **Preamble**: "Perambulatory clauses" explaining the issue and past actions
- **Operative Section**: "Operative clauses" with specific actions and recommendations

**Content Requirements:**

- Collaborative document (requires multiple sponsors)
- Clauses must be numbered
- Each clause addresses one specific point
- Solutions must be realistic and implementable
- Must align with UN Charter and committee scope

**Formatting Requirements:**

- Perambulatory clauses: Underlined, ending with commas
- Operative clauses: Numbered, ending with semicolons (last one ends with period)
- Professional formatting with clear sections

**Evaluation Rubric (100 points):**

- Format Compliance (15 points)
- Clause Structure (20 points)
- Comprehensiveness (20 points)
- Feasibility & Specificity (25 points)
- Collaboration Evidence (10 points)
- Alignment with UN Principles (10 points)

---

### 3. Draft Resolution

A draft resolution is a formal document that becomes a resolution if passed by the committee.

#### Rules & Evaluation Criteria

**Structure Requirements:**

- **Header Block**:
  - Committee name
  - Topic
  - Sponsors (minimum required)
  - Signatories (minimum required)
- **Preamble**: Background and justification using perambulatory clauses
- **Operative Section**: Specific actions using operative clauses

**Content Requirements:**

- Must have minimum number of sponsors (typically 20% of committee)
- Must have minimum number of signatories (typically 10% of committee)
- Clauses must use correct verbs:
  - Perambulatory: Noting, Recalling, Realizing, Observing, Affirming, etc.
  - Operative: Recommends, Urges, Calls upon, Requests, Encourages, etc.
- Sub-clauses for detailed specifications
- Must be within committee's jurisdiction

**Formatting Requirements:**

- Formal UN resolution format
- Perambulatory clauses: Italicized, ending with commas
- Operative clauses: Bold, numbered, ending with semicolons
- Sub-clauses: Lettered, indented
- Single document (no sections or titles within clauses)

**Evaluation Rubric (100 points):**

- Format & Structure (15 points)
- Preamble Quality (20 points)
- Operative Clause Effectiveness (25 points)
- Specificity & Implementation (20 points)
- Diplomatic Language (10 points)
- UN Charter Compliance (10 points)

---

### 4. Op-Ed (Opinion Editorial)

An op-ed is a persuasive article expressing a country's position on a contemporary issue.

#### Rules & Evaluation Criteria

**Structure Requirements:**

- **Headline**: Compelling, clear title
- **Lead**: Strong opening paragraph (hook)
- **Body**: Argument development with evidence (3-5 paragraphs)
- **Counterargument**: Address opposing views (1 paragraph)
- **Conclusion**: Call to action or memorable ending

**Content Requirements:**

- Length: 600-800 words
- Persuasive, not just informative
- Current event or timely issue
- Reflects country's interests and values
- Evidence-based arguments
- Engaging, accessible language (less formal than position paper)

**Formatting Requirements:**

- Newspaper-style article format
- Byline with country/delegate identification
- Clear paragraph breaks
- Optional subheadings

**Evaluation Rubric (100 points):**

- Compelling Opening (15 points)
- Argument Strength & Logic (25 points)
- Evidence & Examples (20 points)
- Persuasiveness (20 points)
- Writing Style & Engagement (15 points)
- Country Perspective (5 points)

---

## Assistant Capabilities

### Document Analysis

The assistant will:

1. **Identify document type** automatically or accept user specification
2. **Extract and analyze structure** (headers, sections, clauses)
3. **Evaluate content** against specific criteria
4. **Check formatting compliance**
5. **Verify citations and sources** (when applicable)
6. **Assess diplomatic language and tone**
7. **Score based on rubric** with detailed breakdown

### Feedback Types

- **Structural feedback**: Missing sections, organization issues
- **Content feedback**: Accuracy, depth, country representation
- **Format feedback**: Compliance with MUN formatting standards
- **Language feedback**: Tone, diplomacy, clarity
- **Citation feedback**: Source quality and documentation
- **Scoring**: Detailed rubric-based scoring with justification

### Supported File Formats

- **PDF** (.pdf): Full text extraction and analysis
- **Word Documents** (.docx): Native format support
- **Plain Text** (.txt): Direct text analysis
- **Rich Text** (.rtf): Formatted text support

---

## Implementation Notes

### Assumptions & Interpretations

Since specific GMUN ROP details may vary, the assistant makes these reasonable assumptions:

1. **Standard MUN Practices**: Following widely-accepted Model UN conventions
2. **UN Resolution Format**: Based on official UN documentation style
3. **Minimum Requirements**: Conservative estimates when specific numbers not provided
4. **Citation Standards**: Academic citation practices (MLA/Chicago)
5. **Word Counts**: Industry-standard ranges for MUN documents
6. **Scoring Weight**: Balanced emphasis on content, format, and diplomacy

### Evaluation Process

1. **Document Upload**: User provides document file
2. **Type Selection**: User specifies or system detects document type
3. **Parsing**: Extract text and structure
4. **Analysis**: Apply type-specific evaluation criteria
5. **Scoring**: Calculate rubric-based score
6. **Feedback Generation**: Produce detailed, constructive feedback
7. **Report Delivery**: Present score and recommendations

### Quality Assurance

The assistant ensures:

- **Objectivity**: Criteria-based evaluation
- **Constructiveness**: Actionable feedback
- **Accuracy**: Fact-checking where possible
- **Consistency**: Standardized rubric application
- **Comprehensiveness**: All document aspects covered

---

## Usage Instructions

### For Delegates

1. **Prepare Your Document**: Complete your draft (Position Paper, Working Paper, etc.)
2. **Access the Assistant**: Navigate to the Draft Assistant page
3. **Upload Document**: Select your file (PDF, DOCX, TXT, RTF)
4. **Specify Type**: Choose your document type
5. **Provide Context**:
   - Committee name
   - Country assigned
   - Topic (if applicable)
6. **Submit for Evaluation**: Let the assistant analyze your work
7. **Review Feedback**: Read detailed comments and scoring
8. **Revise**: Implement suggestions and resubmit if needed

### Best Practices

- **Submit early**: Allow time for revisions
- **Read guidelines**: Understand criteria before writing
- **Cite sources**: Always document your research
- **Proofread**: Check spelling and grammar before submission
- **Stay in character**: Represent your country authentically
- **Be specific**: Concrete solutions score better than vague statements
- **Follow format**: Formatting matters in MUN documents

---

## Technical Details

### Evaluation Engine

- Natural Language Processing for content analysis
- Pattern matching for structure validation
- Citation extraction and verification
- Readability and tone analysis
- Comparative analysis with exemplar documents

### Privacy & Security

- Documents processed securely
- No permanent storage of submissions
- Confidential evaluation process
- No sharing of delegate work

---

## Future Enhancements

- **AI-Powered Suggestions**: Real-time writing assistance
- **Plagiarism Detection**: Ensure originality
- **Country Profile Integration**: Auto-verify country positions
- **Collaborative Review**: Peer feedback system
- **Resolution Compatibility Check**: Cross-reference with existing resolutions
- **Translation Support**: Multi-language document evaluation

---

## Support & Resources

- GMUN ROP Documents: Available in `/public/rop/`
- Example Documents: Coming soon
- Writing Guides: See EXECUTIVE_LEADERSHIP_GUIDE.md
- Technical Support: Contact development team

---

## Version History

- **v1.0.0** (2025-11-08): Initial implementation
  - Position Paper evaluation
  - Working Paper evaluation
  - Draft Resolution evaluation
  - Op-Ed evaluation
  - Multi-format file support
  - Comprehensive rubric scoring

---

_This assistant is designed to help delegates improve their MUN document quality and learn diplomatic writing skills. Use it as a learning tool, not a replacement for genuine research and critical thinking._
