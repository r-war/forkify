import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';
/** Global State at the app
 *
 *  - search object
 *  - current recipe object
 *  - shopping list object
 *  - liked recipes
 * 
*/

const state = {};

const controlSearch = async () =>{
    // get query from view
    const query = searchView.getInput();

    //console.log(query);
    
    if(query){
        // new search object and add to state
        state.search = new Search(query);

        // prepare UI for results
        searchView.clearInput();
        searchView.clearResult();

        // search for recipes
        await state.search.getResultList();

        // render result to UI
        searchView.renderResults(state.search.result);
    }

}

elements.searchForm.addEventListener('submit',e =>{
    e.preventDefault();
    controlSearch();
})