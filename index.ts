import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

serve((req: Request) => new Response("Hello World"));
serve((req: Request) => {
  return new Response("Hell world", {
    headers: { "content-type": "text/plain" },
  });
});
