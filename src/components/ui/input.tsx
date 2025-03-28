import { Input } from "/components/ui/input"

export default function CustomInput({ ...props }: React.ComponentProps<typeof Input>) {
  return <Input {...props} />
}