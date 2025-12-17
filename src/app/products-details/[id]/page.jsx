import ProductDetails from "@/component/Products/ProductDetails";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  console.log(id, "dsdsdsdsd");  // ✔ now works

  return <ProductDetails id={id} />;
}