
import Catagories from '../components/Catagories.jsx'
import RestaruntList from '../components/RestaruntList.jsx'
import Collection from '../components/Collection.jsx'
import AppComponentItem from '../components/AppComponent.jsx'
export default function Homepage(){

    return(
        <main>
         <Catagories/>
         <RestaruntList/>
         <Collection/>
         <AppComponentItem/>
        </main>

    )
}