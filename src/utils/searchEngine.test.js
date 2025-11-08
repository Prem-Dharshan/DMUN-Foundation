/**
 * Test Suite for Enhanced Search Engine
 * 
 * Run these tests to verify search functionality
 * Usage: import and run in console or test framework
 */

import { enhancedSearch, getSearchSuggestions } from './searchEngine';

// Sample test data
const testData = [
  {
    title: 'Executive Leadership',
    path: '/executive-leadership',
    content: 'Meet our executive board and leadership team. Our directors guide the foundation mission.'
  },
  {
    title: 'Volunteer Program',
    path: '/volunteer',
    content: 'Join our volunteer program and help make a difference. Participate in community service.'
  },
  {
    title: 'Donate',
    path: '/donate',
    content: 'Support our mission through donations. Your contribution makes an impact.'
  },
  {
    title: 'Research Publications',
    path: '/research',
    content: 'Explore our research papers and academic publications on international development.'
  },
  {
    title: 'Model UN Programs',
    path: '/programs',
    content: 'DMUN offers Model United Nations programs for youth leadership development.'
  },
  {
    title: 'Newsroom Articles',
    path: '/newsroom',
    content: 'Latest news and press releases from our organization.'
  }
];

// Test Suite
const tests = {
  // Test 1: Semantic Understanding
  testSemanticSearch() {
    console.log('\n=== Test 1: Semantic Understanding ===');
    const results = enhancedSearch(testData, 'leader');
    console.log(`Query: "leader"`);
    console.log(`Results found: ${results.length}`);
    console.log('Titles:', results.map(r => r.title));
    console.log('Expected: Should find "Executive Leadership" and "Model UN Programs"');
    return results.length >= 1 && results.some(r => r.title.includes('Leadership'));
  },

  // Test 2: Typo Tolerance
  testTypoHandling() {
    console.log('\n=== Test 2: Typo Tolerance ===');
    const results = enhancedSearch(testData, 'donaton'); // Missing 'i'
    console.log(`Query: "donaton" (typo)`);
    console.log(`Results found: ${results.length}`);
    console.log('Titles:', results.map(r => r.title));
    console.log('Expected: Should find "Donate" despite typo');
    return results.length >= 1 && results.some(r => r.title.includes('Donate'));
  },

  // Test 3: Stemming
  testStemming() {
    console.log('\n=== Test 3: Stemming ===');
    const results = enhancedSearch(testData, 'volunteering');
    console.log(`Query: "volunteering"`);
    console.log(`Results found: ${results.length}`);
    console.log('Titles:', results.map(r => r.title));
    console.log('Expected: Should find "Volunteer Program"');
    return results.length >= 1 && results.some(r => r.title.includes('Volunteer'));
  },

  // Test 4: Phrase Matching
  testPhraseMatch() {
    console.log('\n=== Test 4: Phrase Matching ===');
    const results = enhancedSearch(testData, 'Model United Nations');
    console.log(`Query: "Model United Nations"`);
    console.log(`Results found: ${results.length}`);
    console.log('Titles:', results.map(r => r.title));
    console.log('Scores:', results.map(r => r.relevance));
    console.log('Expected: Should prioritize "Model UN Programs"');
    return results.length >= 1 && results[0].title.includes('Model UN');
  },

  // Test 5: Multiple Typos
  testMultipleTypos() {
    console.log('\n=== Test 5: Multiple Typos ===');
    const results = enhancedSearch(testData, 'reserch publikations'); // 2 typos
    console.log(`Query: "reserch publikations" (2 typos)`);
    console.log(`Results found: ${results.length}`);
    console.log('Titles:', results.map(r => r.title));
    console.log('Expected: Should find "Research Publications"');
    return results.length >= 1 && results.some(r => r.title.includes('Research'));
  },

  // Test 6: Relevance Scoring
  testRelevanceScoring() {
    console.log('\n=== Test 6: Relevance Scoring ===');
    const results = enhancedSearch(testData, 'program');
    console.log(`Query: "program"`);
    console.log(`Results found: ${results.length}`);
    console.log('Results with scores:');
    results.forEach(r => {
      console.log(`  - ${r.title}: ${r.relevance.toFixed(2)} points`);
    });
    console.log('Expected: Higher scores for more relevant matches');
    return results.length >= 2 && results[0].relevance > results[results.length - 1].relevance;
  },

  // Test 7: Related Terms
  testRelatedTerms() {
    console.log('\n=== Test 7: Related Terms ===');
    const results = enhancedSearch(testData, 'help');
    console.log(`Query: "help"`);
    console.log(`Results found: ${results.length}`);
    console.log('Titles:', results.map(r => r.title));
    console.log('Expected: Should find "Volunteer Program" (help → volunteer)');
    return results.length >= 1;
  },

  // Test 8: No Results
  testNoResults() {
    console.log('\n=== Test 8: No Results ===');
    const results = enhancedSearch(testData, 'xyz123nonexistent');
    console.log(`Query: "xyz123nonexistent"`);
    console.log(`Results found: ${results.length}`);
    console.log('Expected: Should return empty array');
    return results.length === 0;
  },

  // Test 9: Case Insensitivity
  testCaseInsensitivity() {
    console.log('\n=== Test 9: Case Insensitivity ===');
    const results1 = enhancedSearch(testData, 'LEADERSHIP');
    const results2 = enhancedSearch(testData, 'leadership');
    const results3 = enhancedSearch(testData, 'LeAdErShIp');
    console.log(`Query variations: "LEADERSHIP", "leadership", "LeAdErShIp"`);
    console.log(`Results: ${results1.length}, ${results2.length}, ${results3.length}`);
    console.log('Expected: All should return same results');
    return results1.length === results2.length && results2.length === results3.length;
  },

  // Test 10: Search Suggestions
  testSearchSuggestions() {
    console.log('\n=== Test 10: Search Suggestions ===');
    const suggestions = getSearchSuggestions(testData, 'vol', 5);
    console.log(`Partial query: "vol"`);
    console.log(`Suggestions:`, suggestions);
    console.log('Expected: Should include "volunteer" or related words');
    return suggestions.length > 0;
  }
};

