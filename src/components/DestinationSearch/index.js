// Write your code here
import {Component} from 'react' 

import DestinationItem from '../DestinationItem' 

import './index.css'

class DestinationSearch extends Component{
    state = {
        searchInput: ' ',
    }

    onClickingSearchInput = event => {
        this.setState({
            searchInput: event.target.value
        })
    }
    render(){
        const {searchInput} = this.state
        const {destinationsList} = this.props
        const filteredSearchList = destinationsList.filter(each =>
        each.name.toLowerCase().includes(searchInput.toLowerCase()),
        )
        return(
            <div className="app-container">
            <div className="destination-container">
                <h1 className="heading">Destination Search</h1>
                <div className="search-container">
                <input type="search" value={searchInput}
                placeholder="Search" onChange={this.onClickingSearchInput}
                className="search-input" />
                <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon" className="search-icon" />
                </div>
                <ul className="destination-items-list">
                {filteredSearchList.map(each => (
                    <DestinationItem key={each.id} 
                    destinationDetails = {each} 
                    />
                ))}
                </ul>
            </div>
            </div>

        )
    }
}

export default DestinationSearch