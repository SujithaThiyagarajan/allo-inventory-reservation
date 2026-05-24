"use client";

import { useEffect, useState } from "react";
import { product } from "./product";

export default function ProductPage() {
  const [stock, setStock] = useState(5);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/reserve")
      .then((res) => res.json())
      .then((data: { stock: number }) => setStock(data.stock));
  }, []);

  async function reserve() {
    const res = await fetch("/api/reserve", { method: "POST" });
    const data: { ok: boolean; stock: number } = await res.json();
    setStock(data.stock);
    setMessage(data.ok ? "Reserved. Continue to checkout." : "Sold out.");
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>Stock: {stock}</p>
      <button onClick={reserve} disabled={stock < 1}>
        Reserve
      </button>
      <p>{message}</p>
      {message.startsWith("Reserved") && <a href="/checkout">Checkout</a>}
    </main>
  );
}
