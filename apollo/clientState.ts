import gql from "graphql-tag";
import { getOmoComponents } from "@/apollo/clientCache/queries";

const typeDefs = gql`
  type OmoComponent {
    id: ID!
    name: String!
    show: Boolean!
    slot: String
    style: String
    type: String
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
        style: "",
        type: "layout"
      },
      {
        __typename: "OmoComponent",
        id: "01983urnv901u3e09uc21e",
        name: "OmoNavSlot",
        show: true,
        slot: "OmoMenu",
        style: "",
        type: "layout"
      },
      {
        __typename: "OmoComponent",
        id: "109384701923471234",
        name: "OmoDetailSlot",
        show: true,
        slot: "",
        style: "",
        type: "layout"
      },
      {
        __typename: "OmoComponent",
        id: "1409312uzcn90i12e",
        name: "OmoActionsSlot",
        show: false,
        slot: "OmoUserLoginWithPassword",
        style: "",
        type: "layout"
      },
      {
        __typename: "OmoComponent",
        id: "10938un4v902iepadsf",
        name: "OmoFooterSlot",
        show: true,
        slot: "OmoNavBar",
        style: "",
        type: "layout"
      }
    ]
  },
  resolvers,
  typeDefs
};

export default clientState;
