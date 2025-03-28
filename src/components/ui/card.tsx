import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "/components/ui/card"
  
  export default function CustomCard({ children, ...props }: React.ComponentProps<typeof Card>) {
    return <Card {...props}>{children}</Card>
  }
  
  export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle }