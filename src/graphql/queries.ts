/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten


// Use command 'amplify codegen' to generate graphql folder incase you need to delete it 


export const getMyAnimeHub = /* GraphQL */ `
  query GetMyAnimeHub($id: ID!) {
    getMyAnimeHub(id: $id) {
      id
      title
      isSeen
      isWatchList
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMyAnimeHubs = /* GraphQL */ `
  query ListMyAnimeHubs(
    $filter: ModelMyAnimeHubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyAnimeHubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        isSeen
        isWatchList
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
