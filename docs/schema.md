# Database Schema & Data Models

## Introduction
This document defines the core data models for FINBOOKS. All models are implemented using Mongoose for MongoDB.

## Models

### User
```typescript
interface User {
  name: string;
  email: string;
  role: 'ADMIN' | 'MANAGER' | 'STAFF';
  createdAt: Date;
}
```

### Item
```typescript
interface Item {
  name: string;
  description?: string;
  price: number;
  taxRate: number; // e.g., 5, 12, 18 for GST
  categoryId: ObjectId;
  sku: string;
  inStock: boolean;
}
```

### Bill
```typescript
interface Bill {
  billNumber: string;
  items: Array<{
    itemId: ObjectId;
    quantity: number;
    priceAtSale: number;
  }>;
  subTotal: number;
  taxTotal: number;
  discount: number;
  grandTotal: number;
  paymentMethod: 'CASH' | 'CARD' | 'UPI';
  status: 'PAID' | 'CANCELLED';
  createdBy: ObjectId;
}
```
... and more (Table, Category, Inventory)
