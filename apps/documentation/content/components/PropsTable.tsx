interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  component: string;
  props: PropDefinition[];
}

export function PropsTable({ component, props }: PropsTableProps) {
  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold mb-4">{component} Props</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Name</th>
              <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Type</th>
              <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Default</th>
              <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Required</th>
              <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop) => (
              <tr key={prop.name} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm font-medium">
                  {prop.name}
                </td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">
                  {prop.type}
                </td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">
                  {prop.default || '-'}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {prop.required ? (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Yes
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      No
                    </span>
                  )}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-sm">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 