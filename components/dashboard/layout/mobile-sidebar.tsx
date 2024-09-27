import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet';
import { Button } from '../../ui/button';
import { Menu } from 'lucide-react';
import { Sidebar } from './sidebar';
import { SidebarUserInfo } from './sidebar-user-info';

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <Sidebar />
        <SidebarUserInfo />
      </SheetContent>
    </Sheet>
  );
}
