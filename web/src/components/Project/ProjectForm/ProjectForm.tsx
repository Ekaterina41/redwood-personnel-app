import type { EditProjectById, UpdateProjectInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import EmployeesSelectListCell from 'src/components/EmployeesSelectListCell'

type FormProject = NonNullable<EditProjectById['project']>

interface ProjectFormProps {
  project?: EditProjectById['project']
  onSave: (data: UpdateProjectInput, id?: FormProject['id']) => void
  error: RWGqlError
  loading: boolean
}

const ProjectForm = (props: ProjectFormProps) => {
  const onSubmit = (data: FormProject) => {
    props.onSave(data, props?.project?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProject> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.project?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.project?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="managerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Manager id
        </Label>

        <SelectField
          name="managerId"
          defaultValue={props.project?.managerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        >
          <EmployeesSelectListCell />
        </SelectField>

        <FieldError name="managerId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProjectForm
