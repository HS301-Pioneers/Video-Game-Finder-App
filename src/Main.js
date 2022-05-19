import React from "react";
import FavoriteGames from "./FavoriteGames";

class Main extends React.Component{ 
    render() {
         return(
           <>
           
            <form className='form' onSubmit={this.getLocation}>

            Your Search: {" "}
            <input type="text" name="yourgame" onChange={this.handleChange} />
            <button type='submit'>Search</button>
          </form>

          <FavoriteGames />

         
          </>
        
         )
        
         
        }
    
    }

    export default Main;