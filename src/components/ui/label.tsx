import { Label } from "/components/ui/label"

export default function CustomLabel({ ...props }: React.ComponentProps<typeof Label>) {
  return <Label {...props} />
}