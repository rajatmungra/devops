
import React from "react";

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {term: ''};
      }

    onTextChange = (e)=>{
        this.setState({term: e.target.value});
      }

    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.term} type="text" onChange={this.onTextChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;