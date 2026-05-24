import Link from "next/link";
import { product } from "../product";

export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout</h1>
      <p>{product.name}</p>
      <p>Total: ${product.price}</p>
      <button>Place order</button>
      <br />
      <Link href="/">Back to product</Link>
    </main>
  );
}
