import React from 'react'

class SearchBar extends React.Component{

 


    handleFormSubmit = (e) =>{
        e.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input onChange={this.props.searchMovieProp} 
                            type="text" 
                            className="form-control" 
                            placeholder="Searc a movie"
                           // value={this.state.searchQuery}
                            />
                    </div>
                </div>
            </form>
        )
    }

}

export default SearchBar