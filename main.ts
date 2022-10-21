import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { either } from "https://cdn.pika.dev/fp-ts@^2.4.4";
import lodash from "https://cdn.skypack.dev/lodash";

console.log("rendering..");
console.log("blala..");
console.log(typeof either);
console.log(typeof lodash);

serve(async (req) => {
  return new Response("Not HHHHHH", { status: 404 });
});
