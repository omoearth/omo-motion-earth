import gql from "graphql-tag";
import { getOmoComponents } from "@/apollo/clientCache/queries";

const typeDefs = gql`
  type OmoComponent {
    id: ID!
    name: String!
    show: Boolean!
    slot: String
    style: String
  }
  type Mutation {
    toggleComponent(name: String!): Boolean
  }
`;

const resolvers = {
  Mutation: {
    toggleComponent: (root, { name }, { cache }) => {
      const data = cache.readQuery({ query: getOmoComponents });
      const activeComponent = data.omoComponents.find(
        comp => comp.name === name
      );
      activeComponent.show = !activeComponent.show;
      cache.writeQuery({ query: getOmoComponents, data });
      return activeComponent.show;
    }
  }
};

const clientState = {
  // Set initial local state.
  defaults: {
    omoComponents: [
      {
        __typename: "OmoComponent",
        id: "adsgfa82ouhfusafdsdf",
        name: "OmoHeaderSlot",
        show: true,
        slot: "OmoProgressBar",
        style: ""
      },
      {
        __typename: "OmoComponent",
        id: "01983urnv901u3e09uc21e",
        name: "OmoNavSlot",
        show: true,
        slot: "OmoMenu",
        style: ""
      },
      {
        __typename: "OmoComponent",
        id: "109384701923471234",
        name: "OmoDetailSlot",
        show: true,
        slot: "OmoMenu",
        style: ""
      },
      {
        __typename: "OmoComponent",
        id: "1409312uzcn90i12e",
        name: "OmoActionsSlot",
        show: false,
        slot: "OmoUserInvite",
        style: ""
      },
      {
        __typename: "OmoComponent",
        id: "10938un4v902iepadsf",
        name: "OmoFooterSlot",
        show: true,
        slot: "OmoNavBar",
        style: ""
      }
    ]
  },
  resolvers,
  typeDefs
};

export default function(context) {
  return {
    httpEndpoint: process.env.EARTH_HTTP_ENDPOINT,
    wsEndpoint: process.env.EARTH_WS_ENDPOINT,
    httpLinkOptions: {
      uri: "/api",
      credentials: "same-origin"
    },
    clientState
  };
}
