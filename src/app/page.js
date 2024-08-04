import Header from '@/components/modules/Header/Header'
import Category from '@/components/templates/Index/Category/Category'
import InfoBoxes from '@/components/templates/Index/InfoBoxes/InfoBoxes'
import Landding from '@/components/templates/Index/Landding/Landding'

export default function Home() {
  return (
    <>
      <Header />
      <Landding />
      <InfoBoxes />
      <Category />
    </>
  )
}
