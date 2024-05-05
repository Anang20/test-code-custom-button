// import { DashboardNav } from "@/components/layouts/dashboard/DashboardNav";
// import { dashboardMenuItem } from "@/constants/data";
import { cn } from "@/lib/utils";
import SidebarAction from "@/components/layouts/SidebarAction";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = ({className}: {className?: string}) => (
  <nav className={cn(`relative hidden lg:block h-screen border-r pt-10 max-w-full lg:max-w-80`, className)}>
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <SidebarAction />
          </div>
        </div>
      </div>

    </ScrollArea>
  </nav>
);

export default Sidebar;
