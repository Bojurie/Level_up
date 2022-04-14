import React, { Component } from 'react'
import Details from './Details'
import Products from './Products'
import {Route} from 'react-router-dom'

 class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/product" component={Products} exact/>
        <Route path="/detail/:id" component={Details} />

      </section>
    )
  }
}
export default Section;