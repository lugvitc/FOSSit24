import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://snytdulgbjatdmtotpmk.supabase.co";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNueXRkdWxnYmphdGRtdG90cG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5NzcwOTksImV4cCI6MjAyNTU1MzA5OX0.gBKmnpJAqnxkPHx9ARvbJLXmorcBwmdIRbkuNduebAM";

const supabase = createClient(PROJECT_URL, ANON_KEY);
export default supabase;
