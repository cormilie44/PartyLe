import { Label } from "/components/ui/label"
import { RadioGroup, RadioGroupItem } from "/components/ui/radio-group"

export default function CustomRadioGroup({ options, value, onChange }: { options: { value: string; label: string }[]; value: string; onChange: (value: string) => void }) {
  return (
    <RadioGroup defaultValue={value} onValueChange={onChange}>
      {options.map(option => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <CustomLabel htmlFor={option.value}>{option.label}</CustomLabel>
        </div>
      ))}
    </RadioGroup>
  )
}