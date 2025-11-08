/**
 * Enhanced Search Engine with Semantic Matching and Typo Tolerance
 * 
 * Features:
 * - Semantic keyword expansion
 * - Fuzzy string matching (typo handling)
 * - Relevance scoring
 * - Stemming and lemmatization approximation
 */

// Levenshtein distance for typo tolerance
function levenshteinDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix = Array(len2 + 1).fill(null).map(() => Array(len1 + 1).fill(0));

  for (let i = 0; i <= len1; i++) matrix[0][i] = i;
  for (let j = 0; j <= len2; j++) matrix[j][0] = j;

  for (let j = 1; j <= len2; j++) {
    for (let i = 1; i <= len1; i++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,     // deletion
        matrix[j - 1][i] + 1,     // insertion
        matrix[j - 1][i - 1] + cost // substitution
      );
    }
  }

  return matrix[len2][len1];
}

// Calculate similarity ratio (0 to 1)
function similarityRatio(str1, str2) {
  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
  const maxLen = Math.max(str1.length, str2.length);
  return maxLen === 0 ? 1 : 1 - distance / maxLen;
}

// Simple word stemming (removes common suffixes)
function stem(word) {
  const suffixes = ['ing', 'ed', 'es', 's', 'tion', 'ation', 'ment', 'ness', 'ity', 'ful', 'less', 'ive'];
  let stemmed = word.toLowerCase();
  
  for (const suffix of suffixes) {
    if (stemmed.endsWith(suffix) && stemmed.length > suffix.length + 2) {
      stemmed = stemmed.slice(0, -suffix.length);
      break;
    }
  }
  
  return stemmed;
}

// Semantic keyword expansion - maps user terms to related concepts
const semanticMap = {
  // Leadership & Governance
  'leader': ['leadership', 'executive', 'director', 'board', 'governance', 'management', 'administration'],
  'leadership': ['leader', 'executive', 'director', 'board', 'governance', 'management'],
  'executive': ['leadership', 'director', 'management', 'administration', 'board'],
  'governance': ['leadership', 'management', 'administration', 'executive', 'board'],
  'board': ['trustees', 'governance', 'leadership', 'executive', 'director'],
  
  // Programs & Activities
  'program': ['programs', 'initiative', 'project', 'activity', 'workshop', 'training'],
  'workshop': ['training', 'seminar', 'program', 'session', 'education'],
  'training': ['workshop', 'education', 'learning', 'development', 'program'],
  'event': ['conference', 'summit', 'forum', 'meeting', 'gathering'],
  'conference': ['summit', 'event', 'forum', 'meeting', 'convention'],
  
  // Youth & Students
  'youth': ['student', 'young', 'teenager', 'adolescent', 'junior'],
  'student': ['youth', 'learner', 'pupil', 'participant'],
  'young': ['youth', 'student', 'junior', 'adolescent'],
  
  // Participation & Involvement
  'participate': ['involvement', 'engagement', 'join', 'volunteer', 'contribute'],
  'volunteer': ['participate', 'contribute', 'help', 'serve', 'involvement'],
  'join': ['participate', 'enroll', 'register', 'signup', 'involvement'],
  'involvement': ['participation', 'engagement', 'contribute', 'volunteer'],
  
  // Financial
  'donate': ['contribution', 'give', 'support', 'fund', 'donation', 'donor'],
  'donation': ['contribute', 'give', 'support', 'fund', 'donor'],
  'donor': ['contributor', 'supporter', 'philanthropist', 'benefactor'],
  'fund': ['funding', 'finance', 'support', 'donation', 'money'],
  'money': ['fund', 'finance', 'donation', 'contribution', 'financial'],
  
  // Research & Publications
  'research': ['study', 'analysis', 'investigation', 'publication', 'paper'],
  'study': ['research', 'analysis', 'investigation', 'examination'],
  'publication': ['paper', 'article', 'report', 'document', 'research'],
  'article': ['publication', 'paper', 'news', 'story', 'report'],
  
  // Advocacy & Action
  'advocacy': ['campaign', 'initiative', 'activism', 'promotion', 'support'],
  'action': ['initiative', 'campaign', 'activity', 'advocacy', 'movement'],
  'campaign': ['initiative', 'advocacy', 'movement', 'action', 'effort'],
  
  // Organization & Structure
  'organization': ['foundation', 'institution', 'ngo', 'nonprofit', 'charity'],
  'foundation': ['organization', 'institution', 'charity', 'nonprofit'],
  'nonprofit': ['ngo', 'charity', 'foundation', 'organization'],
  
  // UN & International
  'un': ['united nations', 'international', 'global', 'multilateral'],
  'international': ['global', 'worldwide', 'universal', 'un', 'multilateral'],
  'global': ['international', 'worldwide', 'universal', 'world'],
  'mun': ['model un', 'model united nations', 'dmun', 'simulation'],
  
  // Ethics & Values
  'integrity': ['ethics', 'honesty', 'transparency', 'accountability', 'trust'],
  'ethics': ['integrity', 'moral', 'values', 'principles', 'conduct'],
  'transparency': ['openness', 'accountability', 'clarity', 'honesty'],
  
  // Impact & Results
  'impact': ['effect', 'influence', 'result', 'outcome', 'achievement'],
  'achievement': ['accomplishment', 'success', 'result', 'impact'],
  'success': ['achievement', 'accomplishment', 'impact', 'result'],
  
  // Communication & News
  'news': ['article', 'update', 'press', 'announcement', 'newsroom'],
  'newsroom': ['news', 'press', 'media', 'articles', 'updates'],
  'press': ['news', 'media', 'release', 'announcement'],
  
  // Membership & Community
  'member': ['membership', 'participant', 'affiliate', 'associate'],
  'membership': ['member', 'enrollment', 'affiliation', 'participation'],
  'community': ['network', 'group', 'society', 'collective'],
  
  // Education & Learning
  'education': ['learning', 'teaching', 'training', 'instruction', 'academic'],
  'learning': ['education', 'training', 'development', 'study'],
  'academic': ['educational', 'scholarly', 'learning', 'university'],
  
  // Mission & Purpose
  'mission': ['purpose', 'goal', 'objective', 'vision', 'mandate'],
  'vision': ['mission', 'goal', 'aspiration', 'objective'],
  'goal': ['objective', 'target', 'aim', 'mission', 'purpose'],
};

