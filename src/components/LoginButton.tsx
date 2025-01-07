import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function LoginButton() {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/login') // This will redirect to your login page
  }

  return (
    <Button 
      onClick={handleLogin}
      className="bg-primary text-white hover:bg-primary/90"
    >
      Login
    </Button>
  )
} 