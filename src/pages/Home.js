
import Catagories from '../components/Catagories.jsx'
import RestaruntList from '../components/RestaruntList.jsx'
import Collection from '../components/Collection.jsx'
import AppComponentItem from '../components/AppComponent.jsx'
import { TabTitle } from '../components/GeneralFunction.js'
export default function Homepage(){
    TabTitle('Kinetic Food')
    return(
        <main>
         <Catagories/>
         <RestaruntList/>
         <Collection/>
         <AppComponentItem/>
        </main>

    )
}