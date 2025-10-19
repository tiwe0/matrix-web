import { Github, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GameFooter() {
  return (
    <footer className="relative border-t-2 border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            className="pixel-corners hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="pixel-corners hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
            asChild
          >
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="pixel-corners hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
            asChild
          >
            <a href="mailto:contact@thematrix.game" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <div className="text-sm text-muted-foreground">
            <span className="text-primary">{">"}</span> SYSTEM.STATUS: ONLINE
          </div>
          <p className="text-xs text-muted-foreground">© 2025 The Matrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
