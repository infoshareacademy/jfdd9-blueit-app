import React, {Component} from 'react'

const SearchContext = React.createContext();

export const SearchConsumer = SearchContext.Consumer;

export class SearchProvider extends Component {

  state = {}

  render() {
    return (

    )
  }
}

export function withSearch(Component) {
  function SearchAwareComponent(props) {
    return (
      <SearchConsumer>
        {
          propsFromContext => (
            <Component {...props} {...propsFromContext}/>
          )
        }
      </SearchConsumer>
    )
  }

  SearchAwareComponent.displayName = `SearchAware(${Component.displayName || Component.name || Component})`

  return SearchAwareComponent
}