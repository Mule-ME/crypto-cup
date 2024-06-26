import connectMongoDB from '@/libs/mongodb';
import Assets from '@/models/assets';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectMongoDB();
  const assets = await Assets.find();
  return NextResponse.json({ assets });
}
