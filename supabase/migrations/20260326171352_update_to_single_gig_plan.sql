/*
  # Update service plans to single 1 Gig offering

  1. Changes
    - Mark all existing residential plans as inactive
    - Mark all existing business plans as inactive
    - Insert new KSG Gig residential plan at $89.95/month (8995 cents)
    - Insert new Business Gig plan at $89.95/month (8995 cents)
    - Both plans: 1000 Mbps, no equipment fees, no installation fees

  2. Important Notes
    - Previous plans (KSG 300, KSG Gig at $109, Business 100/500/Gig/Enterprise) are deactivated, not deleted
    - New special pricing reflects $89.95/month for both residential and business
    - No equipment or installation fees on new plans
*/

UPDATE service_plans
SET is_active = false
WHERE is_active = true;

INSERT INTO service_plans (name, speed_mbps, price_cents, plan_type, is_active, description)
VALUES
  ('KSG Gig', 1000, 8995, 'residential', true, '1 Gbps symmetrical fiber. No data caps, no contracts. Free equipment and installation.'),
  ('Business Gig', 1000, 8995, 'business', true, '1 Gbps dedicated business fiber. SLA-backed, free equipment and installation.')
ON CONFLICT DO NOTHING;
