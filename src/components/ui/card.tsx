interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ children, className, ...props }: CardProps) => {
  return <div className={`rounded-lg border border-gray-700 ${className}`} {...props}>{children}</div>;
};

const CardHeader = ({ children, className, ...props }: CardProps) => {
  return <div className={`p-6 ${className}`} {...props}>{children}</div>;
};

const CardTitle = ({ children, className, ...props }: CardProps) => {
  return <h3 className={`text-2xl font-semibold ${className}`} {...props}>{children}</h3>;
};

const CardDescription = ({ children, className, ...props }: CardProps) => {
  return <p className={`text-gray-400 ${className}`} {...props}>{children}</p>;
};

const CardContent = ({ children, className, ...props }: CardProps) => {
  return <div className={`p-6 pt-0 ${className}`} {...props}>{children}</div>;
};

const CardFooter = ({ children, className, ...props }: CardProps) => {
  return <div className={`p-6 pt-0 ${className}`} {...props}>{children}</div>;
};

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
export default Card;