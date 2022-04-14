import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
       products: [
         {
          "_id": "1",
          "title": "Level Up Shirt",
          "src": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80",
          "description": "description",
          "price": 20,
          "colors": ["red", "blue", "black"],
          "count": 2,
         },
         {
          "_id": "2",
          "title": "Level Up Sweat Pant",
          "src": "https://images.unsplash.com/photo-1572689535562-3c54a15292d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          "description": "description",
          "price": 20,
          "colors": ["red", "blue", "black"],
          "count": 2,
         },
         {
          "_id": "3",
          "title": "Level Up Tank Top",
          "src": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80",
          "description": "description",
          "price": 20,
          "colors": ["red", "blue", "black"],
          "count": 2,
         },
         {
          "_id": "4",
          "title": "Level Up T-Shirt",
          "src": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80",
          "description": "description",
          "price": 20,
          "colors": ["red", "blue", "black"],
          "count": 2,
         },
         {
          "_id": "5",
          "title": "Level Up Sweater",
          "src": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80",
          "description": "description",
          "price": 20,
          "colors": ["red", "blue", "black"],
          "count": 2,
         },
         {
          "_id": "6",
          "title": "Level Up Embroidery Shirt",
          "src": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80",
          "description": "description",
          "price": 20,
          "colors": ["red", "blue", "black"],
          "count": 2,
         },
       ]
    }
  }
  
  render(){
    const {products} = this.state;
    return(
      <DataContext.Provider value={{products}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
export default DataProvider;