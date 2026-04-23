import { Search, Bell, User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UI_CONTENT } from '@/lib/content';

export function UserTopLogoHeader() {
  return (
    <div className="flex h-16 items-center justify-between px-8 bg-card border-b border-border">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={UI_CONTENT.common.search.placeholder}
            className="pl-10 bg-muted/30 border-none h-10 rounded-xl focus-visible:ring-primary"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative rounded-full text-muted-foreground hover:bg-muted">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
        </Button>
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-foreground">John Waiter</p>
            <p className="text-xs text-muted-foreground">Admin/POS</p>
          </div>
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-border bg-background">
            <UserIcon className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </div>
  );
}
