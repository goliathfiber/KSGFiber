/*
  # Update Residential Plans to 2 Price Points

  1. Changes
    - Remove old residential internet plans (KSG 100, KSG 500, KSG Gig, KSG 2G)
    - Add new KSG 300 plan (300 Mbps at $89.99/month)
    - Add new KSG Gig plan (1000 Mbps at $109.00/month)
    - Voice plans and business plans remain unchanged

  2. Notes
    - Old plans are marked inactive rather than deleted to preserve referential integrity
    - New plans are inserted as active
*/

UPDATE service_plans
SET is_active = false, description = 'Legacy plan - no longer offered'
WHERE name IN ('KSG 100', 'KSG 500', 'KSG Gig', 'KSG 2G')
  AND plan_type = 'residential'
  AND speed_mbps > 0;

INSERT INTO service_plans (name, speed_mbps, price_cents, plan_type, description, is_active)
VALUES
  ('KSG 300', 300, 8999, 'residential', 'For active households. Streaming, gaming, smart home devices, and remote work.', true),
  ('KSG Gig', 1000, 10900, 'residential', 'For power users and large families. No compromises.', true);
