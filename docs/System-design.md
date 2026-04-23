# System Design - FINBOOKS

## High-Level Architecture
- **Monorepo**: Nx
- **Frontend**: Next.js (App Router)
- **Backend**: Node.js / Express
- **Database**: MongoDB (Mongoose)

## Database Schema (High-Level)

### Users
| Field | Type | Description |
|---|---|---|
| id | ObjectId | Unique identifier |
| role | String | Admin, Manager, Staff |
| name | String | Full name |

### Items
| Field | Type | Description |
|---|---|---|
| id | ObjectId | Unique identifier |
| name | String | Item name |
| price | Number | Base price |
| gst | Number | Tax percentage |

### Categories
| Field | Type | Description |
|---|---|---|
| id | ObjectId | Unique identifier |
| name | String | Category name (e.g., Beverages, Starters) |

### Bills
| Field | Type | Description |
|---|---|---|
| id | ObjectId | Unique identifier |
| total | Number | Final amount |
| tax | Number | Calculated GST |
| discount | Number | Applied discount |

### BillItems
| Field | Type | Description |
|---|---|---|
| bill_id | ObjectId | Reference to Bill |
| item_id | ObjectId | Reference to Item |
| qty | Number | Quantity ordered |

### Payments
| Field | Type | Description |
|---|---|---|
| bill_id | ObjectId | Reference to Bill |
| method | String | Cash, Card, UPI |
| status | String | Paid, Pending, Refunded |

### Tables
| Field | Type | Description |
|---|---|---|
| id | ObjectId | Table number/identifier |
| status | String | Available, Occupied, Reserved |

### Orders (Active KOT)
| Field | Type | Description |
|---|---|---|
| table_id | ObjectId | Reference to Table |
| items | Array | List of ordered item IDs and quantities |

### Inventory
| Field | Type | Description |
|---|---|---|
| item_id | ObjectId | Reference to Item |
| qty | Number | Current stock level |
