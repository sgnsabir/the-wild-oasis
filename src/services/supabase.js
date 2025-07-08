import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lyyxaiubgragtewzwlli.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eXhhaXViZ3JhZ3Rld3p3bGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0ODMwMjIsImV4cCI6MjA2NzA1OTAyMn0.RiA8AqcaVMCLXwlVDQBpVzKUTbbKuHGbdJsE4cEIiLM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
