import { Textarea } from "@/components/ui/textarea"

export default function CustomTextarea({ ...props }: React.ComponentProps<typeof Textarea>) {
  return <Textarea {...props} />
}