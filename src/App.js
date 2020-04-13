import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import contacts from './contacts.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import TableContent from './components/TableContent'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contactsInit: contacts.slice(0, 5),
      contactsRemainder: contacts.slice(5, contacts.length),
    }

    this.handleAddRandomContact = this.handleAddRandomContact.bind(this)
    this.handleSortByName = this.handleSortByName.bind(this)
    this.handleSortByPop = this.handleSortByPop.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleAddRandomContact = function () {
    const idx = Math.floor(Math.random() * this.state.contactsRemainder.length)
    this.setState({
      contactsInit: [...this.state.contactsInit, this.state.contactsRemainder[idx]],
    })
  }

  handleSortByName = function () {
    const sortedContacts = this.state.contactsInit.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
      return 0
    })

    this.setState({
      contactsInit: sortedContacts,
    })
  }

  handleDelete = function (id) {
    this.setState({
      contactsInit: this.state.contactsInit.filter((el) => el.id !== id),
    })
  }

  handleSortByPop = function () {
    let sortedContacts = this.state.contactsInit.sort((a, b) => {
      return b.popularity - a.popularity
    })

    this.setState({
      contactsInit: sortedContacts,
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="mb-4 mt-4">IronContacts</h1>
              <Button className="mb-3 mr-2" variant="primary" onClick={this.handleAddRandomContact}>
                Add Random Contact
              </Button>
              <Button className="mb-3 mr-2" variant="outline-primary" onClick={this.handleSortByName}>
                Sort By Name
              </Button>
              <Button className="mb-3 mr-2" variant="outline-primary" onClick={this.handleSortByPop}>
                Sort By Popularity
              </Button>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contactsInit.map((item, index) => (
                    <TableContent deleteHandler={this.handleDelete} key={item.id} {...item} />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
