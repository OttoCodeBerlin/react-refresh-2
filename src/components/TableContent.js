import React from 'react'
import Button from 'react-bootstrap/Button'

export default function TableContent(props) {
  return (
    <tr>
      <td>
        <img width={64} height={'auto'} className="mr-3" src={props.pictureUrl} alt={props.name} />
      </td>
      <td>
        {props.name}
        <br />
        <br />
        <Button
          size="sm"
          variant="outline-danger"
          onClick={(e) => {
            e.preventDefault()
            props.deleteHandler(props.id)
          }}
        >
          Delete
        </Button>
      </td>
      <td>{props.popularity.toFixed(2)}</td>
    </tr>
  )
}
