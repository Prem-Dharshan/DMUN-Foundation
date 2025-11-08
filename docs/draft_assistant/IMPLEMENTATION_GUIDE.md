# GMUN Draft Assistant Implementation Guide

## Overview

This guide will help you set up and use the GMUN Documents Draft Assistant in your application.

## ✅ What's Already Done

### 1. Core Documentation (`/docs/draft_assistant/README.md`)

- Complete evaluation criteria for all 4 document types
- Detailed rubrics with scoring breakdowns
- Assumptions and interpretations clearly documented
- Usage instructions for delegates

### 2. Evaluation Engine (`/src/utils/documentEvaluator.js`)

- **Position Paper Evaluator**: 100-point rubric covering structure, representation, research, solutions, and writing
- **Working Paper Evaluator**: Evaluates format, clauses, comprehensiveness, feasibility, and UN alignment
- **Draft Resolution Evaluator**: Checks format, preamble, operative clauses, specificity, language, and compliance
- **Op-Ed Evaluator**: Assesses opening, argument, evidence, persuasiveness, style, and perspective

### 3. React UI Component (`/src/pages/DraftAssistant.jsx`)

- Modern, user-friendly interface
- File upload with format validation
- Document type selection
- Optional metadata input (country, committee, topic)
- Detailed evaluation results display
- Score visualization with color-coded feedback
- Downloadable evaluation reports

### 4. Routing

- Route added to `App.jsx`: `/draft-assistant`

## 📋 Remaining Setup Steps

### Step 1: Install Required Dependencies

For full functionality with PDF and DOCX files, install these packages:

```bash
npm install pdf-parse mammoth
```

**Note**: The system will work with `.txt` files immediately. PDF and DOCX support requires these libraries.

### Step 2: Update Document Evaluator for File Parsing

If you want PDF support, update the `extractTextFromPDF` function in `/src/utils/documentEvaluator.js`:

```javascript
import * as pdfParse from "pdf-parse";

async function extractTextFromPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const data = await pdfParse(buffer);
  return data.text;
}
```

For DOCX support, update `extractTextFromDOCX`:

```javascript
import mammoth from "mammoth";

async function extractTextFromDOCX(file) {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
}
```

### Step 3: Add Navigation Link

Add a link to the Draft Assistant in your navigation menu. Edit `/src/components/MenuDrawer.jsx` or wherever your navigation is:

```jsx
<Link to="/draft-assistant">Draft Assistant</Link>
```

### Step 4: Test with Sample Documents

Create test documents in `/docs/draft_assistant/samples/`:

- `sample_position_paper.txt`
- `sample_working_paper.txt`
- `sample_draft_resolution.txt`
- `sample_op_ed.txt`

## 🎯 How It Works

### Document Type Evaluation Criteria

#### Position Paper (100 points)

- **Structure & Organization (20)**: Header, paragraphs, sections
- **Country Representation (25)**: Policy language, national perspective
- **Research & Citations (20)**: Sources, facts, statistics
- **Proposed Solutions (20)**: Action verbs, implementation details
- **Writing Quality (15)**: Length, complexity, formality

#### Working Paper (100 points)

- **Format Compliance (15)**: Header, sponsors, signatories
- **Clause Structure (20)**: Perambulatory and operative clauses
- **Comprehensiveness (20)**: Coverage of multiple aspects
- **Feasibility & Specificity (25)**: Actionable, realistic proposals
- **Collaboration (10)**: Collaborative language
- **UN Alignment (10)**: Alignment with UN principles

#### Draft Resolution (100 points)

- **Format & Structure (15)**: Complete header block
- **Preamble Quality (20)**: Perambulatory clauses, references
- **Operative Effectiveness (25)**: Action clauses, sub-clauses
- **Specificity (20)**: Numbers, timelines, mechanisms
- **Diplomatic Language (10)**: Tone and terminology
- **UN Compliance (10)**: Charter alignment

#### Op-Ed (100 points)

- **Compelling Opening (15)**: Hook, headline
- **Argument Strength (25)**: Logic, thesis, transitions
- **Evidence (20)**: Statistics, examples, expert quotes
- **Persuasiveness (20)**: Emotional appeal, call to action
- **Writing Style (15)**: Length, readability, engagement
- **Country Perspective (5)**: National viewpoint

## 🔍 Evaluation Process

1. **Text Extraction**: Parses uploaded file (TXT, PDF, DOCX, RTF)
2. **Analysis**: Calculates word count, paragraphs, clauses, citations
3. **Pattern Matching**: Looks for keywords, phrases, structural elements
4. **Scoring**: Applies rubric criteria with detailed breakdown
5. **Feedback Generation**: Creates constructive, categorized feedback
6. **Report**: Displays results with downloadable summary

## 📊 Feedback Types

- ✓ **Success** (Green): Meets criteria excellently
- ✗ **Error** (Red): Critical issue that must be addressed
- ⚠ **Warning** (Yellow): Needs improvement
- ℹ **Info** (Blue): Suggestion for enhancement

## 🎨 UI Features

### Upload Section

- Drag-and-drop or click to upload
- Format validation (TXT, PDF, DOCX, RTF)
- File preview with size display

### Document Type Cards

- Visual selection of document type
- Clear descriptions for each type

### Metadata Input

- Optional but recommended fields
- Country, Committee, Topic
- Enhances evaluation accuracy

