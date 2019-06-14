import gql from "graphql-tag";

export const getOmoComponents = gql`
  query {
    omoComponents @client {
      id
      name
      show
      slot
    }
  }
`;

export const toggleOmoComponents = gql`
  mutation($name: String!) {
    toggleComponent(name: $name) @client
  }
`;
