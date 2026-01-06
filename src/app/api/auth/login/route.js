import { NextResponse } from "next/server";

const base = process.env.NEXT_PUBLIC_API_URL;

if (!base) {
  return NextResponse.json(
    { message: "Falta NEXT_PUBLIC_API_URL en .env.local" },
    { status: 500 }
  );
}

const url = `${base}/auth/login`;


export async function POST(req) {
  try {
    const body = await req.json();

    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await r.text();
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { message: text?.slice(0, 200) || "Respuesta no JSON del backend" };
    }

    if (!r.ok) {
      return NextResponse.json(
        { message: data?.message || "Login falló" },
        { status: r.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: `Error procesando login: ${e?.message || "unknown"}` },
      { status: 500 }
    );
  }
}
