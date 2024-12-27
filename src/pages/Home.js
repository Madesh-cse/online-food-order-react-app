
import Catagories from '../components/Catagories.jsx'
import RestaruntList from '../components/RestaruntList.jsx'
import Collection from '../components/Collection.jsx'
import AppComponentItem from '../components/AppComponent.jsx'
import Footer from '../components/Footer.jsx'
import AccordionContent from '../components/AccordionContent.jsx'

export default function Homepage(){

    return(
        <main>
         <Catagories/>
         <RestaruntList/>
         <Collection/>
         <AppComponentItem/>
         <AccordionContent/>
         <Footer/>
        </main>

    )
}