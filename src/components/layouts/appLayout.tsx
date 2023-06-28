import {Fragment} from 'react'
import FooterSection from '../shared/footer'
import Navbar from '../shared/navbar'


type Props = {
  children: React.ReactNode
}


function AppLayout({children}: Props){
  return(
  <Fragment>
    <Navbar />
    {children}
    <FooterSection />
    </Fragment>
   )
}

export default AppLayout 
