import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://qvtjifrypqqckyjieuyn.supabase.co'
const supabaseKey = 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2dGppZnJ5cHFxY2t5amlldXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3NjI1NjQsImV4cCI6MjAxMjMzODU2NH0.p04ay7GhaLHsqucViSeeHRZN28PcehdEhlrKgi0z_4k'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;