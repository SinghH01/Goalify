import React from 'react'
import Form from 'react-bootstrap/Form'

const Search = ({ setSearchQuery }) => {
  return (
    <Form className="d-flex" style={{ marginInline: 'auto', marginTop: '50px', width: '65%' }} >
      <Form.Control
        type="search"
        onInput={(e) => setSearchQuery(e.target.value)}
        placeholder="search for goals"
        className="me-2"
        aria-label="Search"
        style={{ boxShadow: '1px 1px 10px #888' }}
      />
    </Form >
  )
}

export default Search
