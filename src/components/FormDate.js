import React from 'react'
import { Form, Input, Select } from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const optionsMonth = [
  { key: 'jan', text: 'January', value: 'jan' },
  { key: 'feb', text: 'Feburary', value: 'feb' },
]
const optionsDay = [
  { key: '01', text: '01', value: '01' },
  { key: '02', text: '02', value: '02' },
]
const optionsYear = [
  { key: '2019', text: '2019', value: '2019' },
  { key: '2018', text: '2018', value: '2018' },
]

const FormDate = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field control={Select} label='' options={optionsMonth} placeholder='Month' />
      <Form.Field control={Select} label='' options={optionsDay} placeholder='Day' />
      <Form.Field control={Select} label='' options={optionsYear} placeholder='Year' />
    </Form.Group>
    <style jsx>{`
      .ui.form .fields {
          flex-wrap: inherit;
      }
      .ui.selection.dropdown {
          border-radius: 2px;
          min-width: 5em;
      }
    `}</style>
  </Form>
)

export default FormDate