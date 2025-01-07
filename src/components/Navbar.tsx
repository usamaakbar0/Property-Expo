import { LoginButton } from "./LoginButton"

// ... existing imports ...

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* ... existing navbar content ... */}
        
        <div className="flex items-center justify-end flex-1">
          <LoginButton />
        </div>
      </div>
    </header>
  )
} 