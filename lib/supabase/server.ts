import "server-only";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export function supabaseServer() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });
}

// import "server-only";
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// console.log("SUPABASE_URL =", supabaseUrl);
// console.log("SUPABASE_KEY exists =", !!supabaseAnonKey);

// if (!supabaseUrl || !supabaseUrl.startsWith("http")) {
//   throw new Error("Missing or invalid NEXT_PUBLIC_SUPABASE_URL in .env.local");
// }

// if (!supabaseAnonKey) {
//   throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
// }

// export function supabaseServer() {
//   return createClient(supabaseUrl, supabaseAnonKey, {
//     auth: {
//       persistSession: false,
//     },
//   });
// }