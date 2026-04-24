import { Router } from 'express'; // Trigger rebuild
import { pool } from '../db';

export const receiptRouter = Router();

type ReceiptLayoutRow = {
  id: number;
  logo_url: string | null;
  header_text: string | null;
  footer_text: string | null;
  show_gst_breakdown: boolean;
  updated_at: Date;
};

// GET /api/receipt-layout - get current layout
receiptRouter.get('/', async (_req, res) => {
  try {
    const result = await pool.query<ReceiptLayoutRow>(
      'SELECT * FROM receipt_layout ORDER BY id ASC LIMIT 1;'
    );
    
    if (result.rowCount === 0) {
      res.json({
        logo_url: null,
        header_text: 'RestroManager Hotel',
        footer_text: 'Thank you for visiting!',
        show_gst_breakdown: true
      });
      return;
    }

    res.json(result.rows[0]);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch receipt layout.';
    res.status(400).json({ message });
  }
});

// PUT /api/receipt-layout - upsert layout config
receiptRouter.put('/', async (req, res) => {
  const { logo_url, header_text, footer_text, show_gst_breakdown } = req.body;

  try {
    // Check if row exists
    const existing = await pool.query('SELECT id FROM receipt_layout LIMIT 1;');
    
    let result;
    if (existing.rowCount === 0) {
      result = await pool.query<ReceiptLayoutRow>(
        `INSERT INTO receipt_layout (logo_url, header_text, footer_text, show_gst_breakdown)
         VALUES ($1, $2, $3, $4)
         RETURNING *;`,
        [logo_url, header_text, footer_text, show_gst_breakdown ?? true]
      );
    } else {
      result = await pool.query<ReceiptLayoutRow>(
        `UPDATE receipt_layout
         SET logo_url = $1, header_text = $2, footer_text = $3, show_gst_breakdown = $4, updated_at = NOW()
         WHERE id = $5
         RETURNING *;`,
        [logo_url, header_text, footer_text, show_gst_breakdown, existing.rows[0].id]
      );
    }

    res.json(result.rows[0]);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to update receipt layout.';
    res.status(400).json({ message });
  }
});