// Run all tests
export function runAllTests() {
  console.log('🧪 Running Enhanced Search Engine Tests...\n');
  console.log('='.repeat(50));
  
  let passed = 0;
  let failed = 0;
  const results = {};

  Object.keys(tests).forEach(testName => {
    try {
      const result = tests[testName]();
      results[testName] = result;
      if (result) {
        passed++;
        console.log(`\n✅ ${testName} PASSED`);
      } else {
        failed++;
        console.log(`\n❌ ${testName} FAILED`);
      }
    } catch (error) {
      failed++;
      results[testName] = false;
      console.log(`\n❌ ${testName} ERROR:`, error.message);
    }
  });

  console.log('\n' + '='.repeat(50));
  console.log('\n📊 Test Summary:');
  console.log(`   Total Tests: ${passed + failed}`);
  console.log(`   ✅ Passed: ${passed}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   Success Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);
  console.log('\n' + '='.repeat(50));

  return results;
}

// Quick demo function
export function quickDemo() {
  console.log('🔍 Enhanced Search Engine Demo\n');
  
  const queries = [
    'leader',           // Semantic
    'donaton',          // Typo
    'volunteering',     // Stemming
    'reserch',          // Typo
    'help',             // Related term
  ];

  queries.forEach(query => {
    console.log(`\nQuery: "${query}"`);
    const results = enhancedSearch(testData, query, 1);
    console.log(`Found ${results.length} results:`);
    results.slice(0, 3).forEach(r => {
      console.log(`  📄 ${r.title} (score: ${r.relevance.toFixed(1)})`);
    });
  });
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.searchTests = {
    runAll: runAllTests,
    demo: quickDemo,
    individual: tests
  };
  console.log('💡 Search tests loaded! Run: window.searchTests.runAll() or window.searchTests.demo()');
}

export default { runAllTests, quickDemo, tests };
