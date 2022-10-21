// @ts-nocheck
import file from "./data.json" assert { type: "json"}
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { pipe } from "https://cdn.pika.dev/fp-ts@^2.4.4/function";
import { Magma } from "https://cdn.pika.dev/fp-ts@^2.4.4/Magma";
import { map } from "https://cdn.pika.dev/fp-ts@^2.4.4/Array";




const output = pipe(
  'Send in the clown',
  console.log
)


serve(async (req) => {
  return new Response("TEST", { status: 200 });
});
