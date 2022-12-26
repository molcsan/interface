import HermesSection from '../../components/MaiaDAO/HermesSection'
import HeroSection from '../../components/MaiaDAO/HeroSection'
import MaiaFooter from '../../components/MaiaDAO/MaiaFooter'
import MaiaPartners from '../../components/MaiaDAO/MaiaPartners'
import MaiaSection from '../../components/MaiaDAO/MaiaSection'
import { WidePageWrapper } from '../../components/swap/styleds'

export default function MaiaDAO() {
  return (
    <>
      <HeroSection />
      <WidePageWrapper>
        <MaiaSection />
        <HermesSection />
        <MaiaPartners />
      </WidePageWrapper>
      <MaiaFooter />
    </>
  )
}
