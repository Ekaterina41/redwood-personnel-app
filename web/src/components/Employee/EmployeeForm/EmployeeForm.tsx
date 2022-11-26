import type { EditEmployeeById, UpdateEmployeeInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
  DateField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormEmployee = NonNullable<EditEmployeeById['employee']>

interface EmployeeFormProps {
  employee?: EditEmployeeById['employee']
  onSave: (data: UpdateEmployeeInput, id?: FormEmployee['id']) => void
  error: RWGqlError
  loading: boolean
}

const EmployeeForm = (props: EmployeeFormProps) => {
  const onSubmit = (data: FormEmployee) => {
    props.onSave(data, props?.employee?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEmployee> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.employee?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.employee?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="surname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Surname
        </Label>

        <TextField
          name="surname"
          defaultValue={props.employee?.surname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="surname" className="rw-field-error" />

        <Label
          name="dateOfBirth"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date of birth
        </Label>

        {/* TODO how to correctly change to just Date without Time? */}
        <DatetimeLocalField
          name="dateOfBirth"
          defaultValue={formatDatetime(props.employee?.dateOfBirth)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dateOfBirth" className="rw-field-error" />

        <Label
          name="phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>

        <TextField
          name="phone"
          defaultValue={props.employee?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="projectId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Project id
        </Label>

        <NumberField
          name="projectId"
          defaultValue={props.employee?.projectId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="projectId" className="rw-field-error" />

        <Label
          name="positionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Position id
        </Label>

        <NumberField
          name="positionId"
          defaultValue={props.employee?.positionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="positionId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EmployeeForm