// Expand search terms with semantic variations
function expandSearchTerms(searchTerm) {
  const words = searchTerm.toLowerCase().split(/\s+/).filter(w => w.length > 2);
  const expanded = new Set(words);
  
  words.forEach(word => {
    const stemmed = stem(word);
    expanded.add(stemmed);
    
    // Add semantic variations
    if (semanticMap[word]) {
      semanticMap[word].forEach(variant => expanded.add(variant));
    }
    if (semanticMap[stemmed]) {
      semanticMap[stemmed].forEach(variant => expanded.add(variant));
    }
  });
  
  return Array.from(expanded);
}

// Extract words from content for matching
function extractWords(content) {
  return content.toLowerCase()
    .split(/[\s,.\-_():;!?'"]+/)
    .filter(w => w.length > 2);
}

// Calculate relevance score for an item
function calculateRelevance(item, searchTerms, originalQuery) {
  let score = 0;
  const content = item.content.toLowerCase();
  const title = item.title.toLowerCase();
  const contentWords = extractWords(content);
  const titleWords = extractWords(title);
  
  searchTerms.forEach(term => {
    // Exact match in title (highest weight)
    if (title.includes(term)) {
      score += 100;
    }
    
    // Exact match in content
    const exactMatches = (content.match(new RegExp(term, 'gi')) || []).length;
    score += exactMatches * 10;
    
    // Fuzzy matching in title words
    titleWords.forEach(word => {
      const similarity = similarityRatio(term, word);
      if (similarity >= 0.75) { // 75% similar or more
        score += similarity * 50;
      }
    });
    
    // Fuzzy matching in content words
    contentWords.forEach(word => {
      const similarity = similarityRatio(term, word);
      if (similarity >= 0.8) { // 80% similar or more
        score += similarity * 5;
      }
    });
    
    // Stemmed matching
    const stemmedTerm = stem(term);
    contentWords.forEach(word => {
      if (stem(word) === stemmedTerm) {
        score += 3;
      }
    });
  });
  
  // Bonus for matching original query as phrase
  if (content.includes(originalQuery.toLowerCase())) {
    score += 50;
  }
  
  // Bonus for title length (shorter titles often more relevant)
  if (score > 0) {
    score += Math.max(0, 20 - title.length / 5);
  }
  
  return score;
}

/**
 * Enhanced search function with semantic understanding and typo tolerance
 * 
 * @param {Array} data - Array of searchable items with { title, path, content }
 * @param {string} query - User's search query
 * @param {number} minScore - Minimum relevance score threshold (default: 1)
 * @returns {Array} Sorted array of results with relevance scores
 */
export function enhancedSearch(data, query, minScore = 1) {
  if (!query || query.trim().length === 0) {
    return [];
  }
  
  const originalQuery = query.trim();
  const expandedTerms = expandSearchTerms(originalQuery);
  
  // Calculate relevance for each item
  const results = data
    .map(item => ({
      ...item,
      relevance: calculateRelevance(item, expandedTerms, originalQuery)
    }))
    .filter(item => item.relevance >= minScore)
    .sort((a, b) => b.relevance - a.relevance); // Sort by relevance (highest first)
  
  return results;
}

/**
 * Simple search fallback (for backwards compatibility)
 */
export function simpleSearch(data, query) {
  const searchTerm = query.toLowerCase().trim();
  return data.filter(item => 
    item.content.toLowerCase().includes(searchTerm) ||
    item.title.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get search suggestions based on partial input
 */
export function getSearchSuggestions(data, partialQuery, maxSuggestions = 5) {
  if (!partialQuery || partialQuery.length < 2) {
    return [];
  }
  
  const query = partialQuery.toLowerCase();
  const suggestions = new Set();
  
  data.forEach(item => {
    const words = extractWords(item.content + ' ' + item.title);
    words.forEach(word => {
      if (word.startsWith(query) && word.length > query.length) {
        suggestions.add(word);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, maxSuggestions);
}

export default enhancedSearch;
