interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={`text-sm font-medium ${className}`} {...props}>
      {children}
    </label>
  );
}