# 🚀 Quick Start: GMUN Draft Assistant

## Access the Application

Navigate to: `http://localhost:5173/draft-assistant` (or your deployment URL)

## Immediate Testing (No Setup Required!)

### Option 1: Use Provided Sample Documents

1. Go to `/docs/draft_assistant/samples/`
2. Choose any sample file:
   - `sample_position_paper.txt` - Expected score: 85-90%
   - `sample_working_paper.txt` - Expected score: 80-85%
   - `sample_draft_resolution.txt` - Expected score: 90-95%
   - `sample_op_ed.txt` - Expected score: 85-90%
3. Upload the file to the Draft Assistant
4. Select the corresponding document type
5. Click "Evaluate Document"
6. Review the detailed feedback!

### Option 2: Create a Quick Test File

Create a file named `test.txt` with this content:

```
Committee: United Nations Security Council
Country: Canada
Delegate: John Smith
Topic: Cybersecurity and International Peace

Introduction

Cybersecurity threats pose significant risks to international peace and security. As digital infrastructure becomes increasingly central to modern society, protecting these systems from malicious actors has become imperative. Canada believes that international cooperation and clear norms are essential to address this growing challenge.

Canada's Position

Canada advocates for a rules-based international order in cyberspace. We support the establishment of international norms that prohibit cyber operations targeting critical infrastructure during peacetime. Our government has invested $1 billion in cybersecurity initiatives and works closely with NATO allies to develop collective defense capabilities.

Past Actions

In 2021, Canada co-sponsored Resolution 76/19 on cybersecurity at the UN General Assembly. We have contributed technical expertise to the UN Group of Governmental Experts on cybersecurity. Canada participates in the Paris Call for Trust and Security in Cyberspace, which now includes 80 countries.

Proposed Solutions

Canada proposes establishing a UN Cybersecurity Coordination Center with an annual budget of $200 million to monitor threats, coordinate responses, and provide technical assistance to developing nations. We recommend creating binding international agreements prohibiting cyber attacks on critical infrastructure including healthcare, water systems, and financial networks. Canada suggests implementing a mandatory reporting framework requiring states to disclose significant cyber incidents within 72 hours.

Conclusion

Cybersecurity requires collective action and shared responsibility. Canada stands ready to contribute resources and expertise to strengthen international cyber defenses. We urge this council to adopt concrete measures that protect critical infrastructure while respecting human rights and privacy. The digital age demands new approaches to security, and we must act now before cyber threats escalate beyond control.
```

Expected score: 70-75% (Good, but could use more citations and implementation details)

### Option 3: Test with Minimal Content

Create `minimal.txt`:

```
This is about climate change.

My country thinks we should do something.

It is important and urgent.

We need action now.
```

Expected score: 15-25% (Will show you what NOT to do - great for learning!)

## 📋 What to Look For

### In the Results:

1. **Overall Score**: Large percentage (0-100%)
2. **Grade**: A, B, C, D, or F
3. **Score Breakdown**: Six categories with progress bars
4. **Document Analysis**: Statistics about your document
5. **Detailed Feedback**: Color-coded suggestions:
   - ✓ Green = Excellent (Success)
   - ✗ Red = Critical Issue (Error)
   - ⚠ Yellow = Needs Improvement (Warning)
   - ℹ Blue = Suggestion (Info)
6. **Recommendations**: Overall advice based on your score
7. **Download Button**: Get a text report of the evaluation

## 🎯 Understanding Your Score

| Score     | Grade | What It Means                        |
| --------- | ----- | ------------------------------------ |
| 90-100%   | A     | Excellent! Professional MUN standard |
| 80-89%    | B     | Very good! Minor improvements needed |
| 70-79%    | C     | Good! Address key feedback areas     |
| 60-69%    | D     | Satisfactory. Needs revision         |
| Below 60% | F     | Needs major work. Review guidelines  |

## 💡 Tips for High Scores

### Position Papers:

