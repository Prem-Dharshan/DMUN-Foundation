# Enhanced Search System Documentation

## Overview

The DMUN Foundation website now features an **intelligent search engine** with semantic understanding and typo tolerance capabilities. The search goes beyond simple word matching to understand user intent and handle spelling mistakes.

---

## Key Features

### 1. **Semantic Search**

The search engine understands relationships between words and concepts. For example:

- Searching for "**leader**" will also find results containing: _leadership_, _executive_, _director_, _board_, _governance_
- Searching for "**volunteer**" will find: _participate_, _contribute_, _help_, _serve_, _involvement_
- Searching for "**donate**" will find: _contribution_, _give_, _support_, _fund_, _donor_

### 2. **Typo Tolerance**

The system can handle common spelling mistakes using fuzzy matching:

- "**leadrship**" → finds "leadership"
- "**donaton**" → finds "donation"
- "**reserch**" → finds "research"
- "**volenteer**" → finds "volunteer"

**Similarity Threshold:**

- 75% similarity for title matches
- 80% similarity for content matches

### 3. **Stemming**

The search automatically handles word variations:

- "**running**" → matches "run"
- "**participated**" → matches "participate"
- "**donated**" → matches "donate"

### 4. **Relevance Scoring**

Results are ranked by relevance with multiple factors:

| Match Type                    | Score Weight              |
| ----------------------------- | ------------------------- |
| Exact match in title          | +100 points               |
| Exact match in content        | +10 points per occurrence |
| Fuzzy match in title (75%+)   | +50 points × similarity   |
| Fuzzy match in content (80%+) | +5 points × similarity    |
| Stemmed match                 | +3 points                 |
| Phrase match                  | +50 points bonus          |

**Relevance Categories:**

- 🟢 **Highly Relevant**: Score ≥ 100
- 🔵 **Very Relevant**: Score ≥ 50
- 🟡 **Relevant**: Score ≥ 20
- ⚪ **Related**: Score ≥ 1

---

## Semantic Keyword Map

The search engine includes over **200+ semantic relationships** across these categories:

### Leadership & Governance

- leader, leadership, executive, director, board, governance, management

### Programs & Activities

- program, workshop, training, event, conference, seminar, initiative

### Youth & Students

- youth, student, young, teenager, adolescent, junior, learner

### Participation & Involvement

- participate, volunteer, join, involvement, engagement, contribute

### Financial

- donate, donation, donor, fund, contribution, support, finance

### Research & Publications

- research, study, analysis, publication, article, paper, report

### Advocacy & Action

- advocacy, campaign, initiative, activism, action, movement

### Organization & Structure

- organization, foundation, institution, ngo, nonprofit, charity

### UN & International

- un, united nations, international, global, mun, model un, dmun

### Ethics & Values

- integrity, ethics, transparency, accountability, honesty

### Impact & Results

- impact, effect, influence, result, outcome, achievement

### Communication & News

- news, article, update, press, announcement, newsroom

### Membership & Community

- member, membership, participant, community, network

### Education & Learning

- education, learning, teaching, training, academic

### Mission & Purpose

- mission, vision, goal, objective, purpose, mandate

---

## How to Use

### For End Users

1. **Click the "Search" button** in the header
2. **Type your query** - can include typos!
3. **Press Enter** to search
4. **View results** sorted by relevance with indicators

**Search Tips:**

- Use general terms for broader results
- Try related words if you don't find what you need
- Don't worry about exact spelling
- Use phrases for more specific results

### For Developers

#### Import the search engine:

```javascript
import { enhancedSearch } from "../utils/searchEngine";
```

#### Basic usage:

```javascript
const results = enhancedSearch(data, searchQuery, minScore);
// data: Array of { title, path, content }
// searchQuery: String from user
// minScore: Minimum relevance threshold (default: 1)
```

#### Example:

```javascript
const searchData = [
  {
    title: "Executive Leadership",
    path: "/leadership",
    content: "Meet our executive board and leadership team...",
  },
  // ... more items
];

const results = enhancedSearch(searchData, "leader", 1);
// Returns sorted results with relevance scores
```

---

## Technical Implementation

### Algorithm Components

1. **Levenshtein Distance**

   - Calculates edit distance between strings
   - Used for typo detection

2. **Similarity Ratio**

   - Converts distance to 0-1 similarity score
   - Threshold-based matching

