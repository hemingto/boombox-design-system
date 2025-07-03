// Button variants using simple CSS classes
export const getButtonVariants = () => {
  return ({ variant = 'primary', size = 'md' }: { variant?: string; size?: string }) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-gray-500',
      ghost: 'bg-transparent hover:bg-gray-100 focus:ring-gray-500'
    };
    
    const sizeClasses = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg'
    };
    
    return `${baseClasses} ${variantClasses[variant as keyof typeof variantClasses] || variantClasses.primary} ${sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.md}`;
  };
};
