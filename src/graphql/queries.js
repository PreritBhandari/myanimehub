/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnime = /* GraphQL */ `
  query GetAnime($id: ID!) {
    getAnime(id: $id) {
      id
      isSeen
      isWatchList
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAnime = /* GraphQL */ `
  query ListAnime(
    $filter: ModelAnimeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnime(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
