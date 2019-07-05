import axios from 'axios';

export default class search{
    
    constructor(query){
        this.query =query;
    }

    async getResultList(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key ='5ee032d789c6631f2c2820b1c23ee81f';
        try{
            const rest = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            
            this.result = rest.data.recipes;
            
            //console.log(this.result);
        }
        catch(error){
            alert(error);
        }
        
    }
    

};

