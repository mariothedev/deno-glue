import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { array } from "https://cdn.pika.dev/fp-ts@^2.4.4";

console.log("Done:", array);

serve(async (req) => {
  return new Response("Not Found", { status: 404 });
});
