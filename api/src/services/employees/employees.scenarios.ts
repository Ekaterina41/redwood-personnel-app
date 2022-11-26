import type { Prisma, Employee } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeeCreateArgs>({
  employee: {
    one: {
      data: {
        email: 'String9426019',
        name: 'String',
        surname: 'String',
        dateOfBirth: '2022-11-25T13:20:42.101Z',
        phone: 'String',
      },
    },
    two: {
      data: {
        email: 'String18904',
        name: 'String',
        surname: 'String',
        dateOfBirth: '2022-11-25T13:20:42.101Z',
        phone: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Employee, 'employee'>
