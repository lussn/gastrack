import React, { Component } from 'react'
import { TextField } from 'material-ui'
import $ from './Form.css'

class Form extends Component {
  render () {
    return (
      <div>
        <TextField
          id="total"
          label="Total €"
          className={$.field}
          margin="normal"
        />
        <TextField
          id="price"
          label="€/L"
          className={$.field}
          margin="normal"
        />
        <TextField
          id="litres"
          label="Litres"
          className={$.field}
          margin="normal"
        />
        <TextField
          id="kms"
          label="Kms"
          className={$.field}
          margin="normal"
        />
        <TextField
          id="place"
          label="Gas Station"
          className={$.field}
          margin="normal"
        />
      </div>
    )
  }
}

export default Form