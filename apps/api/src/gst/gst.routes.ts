import { Router } from 'express';
import { pool } from '../db';

type GstConfigRow = {
  id: number;
  label: string;
  category: string;
  gst_percentage: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
};

export const gstRouter = Router();

// GET /api/gst-config - list all slabs
gstRouter.get('/', async (_req, res) => {
  try {
    const result = await pool.query<GstConfigRow>(
      'SELECT * FROM gst_config ORDER BY updated_at DESC;'
    );
    res.json(result.rows);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch GST configuration.';
    res.status(400).json({ message });
  }
});

// POST /api/gst-config - create slab
gstRouter.post('/', async (req, res) => {
  const { label, category, gst_percentage, is_active } = req.body;

  if (!label || !category || gst_percentage === undefined) {
    res.status(400).json({ message: 'Label, category, and GST percentage are required.' });
    return;
  }

  try {
    const result = await pool.query<GstConfigRow>(
      `INSERT INTO gst_config (label, category, gst_percentage, is_active)
       VALUES ($1, $2, $3, $4)
       RETURNING *;`,
      [label, category, gst_percentage, is_active ?? true]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to create GST slab.';
    res.status(400).json({ message });
  }
});

// PUT /api/gst-config/:id - update slab
gstRouter.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { label, category, gst_percentage, is_active } = req.body;

  try {
    const result = await pool.query<GstConfigRow>(
      `UPDATE gst_config
       SET label = $1, category = $2, gst_percentage = $3, is_active = $4, updated_at = NOW()
       WHERE id = $5
       RETURNING *;`,
      [label, category, gst_percentage, is_active, id]
    );

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'GST slab not found.' });
      return;
    }

    res.json(result.rows[0]);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to update GST slab.';
    res.status(400).json({ message });
  }
});

// DELETE /api/gst-config/:id - soft delete
gstRouter.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);

  try {
    const result = await pool.query<GstConfigRow>(
      'UPDATE gst_config SET is_active = false, updated_at = NOW() WHERE id = $1 RETURNING *;',
      [id]
    );

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'GST slab not found.' });
      return;
    }

    res.json({ message: 'GST slab deactivated successfully.', slab: result.rows[0] });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to deactivate GST slab.';
    res.status(400).json({ message });
  }
});
