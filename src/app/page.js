import Header from '@/components/modules/Header/Header'
import BigPoster from '@/components/templates/Index/BigPoster/BigPoster'
import Blogs from '@/components/templates/Index/Blogs/Blogs'
import Brands from '@/components/templates/Index/Brands/Brands'
import Category from '@/components/templates/Index/Category/Category'
import Comments from '@/components/templates/Index/Comments/Comments'
import DealOfDay from '@/components/templates/Index/DealsOfDay/DealsOfDay'
import InfoBoxes from '@/components/templates/Index/InfoBoxes/InfoBoxes'
import Landding from '@/components/templates/Index/Landding/Landding'
import OfferBoxes from '@/components/templates/Index/OfferBoxes/OfferBoxes'
import PopularProducts from '@/components/templates/Index/PopularProducts/PopularProducts'
import TrendingProducts from '@/components/templates/Index/TrendingProducts/TrendingProducts'

export default function Home() {
  return (
    <>
      <Header />
      <Landding />
      <InfoBoxes />
      <OfferBoxes/>
      <Category />
      <TrendingProducts/>
      <BigPoster/>
      <PopularProducts/>
      <DealOfDay/>
      <TrendingProducts/>
      <Brands/>
      <Comments/>
      <Blogs/>
    </>
  )
}
