import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { MenuCategory } from '@/lib/mock-api';
import { UI_CONTENT } from '@/lib/content';
import { cn } from '@/lib/utils';

interface CategoryListProps {
  categories: MenuCategory[];
  activeCategoryId: string | null;
  onSelectCategory: (id: string | null) => void;
}

export function CategoryList({ categories, activeCategoryId, onSelectCategory }: CategoryListProps) {
  const { allCategories } = UI_CONTENT.pos.terminal;

  return (
    <ScrollArea className="w-full whitespace-nowrap mb-6">
      <div className="flex w-max space-x-2 p-1">
        <Button
          variant={activeCategoryId === null ? 'default' : 'outline'}
          className={cn(
            "rounded-full px-6 transition-all",
            activeCategoryId === null 
              ? "bg-primary text-primary-foreground shadow-md" 
              : "bg-background text-muted-foreground border-border hover:bg-muted"
          )}
          onClick={() => onSelectCategory(null)}
        >
          {allCategories}
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategoryId === cat.id ? 'default' : 'outline'}
            className={cn(
              "rounded-full px-6 transition-all",
              activeCategoryId === cat.id 
                ? "bg-primary text-primary-foreground shadow-md" 
                : "bg-background text-muted-foreground border-border hover:bg-muted"
            )}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.name}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}
