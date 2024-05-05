// import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import Sidebar from "@/components/layouts/Sidebar";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between w-full px-4">
        <span className="block text-xl font-semibold">Custom Button</span>
        <div className={cn("block lg:!hidden")}>
          <Sheet>
            <SheetTrigger>
              <Button size={"icon"} className="rounded-lg">
                <Icons.hamburger />
              </Button>
            </SheetTrigger>
            <SheetContent className="px-0">
              <Sidebar className="block" />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
