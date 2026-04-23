import React from 'react';
import { MenuItem } from '@/lib/mock-api';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { UI_CONTENT } from '@/lib/content';

interface MenuGridProps {
  items: MenuItem[];
  onAddItem: (item: MenuItem) => void;
  searchQuery: string;
}

export function MenuGrid({ items, onAddItem, searchQuery }: MenuGridProps) {
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredItems.map(item => (
        <Card 
          key={item.id} 
          className={`cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 group ${!item.isAvailable ? 'opacity-50 pointer-events-none' : ''}`}
          onClick={() => onAddItem(item)}
        >
          {/* Placeholder for item image */}
          <div className="h-32 bg-muted/30 relative flex items-center justify-center p-4">
             <span className="text-4xl font-bold opacity-10">B</span>
             {item.isVegetarian ? (
               <Badge className="absolute top-2 right-2 bg-green-500 text-white h-5 w-5 p-0 flex items-center justify-center rounded-full text-[10px]">V</Badge>
             ) : (
                <Badge className="absolute top-2 right-2 bg-red-500 text-white h-5 w-5 p-0 flex items-center justify-center rounded-full text-[10px]">N</Badge>
             )}
          </div>
          <CardContent className="p-4 relative">
            <h3 className="font-bold text-sm tracking-tight line-clamp-1 text-foreground mb-1">
              {item.name}
            </h3>
            <p className="text-primary font-black text-sm">
              {formatCurrency(item.price)}
            </p>
            <div className="absolute bottom-4 right-4 bg-primary/10 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus className="h-4 w-4 text-primary" />
            </div>
          </CardContent>
        </Card>
      ))}
      {filteredItems.length === 0 && (
        <div className="col-span-full py-12 text-center text-muted-foreground">
           No items found.
        </div>
      )}
    </div>
  );
}
