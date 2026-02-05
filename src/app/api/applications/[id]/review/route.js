import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tramites-api-production-88d5.up.railway.app';

export async function POST(request, { params }) {
  try {
    const { id } = await params;
    const authHeader = request.headers.get('authorization');
    
    const response = await fetch(`${BACKEND_URL}/applications/${id}/review`, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error al conectar con el servidor' },
      { status: 500 }
    );
  }
}
