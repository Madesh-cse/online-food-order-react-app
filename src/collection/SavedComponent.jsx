import classes from './CollectionLocation.module.css'
export default function SavedComponent(){

    return(
        <section className={classes.SaveContainer}>
            <div className={classes.SaveContainerImg}>
              <img src='https://b.zmtcdn.com/webFrontend/3f23e42e880731a30472723e77825f431575972761.png' alt=''/>
            </div>
            <h1>Save collections you love! <br /> They'll appear here.</h1>
        </section>
    )
}