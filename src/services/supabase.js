// src/services/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ztmzstngpllqbcyfrint.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bXpzdG5ncGxscWJjeWZyaW50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5ODg2MjksImV4cCI6MjAyODU2NDYyOX0.Xl23iSIGxJAFv7RMNU2A8qKzy31bC4Bc8mpRI8wV2IE';

export const supabase = createClient(supabaseUrl, supabaseKey);
