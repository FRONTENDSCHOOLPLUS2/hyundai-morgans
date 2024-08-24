import { fetchProducts } from "@/data/fetch/productFetch";
import PaymentsAction from "./paymentsComplete/PaymentsAction";

export default async function Payments () {

  const modelData = await fetchProducts();
  const modelDataOption = modelData.filter(item =>item.extra.category.includes('option'))
  console.log('데이터확인-----',modelDataOption)
  console.log('데이터길이확인-----',modelDataOption.length)


  return(
    <PaymentsAction/>
  )
}