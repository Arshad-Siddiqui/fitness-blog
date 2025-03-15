import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 className="text-2xl font-bold my-4" {...props} />,
    h2: (props) => <h2 className="text-xl font-semibold my-3" {...props} />,
    h3: (props) => <h3 className="text-lg font-medium my-2" {...props} />,
    p: (props) => <p className="text-gray-700 text-base my-2" {...props} />,
    a: (props) => <a className="text-red-600 hover:underline" {...props} />,
    ul: (props) => <ul className="list-disc list-inside my-2" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside my-2" {...props} />,
    li: (props) => <li className="my-1" {...props} />,
    blockquote: (props) => <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4" {...props} />,
    code: (props) => <code className="bg-gray-100 text-red-500 px-1 rounded" {...props} />,
    pre: (props) => <pre className="bg-gray-900 text-white p-4 rounded my-4 overflow-x-auto" {...props} />,
  };
}