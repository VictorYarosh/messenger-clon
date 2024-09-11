import { NextRequest, NextResponse } from 'next/server';
import NextAuth from 'next-auth';

import { authOptions } from './auth';

// Create a function to handle NextAuth with the appropriate types
async function handleNextAuth(req: NextRequest) {
  const { method } = req;

  // Convert NextRequest to NextApiRequest and NextResponse to NextApiResponse
  // Note: This is a simplified approach; you may need to adapt this based on your needs
  const res = NextResponse.next();

  if (method === 'GET' || method === 'POST') {
    return NextAuth(req as any, res as any, authOptions); // Casting to any to bypass TypeScript errors
  }

  return new NextResponse('Method Not Allowed', { status: 405 });
}

// Export GET and POST handlers
export async function GET(req: NextRequest) {
  return handleNextAuth(req);
}

export async function POST(req: NextRequest) {
  return handleNextAuth(req);
}
