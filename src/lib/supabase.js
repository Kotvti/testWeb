import { createClient } from '@supabase/supabase-js';

    console.log('Supabase URL:', process.env.REACT_APP_API_URL);
    console.log('Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    console.log('Supabase URL2:', process.env.REACT_APP_DB_SUPABASE_URL);
    console.log('Supabase Key2:', process.env.REACT_APP_DB_SUPABASE_KEY);
    console.log('TTTTT!!!!!TTTT', '123');
    console.log('TTTTT!!!!!TTTT');

const supabaseUrl = process.env.REACT_APP_DB_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_DB_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);