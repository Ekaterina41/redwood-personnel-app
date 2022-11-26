import type { Prisma, Position } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PositionCreateArgs>({
  position: {
    one: { data: { name: 'String8471536' } },
    two: { data: { name: 'String4802160' } },
  },
})

export type StandardScenario = ScenarioData<Position, 'position'>
