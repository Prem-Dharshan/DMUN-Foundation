/**
 * Document Evaluator for GMUN Draft Assistant
 * Evaluates MUN documents based on Rules of Procedure
 */

// Document type definitions
export const DOCUMENT_TYPES = {
  POSITION_PAPER: 'position_paper',
  WORKING_PAPER: 'working_paper',
  DRAFT_RESOLUTION: 'draft_resolution',
  OP_ED: 'op_ed'
};

// Perambulatory clause keywords
const PERAMBULATORY_VERBS = [
  'noting', 'recalling', 'realizing', 'recognizing', 'observing',
  'affirming', 'believing', 'bearing in mind', 'confident',
  'contemplating', 'convinced', 'declaring', 'deeply concerned',
  'deeply conscious', 'deeply convinced', 'deeply disturbed',
  'emphasizing', 'expecting', 'expressing', 'fulfilling',
  'fully aware', 'guided by', 'having', 'keeping in mind',
  'noting with', 'reaffirming', 'seeking', 'taking into account',
  'viewing', 'welcoming'
];

// Operative clause keywords
const OPERATIVE_VERBS = [
  'accepts', 'affirms', 'approves', 'authorizes', 'calls upon',
  'condemns', 'confirms', 'congratulates', 'considers', 'declares',
  'deplores', 'designates', 'draws attention', 'emphasizes',
  'encourages', 'endorses', 'expresses', 'further invites',
  'further proclaims', 'further reminds', 'further recommends',
  'further requests', 'further resolves', 'has resolved',
  'notes', 'proclaims', 'reaffirms', 'recommends', 'regrets',
  'reminds', 'requests', 'resolves', 'solemnly affirms',
  'strongly condemns', 'supports', 'transmits', 'trusts', 'urges'
];

/**
 * Extract text from different file formats
 */
export async function extractTextFromFile(file) {
  const fileType = file.name.split('.').pop().toLowerCase();
  
  switch (fileType) {
    case 'txt':
      return await file.text();
    
    case 'pdf':
      // For PDF, we'll need a library like pdf-parse or pdf.js
      // This is a placeholder - implement with actual PDF parsing
      return await extractTextFromPDF(file);
    
    case 'docx':
      // For DOCX, we'll need a library like mammoth or docx-parser
      // This is a placeholder - implement with actual DOCX parsing
      return await extractTextFromDOCX(file);
    
    case 'rtf':
      return await file.text();
    
    default:
      throw new Error(`Unsupported file format: ${fileType}`);
  }
}

/**
 * Placeholder for PDF text extraction
 */
async function extractTextFromPDF(file) {
  // TODO: Implement PDF parsing using pdf-parse or similar library
  // For now, return a message
  throw new Error('PDF parsing requires pdf-parse library. Please install: npm install pdf-parse');
}

/**
 * Placeholder for DOCX text extraction
 */
async function extractTextFromDOCX(file) {
  // TODO: Implement DOCX parsing using mammoth or similar library
  throw new Error('DOCX parsing requires mammoth library. Please install: npm install mammoth');
}

/**
 * Analyze text structure and content
 */
function analyzeText(text) {
  const lines = text.split('\n').filter(line => line.trim());
  const words = text.split(/\s+/).filter(word => word.trim());
  const sentences = text.split(/[.!?]+/).filter(s => s.trim());
  
  return {
    lineCount: lines.length,
    wordCount: words.length,
    sentenceCount: sentences.length,
    characterCount: text.length,
    avgWordsPerSentence: sentences.length > 0 ? words.length / sentences.length : 0,
    paragraphs: text.split(/\n\n+/).filter(p => p.trim())
  };
}

/**
 * Check for citations in text
 */
