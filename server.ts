import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    // 返回 index.html
    const file = await Deno.readFile("./index.html");
    return new Response(file, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // 处理其他请求
  return new Response("Not Found", { status: 404 });
};

console.log("Server running at http://localhost:8000");
await serve(handler, { port: 8000 });
