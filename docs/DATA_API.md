# DATA_API - FINBOOKS API Contracts

## Dashboard Metrics
Retrieve high-level business intelligence data.

- **Endpoint**: `GET /api/dashboard/metrics`
- **Response**:
  ```json
  {
    "totalSales": 150000,
    "customers": 245,
    "avgOrder": 612.24,
    "rating": 4.8
  }
  ```

## Billing / POS
Process a new transaction.

- **Endpoint**: `POST /api/billing`
- **Request Body**:
  ```json
  {
    "items": [
      { "id": "uuid-1", "qty": 2, "price": 100 },
      { "id": "uuid-2", "qty": 1, "price": 50 }
    ],
    "total": 250,
    "paymentMethod": "UPI"
  }
  ```
- **Response**: `201 Created`

## Inventory Management
Sync stock levels.

- **Endpoint**: `GET /api/inventory`
- **Endpoint**: `PUT /api/inventory/stock-update`

## Table Management
Manage physical space status.

- **Endpoint**: `GET /api/tables`
- **Endpoint**: `PATCH /api/tables/:id/status`