function findCitations(text) {
  const citations = [];
  
  // MLA style citations (Author, "Title")
  const mlaPattern = /\([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,?\s+\d{4}\)/g;
  const mlaMatches = text.match(mlaPattern) || [];
  citations.push(...mlaMatches);
  
  // Footnote/Endnote markers
  const footnotePattern = /\[\d+\]|\(\d+\)/g;
  const footnoteMatches = text.match(footnotePattern) || [];
  citations.push(...footnoteMatches);
  
  // URL citations
  const urlPattern = /https?:\/\/[^\s]+/g;
  const urlMatches = text.match(urlPattern) || [];
  citations.push(...urlMatches);
  
  return {
    count: citations.length,
    examples: citations.slice(0, 5),
    hasCitations: citations.length > 0
  };
}

/**
 * Evaluate Position Paper
 */
export function evaluatePositionPaper(text, metadata = {}) {
  const analysis = analyzeText(text);
  const citations = findCitations(text);
  const feedback = [];
  let score = 0;
  const maxScore = 100;
  
  // Structure & Organization (20 points)
  let structureScore = 0;
  const requiredSections = ['introduction', 'position', 'past action', 'solution', 'conclusion'];
  const textLower = text.toLowerCase();
  
  // Check for header elements
  const hasCommittee = /committee:/i.test(text);
  const hasCountry = /country:/i.test(text) || /delegate:/i.test(text);
  const hasTopic = /topic:/i.test(text);
  
  if (hasCommittee && hasCountry && hasTopic) {
    structureScore += 5;
    feedback.push({ type: 'success', category: 'Structure', message: '✓ Complete header with committee, country, and topic' });
  } else {
    feedback.push({ type: 'error', category: 'Structure', message: '✗ Missing header elements (Committee, Country, Delegate, Topic)' });
  }
  
  // Check paragraph count (should have 5-7 paragraphs)
  if (analysis.paragraphs.length >= 5 && analysis.paragraphs.length <= 8) {
    structureScore += 10;
    feedback.push({ type: 'success', category: 'Structure', message: `✓ Good paragraph structure (${analysis.paragraphs.length} paragraphs)` });
  } else if (analysis.paragraphs.length < 5) {
    structureScore += 5;
    feedback.push({ type: 'warning', category: 'Structure', message: `⚠ Too few paragraphs (${analysis.paragraphs.length}). Aim for 5-7 paragraphs.` });
  } else {
    structureScore += 8;
    feedback.push({ type: 'warning', category: 'Structure', message: `⚠ Many paragraphs (${analysis.paragraphs.length}). Consider consolidating.` });
  }
  
  // Check if sections are identifiable
  const hasIntroduction = analysis.paragraphs[0]?.length > 50;
  if (hasIntroduction) {
    structureScore += 5;
    feedback.push({ type: 'success', category: 'Structure', message: '✓ Clear introduction present' });
  }
  
  score += structureScore;
  
  // Country Representation & Accuracy (25 points)
  let representationScore = 0;
  
  if (metadata.country) {
    const countryMentions = (text.match(new RegExp(metadata.country, 'gi')) || []).length;
    if (countryMentions >= 3) {
      representationScore += 10;
      feedback.push({ type: 'success', category: 'Representation', message: `✓ Good country representation (${countryMentions} mentions)` });
    } else {
      representationScore += 5;
      feedback.push({ type: 'warning', category: 'Representation', message: '⚠ Limited country-specific references. Strengthen national perspective.' });
    }
  } else {
    representationScore += 5;
    feedback.push({ type: 'info', category: 'Representation', message: 'ℹ Country not specified for verification' });
  }
  
  // Check for policy language
  const policyKeywords = ['government', 'policy', 'legislation', 'treaty', 'agreement', 'commitment', 'stance', 'position'];
  const policyCount = policyKeywords.reduce((count, keyword) => 
    count + (text.match(new RegExp(keyword, 'gi')) || []).length, 0
  );
  
  if (policyCount >= 5) {
    representationScore += 10;
    feedback.push({ type: 'success', category: 'Representation', message: '✓ Strong policy language and governmental perspective' });
  } else {
    representationScore += 5;
    feedback.push({ type: 'warning', category: 'Representation', message: '⚠ Use more policy-specific language to represent governmental stance' });
  }
  
  // Diplomatic tone check
  const diplomaticWords = ['cooperation', 'collaboration', 'mutual', 'respect', 'dialogue', 'partnership', 'commitment'];
  const diplomaticCount = diplomaticWords.reduce((count, word) => 
    count + (text.match(new RegExp(word, 'gi')) || []).length, 0
  );
  
  if (diplomaticCount >= 3) {
    representationScore += 5;
    feedback.push({ type: 'success', category: 'Representation', message: '✓ Appropriate diplomatic tone' });
  } else {
    representationScore += 2;
    feedback.push({ type: 'warning', category: 'Representation', message: '⚠ Consider using more diplomatic language' });
  }
  
  score += representationScore;
  
  // Research & Citations (20 points)
  let researchScore = 0;
  
  if (citations.count >= 5) {
    researchScore += 15;
    feedback.push({ type: 'success', category: 'Research', message: `✓ Excellent citation count (${citations.count} citations)` });
  } else if (citations.count >= 3) {
    researchScore += 10;
    feedback.push({ type: 'success', category: 'Research', message: `✓ Adequate citations (${citations.count}). Aim for 5+ for stronger research base.` });
  } else if (citations.count > 0) {
    researchScore += 5;
    feedback.push({ type: 'warning', category: 'Research', message: `⚠ Limited citations (${citations.count}). Add more sources (minimum 3-5).` });
  } else {
    feedback.push({ type: 'error', category: 'Research', message: '✗ No citations found. Include credible sources.' });
  }
  
  // Check for factual indicators (dates, statistics, organizations)
  const hasStatistics = /\d+%|\d+\s*(million|billion|thousand)/gi.test(text);
  const hasOrganizations = /(UN|WHO|UNESCO|UNICEF|United Nations|World Bank|IMF)/gi.test(text);
  const hasHistoricalDates = /\b(19|20)\d{2}\b/g.test(text);
  
  if (hasStatistics) {
    researchScore += 2;
    feedback.push({ type: 'success', category: 'Research', message: '✓ Includes statistical data' });
  }
  if (hasOrganizations) {
    researchScore += 2;
    feedback.push({ type: 'success', category: 'Research', message: '✓ References international organizations' });
  }
  if (hasHistoricalDates) {
    researchScore += 1;
    feedback.push({ type: 'success', category: 'Research', message: '✓ Provides historical context' });
  }
  
  score += researchScore;
  
  // Proposed Solutions & Feasibility (20 points)
  let solutionsScore = 0;
  
  const actionWords = ['propose', 'recommend', 'suggest', 'implement', 'establish', 'create', 'develop', 'support', 'advocate'];
  const actionCount = actionWords.reduce((count, word) => 
    count + (text.match(new RegExp(word, 'gi')) || []).length, 0
  );
  
  if (actionCount >= 5) {
    solutionsScore += 15;
    feedback.push({ type: 'success', category: 'Solutions', message: `✓ Strong action-oriented solutions (${actionCount} action verbs)` });
  } else if (actionCount >= 3) {
    solutionsScore += 10;
    feedback.push({ type: 'success', category: 'Solutions', message: '✓ Adequate solution proposals. Consider adding more specific actions.' });
  } else {
    solutionsScore += 5;
    feedback.push({ type: 'warning', category: 'Solutions', message: '⚠ Limited solution proposals. Provide more concrete recommendations.' });
  }
  
  // Check for implementation details
  const implementationWords = ['timeline', 'funding', 'mechanism', 'framework', 'procedure', 'monitoring', 'evaluation'];
  const implementationCount = implementationWords.reduce((count, word) => 
    count + (text.match(new RegExp(word, 'gi')) || []).length, 0
  );
  
  if (implementationCount >= 3) {
    solutionsScore += 5;
    feedback.push({ type: 'success', category: 'Solutions', message: '✓ Includes implementation details' });
  } else {
    solutionsScore += 2;
    feedback.push({ type: 'info', category: 'Solutions', message: 'ℹ Consider adding implementation details (timeline, funding, mechanisms)' });
  }
  
  score += solutionsScore;
  
  // Writing Quality & Diplomacy (15 points)
  let writingScore = 0;
  
  // Word count check (500-800 words ideal)
  if (analysis.wordCount >= 500 && analysis.wordCount <= 800) {
    writingScore += 5;
    feedback.push({ type: 'success', category: 'Writing', message: `✓ Appropriate length (${analysis.wordCount} words)` });
  } else if (analysis.wordCount < 500) {
    writingScore += 2;
    feedback.push({ type: 'warning', category: 'Writing', message: `⚠ Below recommended length (${analysis.wordCount} words). Aim for 500-800.` });
  } else if (analysis.wordCount > 1000) {
    writingScore += 3;
    feedback.push({ type: 'warning', category: 'Writing', message: `⚠ Exceeds recommended length (${analysis.wordCount} words). Consider condensing.` });
  } else {
    writingScore += 4;
    feedback.push({ type: 'success', category: 'Writing', message: `✓ Good length (${analysis.wordCount} words)` });
  }
  
  // Sentence complexity
  if (analysis.avgWordsPerSentence >= 15 && analysis.avgWordsPerSentence <= 25) {
    writingScore += 5;
    feedback.push({ type: 'success', category: 'Writing', message: '✓ Good sentence complexity and readability' });
  } else if (analysis.avgWordsPerSentence < 15) {
    writingScore += 3;
    feedback.push({ type: 'info', category: 'Writing', message: 'ℹ Sentences are simple. Consider more complex structures for formal tone.' });
  } else {
    writingScore += 3;
    feedback.push({ type: 'warning', category: 'Writing', message: '⚠ Long sentences may reduce clarity. Consider breaking them up.' });
  }
  
  // Professional language check
  const informalWords = /\b(gonna|wanna|gotta|yeah|stuff|things|basically|literally)\b/gi;
  const hasInformal = informalWords.test(text);
  
  if (!hasInformal) {
    writingScore += 5;
    feedback.push({ type: 'success', category: 'Writing', message: '✓ Maintains formal, professional tone' });
  } else {
    writingScore += 2;
    feedback.push({ type: 'error', category: 'Writing', message: '✗ Contains informal language. Use formal diplomatic style.' });
  }
  
  score += writingScore;
  
  return {
    score,
    maxScore,
    percentage: Math.round((score / maxScore) * 100),
    feedback,
    analysis: {
      wordCount: analysis.wordCount,
      paragraphCount: analysis.paragraphs.length,
      citationCount: citations.count,
      avgSentenceLength: Math.round(analysis.avgWordsPerSentence)
    },
    breakdown: {
      structure: { score: structureScore, max: 20 },
      representation: { score: representationScore, max: 25 },
      research: { score: researchScore, max: 20 },
      solutions: { score: solutionsScore, max: 20 },
      writing: { score: writingScore, max: 15 }
    }
  };
}

/**
 * Evaluate Working Paper
 */
export function evaluateWorkingPaper(text, metadata = {}) {
  const analysis = analyzeText(text);
  const feedback = [];
  let score = 0;
  const maxScore = 100;
  
  // Format Compliance (15 points)
  let formatScore = 0;
  
  const hasHeader = /sponsors?:/i.test(text) || /signatories:/i.test(text);
  if (hasHeader) {
    formatScore += 5;
    feedback.push({ type: 'success', category: 'Format', message: '✓ Header with sponsors/signatories present' });
  } else {
    feedback.push({ type: 'error', category: 'Format', message: '✗ Missing header (must include Sponsors and Signatories)' });
  }
  
  const hasCommittee = /committee:/i.test(text);
  const hasTopic = /topic:/i.test(text);
  
  if (hasCommittee && hasTopic) {
    formatScore += 5;
    feedback.push({ type: 'success', category: 'Format', message: '✓ Committee and topic specified' });
  } else {
    formatScore += 2;
    feedback.push({ type: 'warning', category: 'Format', message: '⚠ Committee and/or topic not clearly specified' });
  }
  
  // Check for section division
  const hasPreamble = /preamble|whereas|noting|recalling/i.test(text);
  const hasOperative = /operative|resolve|recommend|urge/i.test(text);
  
  if (hasPreamble && hasOperative) {
    formatScore += 5;
    feedback.push({ type: 'success', category: 'Format', message: '✓ Clear preamble and operative sections' });
  } else {
    formatScore += 2;
    feedback.push({ type: 'error', category: 'Format', message: '✗ Must have distinct preamble and operative sections' });
  }
  
  score += formatScore;
  
  // Clause Structure (20 points)
  let clauseScore = 0;
  
  // Count perambulatory clauses
  const perambCount = PERAMBULATORY_VERBS.reduce((count, verb) => 
    count + (text.match(new RegExp(`\\b${verb}\\b`, 'gi')) || []).length, 0
  );
  
  if (perambCount >= 3) {
    clauseScore += 10;
    feedback.push({ type: 'success', category: 'Clauses', message: `✓ Good use of perambulatory clauses (${perambCount} found)` });
  } else if (perambCount > 0) {
    clauseScore += 5;
    feedback.push({ type: 'warning', category: 'Clauses', message: `⚠ Limited perambulatory clauses (${perambCount}). Add more background context.` });
  } else {
    feedback.push({ type: 'error', category: 'Clauses', message: '✗ No perambulatory clauses found. These are essential for context.' });
  }
  
  // Count operative clauses
  const operativeCount = OPERATIVE_VERBS.reduce((count, verb) => 
    count + (text.match(new RegExp(`\\b${verb}\\b`, 'gi')) || []).length, 0
  );
  
  if (operativeCount >= 5) {
    clauseScore += 10;
    feedback.push({ type: 'success', category: 'Clauses', message: `✓ Strong operative section (${operativeCount} action clauses)` });
  } else if (operativeCount >= 3) {
    clauseScore += 7;
    feedback.push({ type: 'success', category: 'Clauses', message: `✓ Adequate operative clauses (${operativeCount}). Consider adding more specific actions.` });
  } else if (operativeCount > 0) {
    clauseScore += 3;
    feedback.push({ type: 'warning', category: 'Clauses', message: `⚠ Limited operative clauses (${operativeCount}). Need more actionable solutions.` });
  } else {
    feedback.push({ type: 'error', category: 'Clauses', message: '✗ No operative clauses found. These are essential for solutions.' });
  }
  
  score += clauseScore;
  
  // Comprehensiveness (20 points)
  let comprehensivenessScore = 0;
  
  // Check for numbered clauses
  const numberedClauses = text.match(/^\s*\d+\./gm) || [];
  if (numberedClauses.length >= 5) {
    comprehensivenessScore += 10;
    feedback.push({ type: 'success', category: 'Comprehensiveness', message: `✓ Well-structured with ${numberedClauses.length} numbered clauses` });
  } else if (numberedClauses.length > 0) {
    comprehensivenessScore += 5;
    feedback.push({ type: 'warning', category: 'Comprehensiveness', message: `⚠ Only ${numberedClauses.length} numbered clauses. Expand to cover more aspects.` });
  }
  
  // Check coverage of different aspects
  const aspectKeywords = ['economic', 'social', 'environmental', 'political', 'humanitarian', 'security', 'education', 'health'];
  const aspectsCovered = aspectKeywords.filter(aspect => 
    new RegExp(aspect, 'gi').test(text)
  ).length;
  
  if (aspectsCovered >= 4) {
    comprehensivenessScore += 10;
    feedback.push({ type: 'success', category: 'Comprehensiveness', message: `✓ Covers multiple aspects (${aspectsCovered} dimensions)` });
  } else if (aspectsCovered >= 2) {
    comprehensivenessScore += 6;
    feedback.push({ type: 'info', category: 'Comprehensiveness', message: `ℹ Covers ${aspectsCovered} aspects. Consider broader perspective.` });
  } else {
    comprehensivenessScore += 3;
    feedback.push({ type: 'warning', category: 'Comprehensiveness', message: '⚠ Limited scope. Address multiple dimensions of the issue.' });
  }
  
  score += comprehensivenessScore;
  
  // Feasibility & Specificity (25 points)
  let feasibilityScore = 0;
  
  const specificKeywords = ['establish', 'create', 'implement', 'allocate', 'increase', 'decrease', 'monitor', 'evaluate', 'report'];
  const specificCount = specificKeywords.reduce((count, word) => 
    count + (text.match(new RegExp(`\\b${word}\\b`, 'gi')) || []).length, 0
  );
  
  if (specificCount >= 8) {
    feasibilityScore += 15;
    feedback.push({ type: 'success', category: 'Feasibility', message: '✓ Highly specific and actionable proposals' });
  } else if (specificCount >= 5) {
    feasibilityScore += 10;
    feedback.push({ type: 'success', category: 'Feasibility', message: '✓ Good specificity. Could add more concrete details.' });
  } else {
    feasibilityScore += 5;
    feedback.push({ type: 'warning', category: 'Feasibility', message: '⚠ Proposals need more specificity and concrete actions.' });
  }
  
  // Check for realistic language
  const hasTimelines = /\b(by \d{4}|within \d+ (year|month)|over \d+ years)\b/gi.test(text);
  const hasFunding = /(budget|fund|financial|resource)/gi.test(text);
  const hasMonitoring = /(monitor|evaluate|assess|review|report)/gi.test(text);
  
  if (hasTimelines) {
    feasibilityScore += 3;
    feedback.push({ type: 'success', category: 'Feasibility', message: '✓ Includes timeline references' });
  }
  if (hasFunding) {
    feasibilityScore += 4;
    feedback.push({ type: 'success', category: 'Feasibility', message: '✓ Addresses funding/resources' });
  }
  if (hasMonitoring) {
    feasibilityScore += 3;
    feedback.push({ type: 'success', category: 'Feasibility', message: '✓ Includes monitoring mechanisms' });
  }
  
  score += feasibilityScore;
  
  // Collaboration Evidence (10 points)
  let collaborationScore = 0;
  
  const sponsorCount = (text.match(/sponsor/gi) || []).length;
  const signatoryCount = (text.match(/signatory/gi) || []).length;
  
  if (sponsorCount > 0 || signatoryCount > 0) {
    collaborationScore += 5;
    feedback.push({ type: 'success', category: 'Collaboration', message: '✓ References sponsors/signatories' });
  }
  
  const collaborativeWords = ['cooperative', 'joint', 'multilateral', 'partnership', 'collective', 'consensus'];
  const collaborativeCount = collaborativeWords.reduce((count, word) => 
    count + (text.match(new RegExp(`\\b${word}\\b`, 'gi')) || []).length, 0
  );
  
  if (collaborativeCount >= 3) {
    collaborationScore += 5;
    feedback.push({ type: 'success', category: 'Collaboration', message: '✓ Emphasizes collaborative approach' });
  } else {
    collaborationScore += 2;
    feedback.push({ type: 'info', category: 'Collaboration', message: 'ℹ Consider emphasizing collaborative nature of solutions' });
  }
  
  score += collaborationScore;
  
  // UN Principles Alignment (10 points)
  let alignmentScore = 0;
  
  const unPrinciples = ['human rights', 'sovereignty', 'peace', 'security', 'development', 'equality', 'justice', 'rule of law'];
  const principlesCount = unPrinciples.reduce((count, principle) => 
    count + (text.match(new RegExp(principle, 'gi')) || []).length, 0
  );
  
  if (principlesCount >= 3) {
    alignmentScore += 10;
    feedback.push({ type: 'success', category: 'UN Alignment', message: '✓ Strong alignment with UN principles' });
  } else if (principlesCount > 0) {
    alignmentScore += 5;
    feedback.push({ type: 'success', category: 'UN Alignment', message: '✓ References UN principles. Could strengthen alignment.' });
  } else {
    alignmentScore += 2;
    feedback.push({ type: 'warning', category: 'UN Alignment', message: '⚠ Limited reference to UN principles. Strengthen alignment with UN Charter.' });
  }
  
  score += alignmentScore;
  
  return {
    score,
    maxScore,
    percentage: Math.round((score / maxScore) * 100),
    feedback,
    analysis: {
      wordCount: analysis.wordCount,
      perambulatoryClauses: perambCount,
      operativeClauses: operativeCount,
      numberedClauses: numberedClauses.length
    },
    breakdown: {
      format: { score: formatScore, max: 15 },
      clauses: { score: clauseScore, max: 20 },
      comprehensiveness: { score: comprehensivenessScore, max: 20 },
      feasibility: { score: feasibilityScore, max: 25 },
      collaboration: { score: collaborationScore, max: 10 },
      alignment: { score: alignmentScore, max: 10 }
    }
  };
}

/**
 * Evaluate Draft Resolution
 */
export function evaluateDraftResolution(text, metadata = {}) {
  const analysis = analyzeText(text);
  const feedback = [];
  let score = 0;
  const maxScore = 100;
  
  // Format & Structure (15 points)
  let formatScore = 0;
  
  // Check header block
  const hasCommittee = /committee:/i.test(text);
  const hasTopic = /topic:/i.test(text);
  const hasSponsors = /sponsors?:/i.test(text);
  const hasSignatories = /signatories:/i.test(text);
  
  const headerComplete = hasCommittee && hasTopic && hasSponsors && hasSignatories;
  
  if (headerComplete) {
    formatScore += 8;
    feedback.push({ type: 'success', category: 'Format', message: '✓ Complete header block with all required elements' });
  } else {
    const missing = [];
    if (!hasCommittee) missing.push('Committee');
    if (!hasTopic) missing.push('Topic');
    if (!hasSponsors) missing.push('Sponsors');
    if (!hasSignatories) missing.push('Signatories');
    
    formatScore += 3;
    feedback.push({ type: 'error', category: 'Format', message: `✗ Incomplete header. Missing: ${missing.join(', ')}` });
  }
  
  // Check for proper section division
  const hasPreamble = /preamble/i.test(text) || PERAMBULATORY_VERBS.some(verb => 
    new RegExp(`\\b${verb}\\b`, 'gi').test(text)
  );
  
  const hasOperativeSection = /operative/i.test(text) || OPERATIVE_VERBS.some(verb => 
    new RegExp(`\\b${verb}\\b`, 'gi').test(text)
  );
  
  if (hasPreamble && hasOperativeSection) {
    formatScore += 7;
    feedback.push({ type: 'success', category: 'Format', message: '✓ Proper preamble and operative sections' });
  } else {
    formatScore += 3;
    feedback.push({ type: 'error', category: 'Format', message: '✗ Must have distinct preamble and operative sections' });
  }
  
  score += formatScore;
  
  // Preamble Quality (20 points)
  let preambleScore = 0;
  
  const perambCount = PERAMBULATORY_VERBS.reduce((count, verb) => 
    count + (text.match(new RegExp(`\\b${verb}\\b`, 'gi')) || []).length, 0
  );
  
  if (perambCount >= 5) {
    preambleScore += 12;
    feedback.push({ type: 'success', category: 'Preamble', message: `✓ Strong preamble (${perambCount} clauses)` });
  } else if (perambCount >= 3) {
    preambleScore += 8;
    feedback.push({ type: 'success', category: 'Preamble', message: `✓ Adequate preamble (${perambCount} clauses). Consider adding more context.` });
  } else if (perambCount > 0) {
    preambleScore += 4;
    feedback.push({ type: 'warning', category: 'Preamble', message: `⚠ Weak preamble (${perambCount} clauses). Need 3-5 minimum.` });
  } else {
    feedback.push({ type: 'error', category: 'Preamble', message: '✗ No perambulatory clauses found. Preamble is required.' });
  }
  
  // Check for references to past actions
  const hasResolutions = /resolution \d+|A\/RES\/|S\/RES\//gi.test(text);
  const hasTreaties = /treaty|convention|protocol|charter/gi.test(text);
  
  if (hasResolutions) {
    preambleScore += 4;
    feedback.push({ type: 'success', category: 'Preamble', message: '✓ References past UN resolutions' });
  } else {
    feedback.push({ type: 'info', category: 'Preamble', message: 'ℹ Consider referencing relevant past UN resolutions' });
  }
  
  if (hasTreaties) {
    preambleScore += 4;
    feedback.push({ type: 'success', category: 'Preamble', message: '✓ References international treaties/conventions' });
  }
  
  score += preambleScore;
  
  // Operative Clause Effectiveness (25 points)
  let operativeScore = 0;
  
  const operativeCount = OPERATIVE_VERBS.reduce((count, verb) => 
    count + (text.match(new RegExp(`\\b${verb}\\b`, 'gi')) || []).length, 0
  );
  
  if (operativeCount >= 8) {
    operativeScore += 15;
    feedback.push({ type: 'success', category: 'Operative', message: `✓ Comprehensive operative section (${operativeCount} clauses)` });
  } else if (operativeCount >= 5) {
    operativeScore += 12;
    feedback.push({ type: 'success', category: 'Operative', message: `✓ Good operative section (${operativeCount} clauses)` });
  } else if (operativeCount >= 3) {
    operativeScore += 8;
    feedback.push({ type: 'warning', category: 'Operative', message: `⚠ Limited operative clauses (${operativeCount}). Add more specific actions.` });
  } else {
    operativeScore += 3;
    feedback.push({ type: 'error', category: 'Operative', message: `✗ Insufficient operative clauses (${operativeCount}). Minimum 5 required.` });
  }
  
  // Check for sub-clauses
  const hasSubClauses = /\n\s+[a-z]\)|\n\s+\([a-z]\)/gi.test(text);
  if (hasSubClauses) {
    operativeScore += 5;
    feedback.push({ type: 'success', category: 'Operative', message: '✓ Uses sub-clauses for detailed specifications' });
  } else {
    feedback.push({ type: 'info', category: 'Operative', message: 'ℹ Consider using sub-clauses for more detailed provisions' });
  }
  
  // Check for strong action verbs
  const strongVerbs = ['urges', 'calls upon', 'requests', 'recommends', 'encourages', 'authorizes'];
  const strongVerbCount = strongVerbs.reduce((count, verb) => 
    count + (text.match(new RegExp(`\\b${verb}\\b`, 'gi')) || []).length, 0
  );
  
  if (strongVerbCount >= 3) {
    operativeScore += 5;
    feedback.push({ type: 'success', category: 'Operative', message: '✓ Uses effective action verbs' });
  } else {
    operativeScore += 2;
    feedback.push({ type: 'info', category: 'Operative', message: 'ℹ Use stronger action verbs (urges, calls upon, requests)' });
  }
  
  score += operativeScore;
  
  // Specificity & Implementation (20 points)
  let specificityScore = 0;
  
  // Check for specific details
  const hasNumbers = /\$\d+|USD|million|billion|\d+%/gi.test(text);
  const hasTimelines = /by \d{4}|within \d+|\d+-year|annual|quarterly/gi.test(text);
  const hasMechanisms = /establish|create|form|develop.*(?:committee|fund|program|initiative)/gi.test(text);
  
  if (hasNumbers) {
    specificityScore += 5;
    feedback.push({ type: 'success', category: 'Specificity', message: '✓ Includes specific numbers/amounts' });
  } else {
    feedback.push({ type: 'warning', category: 'Specificity', message: '⚠ Add specific numbers, percentages, or amounts' });
  }
  
  if (hasTimelines) {
    specificityScore += 5;
    feedback.push({ type: 'success', category: 'Specificity', message: '✓ Includes timelines for implementation' });
  } else {
    specificityScore += 2;
    feedback.push({ type: 'warning', category: 'Specificity', message: '⚠ Add specific timelines for implementation' });
  }
  
  if (hasMechanisms) {
    specificityScore += 5;
    feedback.push({ type: 'success', category: 'Specificity', message: '✓ Establishes implementation mechanisms' });
  } else {
    specificityScore += 2;
    feedback.push({ type: 'warning', category: 'Specificity', message: '⚠ Specify mechanisms for implementation (committees, funds, programs)' });
  }
  
  // Check for monitoring and evaluation
  const hasMonitoring = /(monitor|review|evaluate|report|assess).*progress/gi.test(text);
  if (hasMonitoring) {
    specificityScore += 5;
    feedback.push({ type: 'success', category: 'Specificity', message: '✓ Includes monitoring and evaluation provisions' });
  } else {
    specificityScore += 2;
    feedback.push({ type: 'info', category: 'Specificity', message: 'ℹ Add monitoring and evaluation mechanisms' });
  }
  
  score += specificityScore;
  
  // Diplomatic Language (10 points)
  let languageScore = 0;
  
  const diplomaticWords = ['cooperation', 'collaboration', 'recognizing', 'acknowledging', 'respecting', 'considering'];
  const diplomaticCount = diplomaticWords.reduce((count, word) => 
    count + (text.match(new RegExp(`\\b${word}\\b`, 'gi')) || []).length, 0
  );
  
  if (diplomaticCount >= 5) {
    languageScore += 6;
    feedback.push({ type: 'success', category: 'Language', message: '✓ Excellent diplomatic tone' });
  } else if (diplomaticCount >= 3) {
    languageScore += 4;
    feedback.push({ type: 'success', category: 'Language', message: '✓ Good diplomatic language' });
  } else {
    languageScore += 2;
    feedback.push({ type: 'warning', category: 'Language', message: '⚠ Use more diplomatic language' });
  }
  
  // Check for confrontational language
  const confrontational = /(must|shall|demand|force|compel)\b/gi;
  const hasConfrontational = confrontational.test(text);
  
  if (!hasConfrontational) {
    languageScore += 4;
    feedback.push({ type: 'success', category: 'Language', message: '✓ Avoids confrontational language' });
  } else {
    languageScore += 1;
    feedback.push({ type: 'warning', category: 'Language', message: '⚠ Avoid confrontational terms. Use diplomatic alternatives.' });
  }
  
  score += languageScore;
  
  // UN Charter Compliance (10 points)
  let complianceScore = 0;
  
  const unPrinciples = ['human rights', 'sovereignty', 'territorial integrity', 'self-determination', 'peaceful', 'international law'];
  const principlesCount = unPrinciples.reduce((count, principle) => 
    count + (text.match(new RegExp(principle, 'gi')) || []).length, 0
  );
  
  if (principlesCount >= 4) {
    complianceScore += 10;
    feedback.push({ type: 'success', category: 'UN Compliance', message: '✓ Strongly aligned with UN Charter principles' });
  } else if (principlesCount >= 2) {
    complianceScore += 6;
    feedback.push({ type: 'success', category: 'UN Compliance', message: '✓ Reflects UN Charter principles' });
  } else if (principlesCount > 0) {
    complianceScore += 3;
    feedback.push({ type: 'warning', category: 'UN Compliance', message: '⚠ Limited reference to UN Charter principles' });
  } else {
    complianceScore += 1;
    feedback.push({ type: 'warning', category: 'UN Compliance', message: '⚠ Ensure alignment with UN Charter and international law' });
  }
  
  score += complianceScore;
  
  return {
    score,
    maxScore,
    percentage: Math.round((score / maxScore) * 100),
    feedback,
    analysis: {
      wordCount: analysis.wordCount,
      perambulatoryClauses: perambCount,
      operativeClauses: operativeCount,
      hasProperFormat: headerComplete
    },
    breakdown: {
      format: { score: formatScore, max: 15 },
      preamble: { score: preambleScore, max: 20 },
      operative: { score: operativeScore, max: 25 },
      specificity: { score: specificityScore, max: 20 },
      language: { score: languageScore, max: 10 },
      compliance: { score: complianceScore, max: 10 }
    }
  };
}

