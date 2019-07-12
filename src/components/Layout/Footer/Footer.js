import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <section class="Home">
        <div class="col-auto menu">
          <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">About site</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">How to use it</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
      </section>
    )
  }
}

