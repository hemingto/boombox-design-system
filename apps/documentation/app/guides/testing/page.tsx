import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testing Guide | Boombox Design System',
  description: 'Comprehensive testing strategies for the Boombox Design System components',
};

export default function TestingGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Testing Guide
        </h1>
        <p className="text-xl text-gray-600">
          Comprehensive testing strategies for the Boombox Design System, including component testing, 
          accessibility testing, visual regression testing, and performance testing.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> This page will contain the full testing guide content. 
                For now, refer to the <code>TESTING.md</code> file in the root directory 
                for complete testing documentation.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          🧪 Testing Philosophy
        </h2>
        <p className="mb-6">
          Our testing strategy follows the <strong>Testing Trophy</strong> model with a focus on:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Static Analysis</strong> (ESLint, TypeScript) - Catch syntax errors and type issues</li>
          <li><strong>Unit Tests</strong> (Jest + Testing Library) - Test individual components and utilities</li>
          <li><strong>Integration Tests</strong> (Jest + Testing Library) - Test component interactions</li>
          <li><strong>E2E Tests</strong> (Playwright) - Test complete user workflows</li>
          <li><strong>Visual Tests</strong> (Chromatic) - Catch visual regressions</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          🛠 Testing Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Core Testing Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Jest</strong> - Test runner and assertion library</li>
              <li><strong>React Testing Library</strong> - Component testing utilities</li>
              <li><strong>Jest DOM</strong> - Custom DOM matchers</li>
              <li><strong>User Event</strong> - Simulate user interactions</li>
              <li><strong>Jest Axe</strong> - Accessibility testing</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Visual & E2E Testing</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Chromatic</strong> - Visual regression testing</li>
              <li><strong>Playwright</strong> - E2E testing</li>
              <li><strong>Storybook</strong> - Component documentation and testing</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          📋 Quick Start
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-3">Running Tests</h3>
          <div className="space-y-2 font-mono text-sm">
            <div><span className="text-gray-500"># Run all tests</span></div>
            <div><code>npm test</code></div>
            <div><span className="text-gray-500"># Run tests in watch mode</span></div>
            <div><code>npm run test:watch</code></div>
            <div><span className="text-gray-500"># Run tests with coverage</span></div>
            <div><code>npm run test:coverage</code></div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Work in Progress:</strong> This documentation page is being developed. 
                The complete testing guide with examples and best practices is available in the 
                repository&apos;s <code>TESTING.md</code> file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 