- Include header with Committee, Country, Delegate, Topic
- Write 500-800 words
- Include 3-5 citations
- Mention your country 3+ times
- Use diplomatic, formal language
- Provide specific solutions with implementation details

### Working Papers:

- List sponsors and signatories
- Use perambulatory clauses (Noting, Recalling, Recognizing...)
- Use operative clauses (Recommends, Urges, Calls upon...)
- Include 5+ numbered action points
- Be specific with timelines and funding
- Show collaborative approach

### Draft Resolutions:

- Complete header: Committee, Topic, Sponsors (20+), Signatories
- Strong preamble with 5+ perambulatory clauses
- Comprehensive operative section with 8+ clauses
- Use sub-clauses for detail
- Include specific numbers, dates, amounts
- Reference past UN resolutions
- Add monitoring mechanisms

### Op-Eds:

- Start with a compelling hook (question, statistic, story)
- Write 600-800 words
- Clear opinion/thesis stated early
- Include evidence and examples
- Address counterarguments
- End with strong call to action
- Use engaging, persuasive language

## 🔍 Common Issues & Solutions

### "Score is lower than expected"

- Check if you included all required sections
- Ensure proper formatting (headers, structure)
- Add citations if missing
- Use more specific language and numbers
- Review diplomatic tone

### "No citations found"

- Add source references: (Author, 2023) or [1]
- Include URLs to sources
- Reference UN resolutions or treaties

### "Too short/too long"

- Position Paper: 500-800 words ideal
- Op-Ed: 600-800 words ideal
- Working Paper/Resolution: Focus on clause count, not words

### "Informal language detected"

- Avoid: gonna, wanna, stuff, things, basically
- Use: formal diplomatic language
- Replace casual terms with professional equivalents

## 📚 Learning Resources

### Available Documentation:

- **Complete Guide**: `/docs/draft_assistant/README.md`
- **Implementation Guide**: `/docs/draft_assistant/IMPLEMENTATION_GUIDE.md`
- **Quick Reference**: `/docs/draft_assistant/QUICK_REFERENCE.md`
- **Project Summary**: `/docs/draft_assistant/PROJECT_SUMMARY.md`

### ROP Documents:

- GDMUN High Commission ROP 2025: `/public/rop/GDMUN High Commission ROP version 2025.pdf`
- GDMUN ROP 2022: `/public/rop/GDMUN-2022-Rules of Procedure.pdf`

### Sample Documents:

All in `/docs/draft_assistant/samples/`:

- `sample_position_paper.txt`
- `sample_working_paper.txt`
- `sample_draft_resolution.txt`
- `sample_op_ed.txt`

## 🛠️ For Developers

### Current File Support:

✅ **TXT files** - Work immediately, no setup needed

### Optional File Support:

🔄 **PDF files** - Requires: `npm install pdf-parse`  
🔄 **DOCX files** - Requires: `npm install mammoth`

See `IMPLEMENTATION_GUIDE.md` for setup instructions.

## 🎓 How to Use This as a Learning Tool

1. **Start with samples**: Upload sample documents to see what high scores look like
2. **Compare**: Write your own document and compare your score to samples
3. **Iterate**: Use feedback to revise and resubmit
4. **Learn patterns**: Notice which keywords and structures score well
5. **Reference guide**: Keep QUICK_REFERENCE.md open while writing

## ⚡ Quick Test Workflow

1. Open Draft Assistant page
2. Upload `sample_position_paper.txt`
3. Select "Position Paper"
4. Fill in metadata:
   - Country: Japan
   - Committee: UNSC
   - Topic: Nuclear Non-Proliferation
5. Click "Evaluate Document"
6. Review score (should be 85-90%)
7. Read feedback to understand what makes it strong
8. Try with a different sample!

## 🎉 You're Ready!

The system is fully functional with TXT files. Start testing with the provided samples or create your own documents. The evaluator will provide detailed, constructive feedback to help improve your MUN writing skills.

Happy writing! 📝🌍
