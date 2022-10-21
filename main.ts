// @ts-nocheck
import file from "./data.json" assert { type: "json"}
import * as S from "https://cdn.pika.dev/fp-ts@^2.4.4/string";
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { pipe } from "https://cdn.pika.dev/fp-ts@^2.4.4/function";
import { map } from "https://cdn.pika.dev/fp-ts@^2.4.4/Array";


const f = (item): any => item.text

const replace = S.replace(/love/g, '')

const sentences = pipe(file.sentences, map(f))
const removeLove = (word: any) => pipe(word, replace)
const output =  pipe(sentences, map(removeLove) )


serve(async (req) => {
  return new Response(output, { status: 200 });
});