/**
 * Evaluate Op-Ed
 */
export function evaluateOpEd(text, metadata = {}) {
  const analysis = analyzeText(text);
  const citations = findCitations(text);
  const feedback = [];
  let score = 0;
  const maxScore = 100;
  
  // Compelling Opening (15 points)
  let openingScore = 0;
  
  const firstParagraph = analysis.paragraphs[0] || '';
  
  // Check for engaging opening techniques
  const hasQuestion = /^[^.!?]*\?/.test(firstParagraph);
  const hasStatistic = /\d+%|\d+\s*(million|billion)/.test(firstParagraph);
  const hasQuote = /[""]/.test(firstParagraph);
  const hasAnecdote = firstParagraph.length > 150;
  
  if (hasQuestion || hasStatistic || hasQuote || hasAnecdote) {
    openingScore += 10;
    const techniques = [];
    if (hasQuestion) techniques.push('rhetorical question');
    if (hasStatistic) techniques.push('statistic');
    if (hasQuote) techniques.push('quote');
    if (hasAnecdote) techniques.push('anecdote');
    feedback.push({ type: 'success', category: 'Opening', message: `✓ Engaging opening with ${techniques.join(', ')}` });
  } else {
    openingScore += 4;
    feedback.push({ type: 'warning', category: 'Opening', message: '⚠ Opening could be more engaging. Try a question, statistic, quote, or anecdote.' });
  }
  
  // Check headline
  const hasHeadline = firstParagraph.length < 100 && analysis.paragraphs.length > 1;
  if (hasHeadline) {
    openingScore += 5;
    feedback.push({ type: 'success', category: 'Opening', message: '✓ Clear headline present' });
  } else {
    openingScore += 2;
    feedback.push({ type: 'info', category: 'Opening', message: 'ℹ Consider adding a compelling headline' });
  }
  
  score += openingScore;
  
  // Argument Strength & Logic (25 points)
  let argumentScore = 0;
  
  // Check for clear thesis
  const opinionWords = ['believe', 'argue', 'contend', 'maintain', 'assert', 'propose', 'advocate'];
  const hasOpinion = opinionWords.some(word => new RegExp(`\\b${word}\\b`, 'gi').test(text));
  
  if (hasOpinion) {
    argumentScore += 8;
    feedback.push({ type: 'success', category: 'Argument', message: '✓ Clear opinion/thesis stated' });
  } else {
    argumentScore += 3;
    feedback.push({ type: 'warning', category: 'Argument', message: '⚠ Opinion/thesis should be more explicit' });
  }
  
  // Check for logical connectors
  const logicalConnectors = ['therefore', 'however', 'moreover', 'furthermore', 'consequently', 'thus', 'nevertheless', 'additionally'];
  const connectorCount = logicalConnectors.reduce((count, connector) => 
    count + (text.match(new RegExp(`\\b${connector}\\b`, 'gi')) || []).length, 0
  );
  
  if (connectorCount >= 5) {
    argumentScore += 9;
    feedback.push({ type: 'success', category: 'Argument', message: '✓ Strong logical flow and transitions' });
  } else if (connectorCount >= 3) {
    argumentScore += 6;
    feedback.push({ type: 'success', category: 'Argument', message: '✓ Good logical structure. Could strengthen transitions.' });
  } else {
    argumentScore += 3;
    feedback.push({ type: 'warning', category: 'Argument', message: '⚠ Add more logical connectors for better flow' });
  }
  
  // Check paragraph development (3-5 paragraphs for body)
  if (analysis.paragraphs.length >= 5 && analysis.paragraphs.length <= 8) {
    argumentScore += 8;
    feedback.push({ type: 'success', category: 'Argument', message: `✓ Well-developed argument (${analysis.paragraphs.length} paragraphs)` });
  } else if (analysis.paragraphs.length < 5) {
    argumentScore += 4;
    feedback.push({ type: 'warning', category: 'Argument', message: '⚠ Argument needs more development. Add more supporting paragraphs.' });
  } else {
    argumentScore += 6;
    feedback.push({ type: 'info', category: 'Argument', message: 'ℹ Consider consolidating. Op-eds should be concise.' });
  }
  
  score += argumentScore;
  
  // Evidence & Examples (20 points)
  let evidenceScore = 0;
  
  // Check for evidence types
  const hasStatistics = /\d+%|\d+\s*(million|billion|thousand)/gi.test(text);
  const hasExamples = /(for example|for instance|such as|including)/gi.test(text);
  const hasExpertQuotes = /(according to|expert|researcher|study|report)/gi.test(text);
  
  if (hasStatistics) {
    evidenceScore += 7;
    feedback.push({ type: 'success', category: 'Evidence', message: '✓ Includes statistical evidence' });
  } else {
    evidenceScore += 2;
    feedback.push({ type: 'warning', category: 'Evidence', message: '⚠ Add statistics to strengthen arguments' });
  }
  
  if (hasExamples) {
    evidenceScore += 7;
    feedback.push({ type: 'success', category: 'Evidence', message: '✓ Provides concrete examples' });
  } else {
    evidenceScore += 2;
    feedback.push({ type: 'warning', category: 'Evidence', message: '⚠ Include specific examples to illustrate points' });
  }
  
  if (hasExpertQuotes) {
    evidenceScore += 6;
    feedback.push({ type: 'success', category: 'Evidence', message: '✓ References expert opinions or studies' });
  } else {
    evidenceScore += 2;
    feedback.push({ type: 'info', category: 'Evidence', message: 'ℹ Consider citing experts or studies for credibility' });
  }
  
  score += evidenceScore;
  
  // Persuasiveness (20 points)
  let persuasionScore = 0;
  
  // Check for emotional appeal
  const emotionalWords = ['crucial', 'vital', 'essential', 'urgent', 'critical', 'imperative', 'devastating', 'remarkable'];
  const emotionalCount = emotionalWords.reduce((count, word) => 
    count + (text.match(new RegExp(`\\b${word}\\b`, 'gi')) || []).length, 0
  );
  
  if (emotionalCount >= 3) {
    persuasionScore += 8;
    feedback.push({ type: 'success', category: 'Persuasion', message: '✓ Effective emotional appeal' });
  } else {
    persuasionScore += 4;
    feedback.push({ type: 'info', category: 'Persuasion', message: 'ℹ Use more persuasive language to emphasize importance' });
  }
  
  // Check for call to action
  const hasCallToAction = /(must|should|need to|ought to|call on|urge).*(?:action|act|change)/gi.test(text);
  if (hasCallToAction) {
    persuasionScore += 7;
    feedback.push({ type: 'success', category: 'Persuasion', message: '✓ Strong call to action' });
  } else {
    persuasionScore += 3;
    feedback.push({ type: 'warning', category: 'Persuasion', message: '⚠ Add clear call to action in conclusion' });
  }
  
  // Check for addressing counterarguments
  const hasCounterargument = /(although|while|despite|critics|opponents|some argue|some say)/gi.test(text);
  if (hasCounterargument) {
    persuasionScore += 5;
    feedback.push({ type: 'success', category: 'Persuasion', message: '✓ Addresses counterarguments' });
  } else {
    persuasionScore += 1;
    feedback.push({ type: 'info', category: 'Persuasion', message: 'ℹ Consider addressing opposing viewpoints' });
  }
  
  score += persuasionScore;
  
  // Writing Style & Engagement (15 points)
  let styleScore = 0;
  
  // Word count check (600-800 ideal)
  if (analysis.wordCount >= 600 && analysis.wordCount <= 800) {
    styleScore += 5;
    feedback.push({ type: 'success', category: 'Style', message: `✓ Ideal length (${analysis.wordCount} words)` });
  } else if (analysis.wordCount < 600) {
    styleScore += 2;
    feedback.push({ type: 'warning', category: 'Style', message: `⚠ Too short (${analysis.wordCount} words). Aim for 600-800.` });
  } else if (analysis.wordCount > 1000) {
    styleScore += 3;
    feedback.push({ type: 'warning', category: 'Style', message: `⚠ Too long (${analysis.wordCount} words). Op-eds should be concise.` });
  } else {
    styleScore += 4;
    feedback.push({ type: 'success', category: 'Style', message: `✓ Good length (${analysis.wordCount} words)` });
  }
  
  // Check readability (sentence length)
  if (analysis.avgWordsPerSentence >= 12 && analysis.avgWordsPerSentence <= 20) {
    styleScore += 5;
    feedback.push({ type: 'success', category: 'Style', message: '✓ Excellent readability' });
  } else if (analysis.avgWordsPerSentence < 12) {
    styleScore += 3;
    feedback.push({ type: 'info', category: 'Style', message: 'ℹ Sentences are very short. Vary sentence length for better flow.' });
  } else {
    styleScore += 3;
    feedback.push({ type: 'warning', category: 'Style', message: '⚠ Long sentences reduce readability. Break them up.' });
  }
  
  // Check for engaging language
  const hasActiveVoice = /(we|our|us|you|your)\b/gi.test(text);
  if (hasActiveVoice) {
    styleScore += 5;
    feedback.push({ type: 'success', category: 'Style', message: '✓ Engaging, accessible language' });
  } else {
    styleScore += 2;
    feedback.push({ type: 'info', category: 'Style', message: 'ℹ Use active voice and direct address for engagement' });
  }
  
  score += styleScore;
  
  // Country Perspective (5 points)
  let perspectiveScore = 0;
  
  if (metadata.country) {
    const countryMentions = (text.match(new RegExp(metadata.country, 'gi')) || []).length;
    if (countryMentions >= 2) {
      perspectiveScore += 5;
      feedback.push({ type: 'success', category: 'Perspective', message: `✓ Clear country perspective (${metadata.country})` });
    } else {
      perspectiveScore += 2;
      feedback.push({ type: 'info', category: 'Perspective', message: 'ℹ Strengthen country-specific perspective' });
    }
  } else {
    perspectiveScore += 3;
    feedback.push({ type: 'info', category: 'Perspective', message: 'ℹ Country not specified for evaluation' });
  }
  
  score += perspectiveScore;
  
  return {
    score,
    maxScore,
    percentage: Math.round((score / maxScore) * 100),
    feedback,
    analysis: {
      wordCount: analysis.wordCount,
      paragraphCount: analysis.paragraphs.length,
      avgSentenceLength: Math.round(analysis.avgWordsPerSentence)
    },
    breakdown: {
      opening: { score: openingScore, max: 15 },
      argument: { score: argumentScore, max: 25 },
      evidence: { score: evidenceScore, max: 20 },
      persuasion: { score: persuasionScore, max: 20 },
      style: { score: styleScore, max: 15 },
      perspective: { score: perspectiveScore, max: 5 }
    }
  };
}

