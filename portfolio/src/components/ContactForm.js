import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

const ContactForm = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Full name'
        placeholder='Full name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Email'
        placeholder='Email'
      />      
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Message'    
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'      
    />
  </Form>
)

export default ContactForm;