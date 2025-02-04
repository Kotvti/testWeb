import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.DB_SUPABASE_URL;
const supabaseKey = process.env.DB_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);