/**
 * Main evaluation function - routes to appropriate evaluator
 */
export async function evaluateDocument(file, documentType, metadata = {}) {
  try {
    // Extract text from file
    const text = await extractTextFromFile(file);
    
    if (!text || text.trim().length === 0) {
      throw new Error('Unable to extract text from file or file is empty');
    }
    
    // Route to appropriate evaluator
    let result;
    switch (documentType) {
      case DOCUMENT_TYPES.POSITION_PAPER:
        result = evaluatePositionPaper(text, metadata);
        break;
      case DOCUMENT_TYPES.WORKING_PAPER:
        result = evaluateWorkingPaper(text, metadata);
        break;
      case DOCUMENT_TYPES.DRAFT_RESOLUTION:
        result = evaluateDraftResolution(text, metadata);
        break;
      case DOCUMENT_TYPES.OP_ED:
        result = evaluateOpEd(text, metadata);
        break;
      default:
        throw new Error(`Unknown document type: ${documentType}`);
    }
    
    // Add metadata to result
    result.metadata = {
      fileName: file.name,
      fileSize: file.size,
      documentType,
      evaluationDate: new Date().toISOString(),
      ...metadata
    };
    
    return result;
    
  } catch (error) {
    console.error('Error evaluating document:', error);
    throw error;
  }
}
