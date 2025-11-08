import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Info, Download } from 'lucide-react';
import { evaluateDocument, DOCUMENT_TYPES } from '../utils/documentEvaluator';
import BorderedContentWrapper from '../components/BorderedContentWrapper';

const DraftAssistant = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentType, setDocumentType] = useState('');
  const [metadata, setMetadata] = useState({
    country: '',
    committee: '',
    topic: ''
  });
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const supportedFormats = ['txt', 'pdf', 'docx', 'rtf'];
      
      if (supportedFormats.includes(fileExtension)) {
        setSelectedFile(file);
        setError(null);
      } else {
        setError(`Unsupported file format. Please upload: ${supportedFormats.join(', ')}`);
        setSelectedFile(null);
      }
    }
  };

  const handleMetadataChange = (field, value) => {
    setMetadata(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEvaluate = async () => {
    if (!selectedFile || !documentType) {
      setError('Please select a file and document type');
      return;
    }

    setIsEvaluating(true);
    setError(null);

    try {
      const result = await evaluateDocument(selectedFile, documentType, metadata);
      setEvaluation(result);
    } catch (err) {
      setError(err.message || 'An error occurred during evaluation');
      console.error('Evaluation error:', err);
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setDocumentType('');
    setMetadata({ country: '', committee: '', topic: '' });
    setEvaluation(null);
    setError(null);
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 75) return 'text-blue-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreGrade = (percentage) => {
    if (percentage >= 90) return 'A (Excellent)';
    if (percentage >= 80) return 'B (Very Good)';
    if (percentage >= 70) return 'C (Good)';
    if (percentage >= 60) return 'D (Satisfactory)';
    return 'F (Needs Improvement)';
  };

  const getFeedbackIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const downloadReport = () => {
    if (!evaluation) return;

    const reportContent = `
GMUN DOCUMENT EVALUATION REPORT
================================

Document: ${evaluation.metadata.fileName}
Type: ${evaluation.metadata.documentType.replace('_', ' ').toUpperCase()}
Evaluation Date: ${new Date(evaluation.metadata.evaluationDate).toLocaleString()}

${evaluation.metadata.country ? `Country: ${evaluation.metadata.country}` : ''}
${evaluation.metadata.committee ? `Committee: ${evaluation.metadata.committee}` : ''}
${evaluation.metadata.topic ? `Topic: ${evaluation.metadata.topic}` : ''}

OVERALL SCORE
=============
Score: ${evaluation.score}/${evaluation.maxScore} (${evaluation.percentage}%)
Grade: ${getScoreGrade(evaluation.percentage)}

SCORE BREAKDOWN
===============
${Object.entries(evaluation.breakdown).map(([category, data]) => 
  `${category.charAt(0).toUpperCase() + category.slice(1)}: ${data.score}/${data.max}`
).join('\n')}

DOCUMENT ANALYSIS
=================
Word Count: ${evaluation.analysis.wordCount}
${evaluation.analysis.paragraphCount ? `Paragraphs: ${evaluation.analysis.paragraphCount}` : ''}
${evaluation.analysis.perambulatoryClauses !== undefined ? `Perambulatory Clauses: ${evaluation.analysis.perambulatoryClauses}` : ''}
${evaluation.analysis.operativeClauses !== undefined ? `Operative Clauses: ${evaluation.analysis.operativeClauses}` : ''}
${evaluation.analysis.citationCount !== undefined ? `Citations: ${evaluation.analysis.citationCount}` : ''}
${evaluation.analysis.avgSentenceLength !== undefined ? `Avg Sentence Length: ${evaluation.analysis.avgSentenceLength} words` : ''}

DETAILED FEEDBACK
=================
${evaluation.feedback.map((item, index) => 
  `${index + 1}. [${item.category}] ${item.message}`
).join('\n')}

RECOMMENDATIONS
===============
${evaluation.percentage >= 90 ? 
  'Excellent work! Your document meets professional MUN standards. Consider minor refinements based on feedback above.' :
evaluation.percentage >= 75 ?
  'Very good! Your document is strong. Focus on the areas marked for improvement to reach excellence.' :
evaluation.percentage >= 60 ?
  'Good effort! Your document has a solid foundation. Address the warnings and suggestions to significantly improve.' :
  'Needs improvement. Review the feedback carefully and revise key sections. Consider reviewing MUN document guidelines.'}

---
Generated by DMUN Foundation Draft Assistant
    `.trim();

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `evaluation-report-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GMUN Documents Draft Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your MUN documents for intelligent evaluation based on GMUN Rules of Procedure. 
            Get detailed feedback, scoring, and constructive suggestions to improve your work.
          </p>
        </div>

        {/* Document Info Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Position Paper</h3>
            <p className="text-sm text-gray-600">Country's official stance on committee issues</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Working Paper</h3>
            <p className="text-sm text-gray-600">Preliminary draft with collaborative solutions</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Draft Resolution</h3>
            <p className="text-sm text-gray-600">Formal resolution with preamble and operative clauses</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Op-Ed</h3>
            <p className="text-sm text-gray-600">Persuasive opinion article on contemporary issues</p>
          </div>
        </div>

        <BorderedContentWrapper>
          {!evaluation ? (
            <div className="space-y-8">
              {/* File Upload Section */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  1. Upload Your Document
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".txt,.pdf,.docx,.rtf"
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="w-12 h-12 text-gray-400 mb-4" />
                    <span className="text-lg font-medium text-gray-700">
                      {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                    </span>
                    <span className="text-sm text-gray-500 mt-2">
                      Supported formats: TXT, PDF, DOCX, RTF
                    </span>
                  </label>
                </div>
                {selectedFile && (
                  <div className="mt-4 flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{selectedFile.name}</p>
                        <p className="text-sm text-gray-600">
                          {(selectedFile.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Document Type Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  2. Select Document Type
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(DOCUMENT_TYPES).map(([key, value]) => (
                    <button
                      key={value}
                      onClick={() => setDocumentType(value)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        documentType === value
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <span className="font-medium text-gray-900">
                        {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Metadata Section */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  3. Provide Context (Optional but Recommended)
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={metadata.country}
                      onChange={(e) => handleMetadataChange('country', e.target.value)}
                      placeholder="e.g., United States"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Committee
                    </label>
                    <input
                      type="text"
                      value={metadata.committee}
                      onChange={(e) => handleMetadataChange('committee', e.target.value)}
                      placeholder="e.g., UNSC"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Topic
                    </label>
                    <input
                      type="text"
                      value={metadata.topic}
                      onChange={(e) => handleMetadataChange('topic', e.target.value)}
                      placeholder="e.g., Climate Change"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900">Error</h4>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleEvaluate}
                  disabled={!selectedFile || !documentType || isEvaluating}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  {isEvaluating ? 'Evaluating...' : 'Evaluate Document'}
                </button>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          ) : (
            /* Evaluation Results */
            <div className="space-y-8">
              {/* Score Card */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Evaluation Results</h2>
                <div className="flex items-center justify-center gap-8 mb-4">
                  <div>
                    <div className={`text-6xl font-bold ${getScoreColor(evaluation.percentage)}`}>
                      {evaluation.percentage}%
                    </div>
                    <div className="text-lg text-gray-600 mt-2">
                      {evaluation.score} / {evaluation.maxScore} points
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-900">
                      {getScoreGrade(evaluation.percentage)}
                    </div>
                    <div className="text-gray-600">
                      {evaluation.metadata.documentType.replace('_', ' ').toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Score Breakdown */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Score Breakdown</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(evaluation.breakdown).map(([category, data]) => (
                    <div key={category} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900 capitalize">
                          {category}
                        </span>
                        <span className="text-lg font-bold text-blue-600">
                          {data.score}/{data.max}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(data.score / data.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Document Analysis */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Document Analysis</h3>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">
                        {evaluation.analysis.wordCount}
                      </div>
                      <div className="text-sm text-gray-600">Words</div>
                    </div>
                    {evaluation.analysis.paragraphCount && (
                      <div>
                        <div className="text-3xl font-bold text-blue-600">
                          {evaluation.analysis.paragraphCount}
                        </div>
                        <div className="text-sm text-gray-600">Paragraphs</div>
                      </div>
                    )}
                    {evaluation.analysis.citationCount !== undefined && (
                      <div>
                        <div className="text-3xl font-bold text-blue-600">
                          {evaluation.analysis.citationCount}
                        </div>
                        <div className="text-sm text-gray-600">Citations</div>
                      </div>
                    )}
                    {evaluation.analysis.perambulatoryClauses !== undefined && (
                      <div>
                        <div className="text-3xl font-bold text-blue-600">
                          {evaluation.analysis.perambulatoryClauses}
                        </div>
                        <div className="text-sm text-gray-600">Perambulatory Clauses</div>
                      </div>
                    )}
                    {evaluation.analysis.operativeClauses !== undefined && (
                      <div>
                        <div className="text-3xl font-bold text-blue-600">
                          {evaluation.analysis.operativeClauses}
                        </div>
                        <div className="text-sm text-gray-600">Operative Clauses</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Detailed Feedback */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Feedback</h3>
                <div className="space-y-3">
                  {evaluation.feedback.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start p-4 rounded-lg border ${
                        item.type === 'success' ? 'bg-green-50 border-green-200' :
                        item.type === 'error' ? 'bg-red-50 border-red-200' :
                        item.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                        'bg-blue-50 border-blue-200'
                      }`}
                    >
                      <div className="mr-3 flex-shrink-0 mt-0.5">
                        {getFeedbackIcon(item.type)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm mb-1">
                          {item.category}
                        </div>
                        <div className="text-gray-700">
                          {item.message}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Recommendations</h3>
                <p className="text-gray-700">
                  {evaluation.percentage >= 90 
                    ? 'Excellent work! Your document meets professional MUN standards. Consider minor refinements based on feedback above.'
                    : evaluation.percentage >= 75
                    ? 'Very good! Your document is strong. Focus on the areas marked for improvement to reach excellence.'
                    : evaluation.percentage >= 60
                    ? 'Good effort! Your document has a solid foundation. Address the warnings and suggestions to significantly improve.'
                    : 'Needs improvement. Review the feedback carefully and revise key sections. Consider reviewing MUN document guidelines in the ROP.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={downloadReport}
                  className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Report
                </button>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Evaluate Another Document
                </button>
              </div>
            </div>
          )}
        </BorderedContentWrapper>

        {/* Resources Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/rop/GDMUN High Commission ROP version 2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FileText className="w-8 h-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-900">GDMUN ROP 2025</h4>
              <p className="text-sm text-gray-600">Official Rules of Procedure</p>
            </a>
            <a
              href="/rop/GDMUN-2022-Rules of Procedure .pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FileText className="w-8 h-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-900">GDMUN ROP 2022</h4>
              <p className="text-sm text-gray-600">Previous ROP version</p>
            </a>
            <a
              href="/docs/draft_assistant/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FileText className="w-8 h-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-900">Documentation</h4>
              <p className="text-sm text-gray-600">Evaluation criteria & guides</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftAssistant;
