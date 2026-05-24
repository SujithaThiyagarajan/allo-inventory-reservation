import { NextResponse } from "next/server";
import { getStock, reserveOne } from "../../data";

export async function GET() {
  return NextResponse.json({ stock: getStock() });
}

export async function POST() {
  const ok = reserveOne();
  return NextResponse.json({ ok, stock: getStock() });
}
