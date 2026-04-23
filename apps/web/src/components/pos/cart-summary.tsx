import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UI_CONTENT } from '@/lib/content';
import { MenuItem } from '@/lib/mock-api';
import { formatCurrency } from '@/lib/utils';
import { Minus, Plus, Trash2, Receipt } from 'lucide-react';

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartSummaryProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onPlaceOrder: () => void;
  isLoading: boolean;
  selectedTable: string | null;
  onSelectTable: () => void;
}

export function CartSummary({ 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onPlaceOrder, 
  isLoading,
  selectedTable,
  onSelectTable
}: CartSummaryProps) {
  const { terminal } = UI_CONTENT.pos;
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05; // 5% GST
  const total = subtotal + tax;

  const hasItems = items.length > 0;

  return (
    <Card className="h-full flex flex-col border-border rounded-none lg:rounded-xl shadow-lg relative overflow-hidden">
      <CardHeader className="bg-primary/5 pb-4 border-b border-border">
        <div className="flex justify-between items-center">
          <CardTitle className="font-black text-lg">{terminal.cartTitle}</CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full bg-background font-bold text-xs shadow-sm border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={onSelectTable}
          >
            {selectedTable ? `Table ${selectedTable}` : terminal.tableSelect}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
        {hasItems ? (
          <ScrollArea className="flex-1 px-4 py-2">
            <div className="space-y-4 pr-3 mt-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-start py-2 border-b border-border/50 last:border-0">
                  <div className="flex-1">
                    <h4 className="font-bold text-sm tracking-tight">{item.name}</h4>
                    <p className="text-primary font-black text-xs mt-1">{formatCurrency(item.price)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-muted/50 rounded-lg p-1 border border-border">
                      <Button variant="ghost" size="icon" className="h-6 w-6 rounded-md hover:bg-background shadow-sm" onClick={() => onUpdateQuantity(item.id, -1)}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-bold block">{item.quantity}</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6 rounded-md hover:bg-background shadow-sm" onClick={() => onUpdateQuantity(item.id, 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10 rounded-full" onClick={() => onRemoveItem(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-muted-foreground">
            <Receipt className="h-12 w-12 opacity-20 mb-4" />
            <p className="text-sm font-medium text-center">{terminal.emptyCart}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex-col bg-muted/30 border-t border-border p-6 gap-4">
        {hasItems && (
          <div className="w-full space-y-2 mb-2 text-sm">
            <div className="flex justify-between text-muted-foreground font-medium">
              <span>{terminal.subtotal}</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground font-medium">
              <span>{terminal.tax}</span>
              <span>{formatCurrency(tax)}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-2 mt-2 text-foreground">
              <span className="font-black text-lg">{terminal.total}</span>
              <span className="font-black text-xl text-primary">{formatCurrency(total)}</span>
            </div>
          </div>
        )}
        
        <Button 
          className="w-full text-lg font-black h-14 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform" 
          size="lg"
          disabled={!hasItems || isLoading}
          onClick={onPlaceOrder}
        >
          {isLoading && <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />}
          {terminal.placeOrder}
        </Button>
      </CardFooter>
    </Card>
  );
}
