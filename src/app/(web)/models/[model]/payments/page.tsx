import { fetchProducts } from "@/data/fetch/productFetch";
import PaymentsAction from "./paymentsComplete/PaymentsAction";

interface VehicleInfo {
  name:string,
  image:string
}

export default async function Payments () {

  const data = await fetchProducts();
  const optionOriginData = data.filter(item =>item.extra.category.includes('option'))
  const optionData = optionOriginData.map(item => item.extra.option)
  console.log('데이터확인-----',optionData)
  // console.log('데이터길이확인-----',modelDataOption.length)

  const vehicleData = data.filter(item => item.extra.category.includes('vehicle'))
  const vehicleInfo : VehicleInfo[] = vehicleData.map(item => ({
    name:item.name,
    image:item.mainImages[2].path,
  }))
  // console.log('비휘클확인:::',vehicleData)
  // console.log('확인:::',vehicleInfo)


  return(
    <PaymentsAction vehicleInfo={vehicleInfo} optionData={optionData}/>
  )
}