3. **Word Stemming**

   - Removes common suffixes (ing, ed, tion, etc.)
   - Normalizes word variations

4. **Semantic Expansion**

   - Maps query terms to related concepts
   - Expands search coverage

5. **Multi-factor Scoring**
   - Weighted combination of match types
   - Title matches prioritized over content

### Performance Characteristics

- **Time Complexity**: O(n × m × k)
  - n = number of items
  - m = average content length
  - k = number of search terms
- **Space Complexity**: O(n + t)

  - n = number of results
  - t = number of expanded terms

- **Typical Performance**:
  - < 50ms for ~100 items
  - Suitable for client-side search

---

## Configuration

### Adjusting Similarity Thresholds

In `searchEngine.js`:

```javascript
// Line ~143: Title fuzzy matching
if (similarity >= 0.75) {
  // Change threshold here
  score += similarity * 50;
}

// Line ~149: Content fuzzy matching
if (similarity >= 0.8) {
  // Change threshold here
  score += similarity * 5;
}
```

### Modifying Score Weights

```javascript
// Exact match in title
if (title.includes(term)) {
  score += 100; // Adjust weight
}

// Exact match in content
score += exactMatches * 10; // Adjust multiplier
```

### Adding Semantic Relationships

In `semanticMap` object:

```javascript
const semanticMap = {
  yourterm: ["related1", "related2", "related3"],
  // ... add more mappings
};
```

---

## Future Enhancements

### Planned Features:

- [ ] Search history and suggestions
- [ ] Auto-complete with fuzzy suggestions
- [ ] Search result highlighting
- [ ] Filter by content type (articles, pages, etc.)
- [ ] Date range filtering for newsroom
- [ ] Advanced search syntax (AND, OR, NOT)
- [ ] Machine learning-based relevance tuning

### Potential Improvements:

- [ ] Server-side search for larger datasets
- [ ] Full-text search indexing
- [ ] Natural language processing (NLP)
- [ ] Multi-language support
- [ ] Voice search integration

---

## Testing the Search

### Test Cases

1. **Semantic Understanding**

   ```
   Query: "leader"
   Should find: Executive Leadership, Board of Trustees, Director articles
   ```

2. **Typo Handling**

   ```
   Query: "donaton"
   Should find: Donate, Donation, Donor Relations
   ```

3. **Stemming**

   ```
   Query: "researching"
   Should find: Research, Research Areas, Publications
   ```

4. **Phrase Matching**

   ```
   Query: "model united nations"
   Should prioritize: MUN-related content
   ```

5. **Related Terms**
   ```
   Query: "help"
   Should find: Volunteer, Participate, Contribute
   ```

### Manual Testing

1. Open the website
2. Click "Search" in header
3. Try these queries:
   - "leadrship" (typo)
   - "volunteer" (semantic)
   - "donating" (stemming)
   - "un conference" (phrase + semantic)
   - "studdent programs" (multiple typos)

---

## Troubleshooting

### No Results Found

**Possible Causes:**

1. Query too specific
2. Content not indexed
3. Threshold too high

**Solutions:**

- Try more general terms
- Check if content exists in `pageData` or `articleData`
- Lower `minScore` parameter

### Too Many Irrelevant Results

**Possible Causes:**

1. Semantic expansion too broad
2. Similarity threshold too low
3. Score weights need adjustment

**Solutions:**

- Refine semantic mappings
- Increase similarity thresholds (0.75 → 0.85)
- Adjust score weights for different match types

### Performance Issues

**Possible Causes:**

1. Too many items to search
2. Content too large
3. Too many semantic expansions

**Solutions:**

- Implement pagination
- Move to server-side search
- Limit semantic expansion depth
- Add search result caching

---

## Contributing

To improve the search system:

1. **Add semantic relationships** to `semanticMap`
2. **Adjust scoring weights** based on user feedback
3. **Test with real user queries**
4. **Monitor search analytics** (if implemented)
5. **Document edge cases** and improvements

---

## License & Credits

- **Algorithm**: Levenshtein distance (public domain)
- **Implementation**: Custom semantic search engine
- **Author**: DMUN Foundation Development Team
- **Version**: 1.0.0
- **Last Updated**: November 2025

---

## Contact

For questions or suggestions about the search functionality:

- Technical issues: Create a GitHub issue
- Feature requests: Submit a pull request
- General inquiries: Contact the development team

---

**Happy Searching! 🔍**
