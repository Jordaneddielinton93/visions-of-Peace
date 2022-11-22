export default async function fetchAllData() {
  return await (await fetch(`https://fakestoreapi.com/products`)).json();
}