### Results Display

- Large percentage score with color coding
- Grade (A-F) with description
- Score breakdown by category
- Progress bars for visual understanding
- Document statistics (words, clauses, citations)
- Categorized feedback with icons
- Personalized recommendations
- Downloadable text report

### Resources Section

- Links to ROP documents
- Access to evaluation documentation
- Quick reference guides

## 🧪 Testing the System

### Test Case 1: Position Paper

Create a file with:

```
Committee: United Nations Security Council
Country: Japan
Delegate: [Your Name]
Topic: Nuclear Non-Proliferation

Introduction...
[500-800 words with proper structure]
```

### Test Case 2: Working Paper (TXT format for easy testing)

Create `test_working_paper.txt`:

```
Committee: UNEP
Topic: Climate Change Mitigation
Sponsors: Germany, Sweden, Costa Rica
Signatories: France, Netherlands, Denmark

Preamble:
Noting the increasing global temperatures,
Recalling the Paris Agreement of 2015,
Recognizing the urgent need for action,

Operative Clauses:
1. Recommends the establishment of a Green Climate Fund;
2. Urges member states to reduce emissions by 50% by 2030;
3. Encourages investment in renewable energy infrastructure;
```

Expected score: 60-75% (good structure, needs more clauses and detail)

### Test Case 3: Quick Test with Minimal Text

Create `minimal_test.txt`:

```
This is a position paper about climate change.

We need to do something about global warming. It is important.

My country supports action on this issue.
```

Expected score: 20-40% (will show many warnings and errors)

## 🔧 Customization Options

### Adjust Scoring Weights

Edit rubric values in each evaluator function to match your specific requirements.

### Add New Document Types

1. Create new evaluator function following the pattern
2. Add to `DOCUMENT_TYPES` constant
3. Add case in `evaluateDocument` switch statement

### Modify Keywords Lists

Update the keyword arrays to match specific terminology used in your MUN conferences:

- `PERAMBULATORY_VERBS`
- `OPERATIVE_VERBS`
- Policy keywords, diplomatic terms, etc.

### Enhance NLP Capabilities

For more sophisticated analysis:

- Integrate sentiment analysis libraries
- Add grammar checking (e.g., LanguageTool API)
- Implement similarity checking for plagiarism detection
- Use ML models for more nuanced evaluation

## 🚀 Advanced Features (Future Enhancements)

### Phase 2: AI-Powered Features

- Real-time writing suggestions
- Auto-completion for clauses
- Template generation
- Country-specific position recommendations

### Phase 3: Collaboration Tools

- Multi-user document editing
- Peer review system
- Version tracking
- Comment threads

### Phase 4: Integration

- Supabase storage for document history
- User accounts with saved evaluations
- Analytics dashboard for delegates
- Export to multiple formats (PDF, DOCX)

## 📱 Responsive Design

The interface is fully responsive:

- **Desktop**: Full multi-column layout
- **Tablet**: Adapted grid layouts
- **Mobile**: Single-column stack

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Color contrast compliance
- Focus indicators

## 🐛 Troubleshooting

### Issue: "Unsupported file format"

**Solution**: Ensure file has proper extension (.txt, .pdf, .docx, .rtf)

### Issue: PDF parsing error

**Solution**: Install `pdf-parse` package: `npm install pdf-parse`

### Issue: DOCX parsing error

**Solution**: Install `mammoth` package: `npm install mammoth`

### Issue: Low scores on valid documents

**Solution**: Check that document follows MUN formatting conventions. The evaluator looks for specific keywords and structure.

### Issue: "Unable to extract text"

**Solution**: Ensure file is not corrupted and contains actual text (not images/scans)

## 📚 Additional Resources

### ROP Documents

- Located in `/public/rop/`
- GDMUN High Commission ROP version 2025.pdf
- GDMUN-2022-Rules of Procedure.pdf

### Documentation

- Complete evaluation criteria: `/docs/draft_assistant/README.md`
- Implementation code: `/src/utils/documentEvaluator.js`
- UI component: `/src/pages/DraftAssistant.jsx`

### External References

- [Official GMUN Website](https://www.globaldiplomaticmun.com/)
- [UN Official Documents](https://www.un.org/en/documents/)
- MUN resolution writing guides

## 💡 Tips for Delegates

1. **Start Early**: Upload drafts for feedback before final submission
2. **Iterate**: Use feedback to revise and resubmit for improved scores
3. **Study Examples**: Read high-scoring documents to understand patterns
4. **Follow Format**: Proper formatting significantly impacts scores
5. **Cite Sources**: Always include citations for better research scores
6. **Be Specific**: Concrete details score better than vague statements
7. **Use Diplomatic Language**: Avoid confrontational or informal terms
8. **Check Grammar**: Proofread before uploading

## 🤝 Contributing

To improve the evaluator:

1. Test with real documents from past conferences
2. Collect feedback from delegates and chairs
3. Adjust scoring weights based on results
4. Add new evaluation criteria as needed
5. Update documentation with findings

## 📄 License & Credits

Part of the DMUN Foundation platform. Developed to assist delegates in improving their MUN document quality.

---

**Version**: 1.0.0  
**Last Updated**: November 8, 2025  
**Status**: ✅ Ready for Testing

For questions or support, contact the DMUN Foundation development team.
