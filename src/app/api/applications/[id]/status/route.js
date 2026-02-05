import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function PUT(req, { params }) {
  try {
    const token = req.headers.get("authorization");
    const body = await req.json();
    const { id } = await params; // Await params para Next.js 15

    console.log('PUT /api/applications/[id]/status');
    console.log('ID:', id);
    console.log('Body:', body);
    console.log('Token:', token ? 'Presente' : 'No presente');
    console.log('URL Backend:', `${API_URL}/applications/${id}/status`);

    const response = await fetch(`${API_URL}/applications/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token || "",
      },
      body: JSON.stringify(body),
    });

    console.log('Respuesta del backend:', response.status);
    const data = await response.json();
    console.log('Data del backend:', data);

    if (!response.ok) {
      return NextResponse.json(
        { message: data?.message || data?.error || "Error al actualizar estado" },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error en proxy:', error);
    return NextResponse.json(
      { message: `Error: ${error.message}` },
      { status: 500 }
    );
  }
}
