import type { MDXComponents } from 'mdx/types';
import { Button } from '@boombox/components';
import { PropsTable } from './content/components/PropsTable';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components for MDX
    Button,
    
    // Enhanced HTML elements
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-4">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-700">
        {children}
      </li>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-400 pl-4 py-2 mb-4 bg-blue-50">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-200">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-gray-200 px-4 py-2 bg-gray-50 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-200 px-4 py-2">
        {children}
      </td>
    ),
    
    // Custom documentation components
    ComponentDemo: ({ children, title }: { children: React.ReactNode; title?: string }) => (
      <div className="border border-gray-200 rounded-lg p-6 mb-6">
        {title && (
          <h4 className="text-lg font-semibold mb-4 text-gray-900">{title}</h4>
        )}
        <div className="flex flex-wrap gap-4 items-center">
          {children}
        </div>
      </div>
    ),
    
    PropsTable,
    
    CalloutBox: ({ type = 'info', children }: { type?: 'info' | 'warning' | 'error' | 'success'; children: React.ReactNode }) => {
      const styles = {
        info: 'bg-blue-50 border-blue-400 text-blue-700',
        warning: 'bg-yellow-50 border-yellow-400 text-yellow-700',
        error: 'bg-red-50 border-red-400 text-red-700',
        success: 'bg-green-50 border-green-400 text-green-700',
      };
      
      return (
        <div className={`border-l-4 p-4 mb-4 ${styles[type]}`}>
          {children}
        </div>
      );
    },
    
    ...components,
  };
} 