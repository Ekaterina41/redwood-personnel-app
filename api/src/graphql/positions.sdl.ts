export const schema = gql`
  type Position {
    id: Int!
    name: String!
    employees: [Employee]!
  }

  type Query {
    positions: [Position!]! @requireAuth
    position(id: Int!): Position @requireAuth
  }

  input CreatePositionInput {
    name: String!
  }

  input UpdatePositionInput {
    name: String
  }

  type Mutation {
    createPosition(input: CreatePositionInput!): Position! @requireAuth
    updatePosition(id: Int!, input: UpdatePositionInput!): Position!
      @requireAuth
    deletePosition(id: Int!): Position! @requireAuth
  }
`
