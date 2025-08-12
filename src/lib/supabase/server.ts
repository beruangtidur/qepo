import { createClient as createDefaultClient } from "@supabase/supabase-js";

export const supabaseAdminClient = createDefaultClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);