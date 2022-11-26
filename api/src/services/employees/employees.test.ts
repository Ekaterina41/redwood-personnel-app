import type { Employee } from '@prisma/client'

import {
  employees,
  employee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from './employees'
import type { StandardScenario } from './employees.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('employees', () => {
  scenario('returns all employees', async (scenario: StandardScenario) => {
    const result = await employees()

    expect(result.length).toEqual(Object.keys(scenario.employee).length)
  })

  scenario('returns a single employee', async (scenario: StandardScenario) => {
    const result = await employee({ id: scenario.employee.one.id })

    expect(result).toEqual(scenario.employee.one)
  })

  scenario('creates a employee', async () => {
    const result = await createEmployee({
      input: {
        email: 'String3240981',
        name: 'String',
        surname: 'String',
        dateOfBirth: '2022-11-25T13:20:42.048Z',
        phone: 'String',
      },
    })

    expect(result.email).toEqual('String3240981')
    expect(result.name).toEqual('String')
    expect(result.surname).toEqual('String')
    expect(result.dateOfBirth).toEqual(new Date('2022-11-25T13:20:42.048Z'))
    expect(result.phone).toEqual('String')
  })

  scenario('updates a employee', async (scenario: StandardScenario) => {
    const original = (await employee({
      id: scenario.employee.one.id,
    })) as Employee
    const result = await updateEmployee({
      id: original.id,
      input: { email: 'String79457922' },
    })

    expect(result.email).toEqual('String79457922')
  })

  scenario('deletes a employee', async (scenario: StandardScenario) => {
    const original = (await deleteEmployee({
      id: scenario.employee.one.id,
    })) as Employee
    const result = await employee({ id: original.id })

    expect(result).toEqual(null)
  })
})
