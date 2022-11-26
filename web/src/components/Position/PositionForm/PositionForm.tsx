import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditPositionById, UpdatePositionInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormPosition = NonNullable<EditPositionById['position']>

interface PositionFormProps {
  position?: EditPositionById['position']
  onSave: (data: UpdatePositionInput, id?: FormPosition['id']) => void
  error: RWGqlError
  loading: boolean
}

const PositionForm = (props: PositionFormProps) => {
  const onSubmit = (data: FormPosition) => {
  
    
    
  
    props.onSave(data, props?.position?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPosition> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.position?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PositionForm
