import { Handlers } from "$fresh/server.ts";
import Log from "../components/complog.tsx";
import axios from "npm:axios";
import jwt from "npm:jsonwebtoken";
import { getCookies, setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const cookie = getCookies(req.headers);
    if (Object.keys(cookie).length === 0) {
      console.log("no logueado");
      return ctx.render();
    }
    const headers = new Headers();

    headers.set("location", "/discos");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
  async POST(req, ctx) {
    try {
      const url = new URL(req.url);

      const form = await req.formData();
      const email = form.get("email")?.toString();
      const password = form.get("password")?.toString();
      const JWT_SECRET = Deno.env.get("JWT_SECRET");
      if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not set in the environment");
      }

      const respuesta = await axios.post(
        "https://videoapp-api.deno.dev/checkuser",
        {
          email: email,
          password: password,
        },
      );
      const data = respuesta.data;

      const token = jwt.sign(
        {
          email,
          id: data.id,
          name: data.name,
        },
        Deno.env.get("JWT_SECRET"),
        {
          expiresIn: "24h",
        },
      );

      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: token,
        sameSite: "Lax", // this is important to prevent CSRF attacks
        domain: url.hostname,
        path: "/",
        secure: true,
      });
      headers.set("location", "/discos");
      return new Response(null, {
        status: 303, // See Other
        headers,
      });
    } catch (error) {
      console.log("error al loguears");
      return ctx.render();
    }
  },
};

export default function Login() {
  return <Log />;
}
