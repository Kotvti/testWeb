import { createClient } from '@supabase/supabase-js';

// Локальные ключи (для разработки)
const LOCAL_SUPABASE_URL = 'https://gyvzosfokbxawpzcpges.supabase.co'; // Замените на ваш Supabase URL
const LOCAL_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5dnpvc2Zva2J4YXdwemNwZ2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxODAyMDcsImV4cCI6MjA1Mzc1NjIwN30.Zz_8z5LqGxf9q9sbzpBWeIK2RgVg2lArFY1CQEOS-hw'; // Замените на ваш публичный ключ

// Используем переменные окружения, если они доступны (для продакшена)
const supabaseUrl = LOCAL_SUPABASE_URL //process.env.NEXT_PUBLIC_SUPABASE_URL || LOCAL_SUPABASE_URL;
const supabaseKey = LOCAL_SUPABASE_KEY //process.env.NEXT_PUBLIC_SUPABASE_KEY || LOCAL_SUPABASE_KEY;

// Создаём клиент Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);


// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// export const supabase = createClient(supabaseUrl, supabaseKey);