export const schema = gql`
  type Employee {
    id: Int!
    email: String!
    name: String!
    surname: String!
    dateOfBirth: DateTime!
    phone: String!
    project: Project
    projectId: Int
    managedProject: Project
    position: Position
    positionId: Int
  }

  type EmployeesCount {
    count: Int!
  }

  type Query {
    employees: [Employee!]! @requireAuth
    employeesCount: EmployeesCount @requireAuth
    employee(id: Int!): Employee @requireAuth
  }

  input CreateEmployeeInput {
    email: String!
    name: String!
    surname: String!
    dateOfBirth: DateTime!
    phone: String!
    projectId: Int
    positionId: Int
  }

  input UpdateEmployeeInput {
    email: String
    name: String
    surname: String
    dateOfBirth: DateTime
    phone: String
    projectId: Int
    positionId: Int
  }

  type Mutation {
    createEmployee(input: CreateEmployeeInput!): Employee! @requireAuth
    updateEmployee(id: Int!, input: UpdateEmployeeInput!): Employee!
      @requireAuth
    deleteEmployee(id: Int!): Employee! @requireAuth
  }
`
