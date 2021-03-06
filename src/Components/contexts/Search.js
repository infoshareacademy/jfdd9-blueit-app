import React, {Component} from 'react'

const SearchContext = React.createContext();

export const SearchConsumer = SearchContext.Consumer;


export class SearchProvider extends Component {

  state = {
    selectedOptions: [],
    searchTerm: '',
    isOwned: false,

    toggleOption: optionName => this.setState(
      ({selectedOptions}) => ({
        selectedOptions: selectedOptions.includes(optionName) ?
          selectedOptions.filter(option => option !== optionName) :
          selectedOptions.concat(optionName)
      })
    ),

    toggleOwned: () =>
      this.setState({ isOwned: !this.state.isOwned }),

    searchUpdated: (term) => {
      this.setState({searchTerm: term})
    },


  clearSearchState: () =>
    this.setState({
      selectedOptions: [],
      searchTerm: ''
    })
  }

  render() {
    return (
      <SearchContext.Provider value={this.state}>
        {this.props.children}
      </SearchContext.Provider>
    )
  }
}

export function withSearch(Component) {
  function SearchAwareComponent(props) {
    return (
      <SearchConsumer>
        {
          state => (
            <Component {...props} {...state}/>
          )
        }
      </SearchConsumer>
    )
  }

  SearchAwareComponent.displayName = `SearchAware(${Component.displayName || Component.name || Component})`

  return SearchAwareComponent
}