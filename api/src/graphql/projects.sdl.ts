export const schema = gql`
  type Project {
    id: Int!
    name: String!
    description: String!
    manager: Employee
    managerId: Int
    employees: [Employee]!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    name: String!
    description: String!
    managerId: Int
  }

  input UpdateProjectInput {
    name: String
    description: String
    managerId: Int
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
