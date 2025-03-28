import { Button } from "/components/ui/button"

export default function CustomButton({ children, ...props }: React.ComponentProps<typeof Button>) {
  return <Button {...props}>{children}</Button>
}