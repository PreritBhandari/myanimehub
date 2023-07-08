/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnime = /* GraphQL */ `
  mutation CreateAnime(
    $input: CreateAnimeInput!
    $condition: ModelAnimeConditionInput
  ) {
    createAnime(input: $input, condition: $condition) {
      id
      isSeen
      isWatchList
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAnime = /* GraphQL */ `
  mutation UpdateAnime(
    $input: UpdateAnimeInput!
    $condition: ModelAnimeConditionInput
  ) {
    updateAnime(input: $input, condition: $condition) {
      id
      isSeen
      isWatchList
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAnime = /* GraphQL */ `
  mutation DeleteAnime(
    $input: DeleteAnimeInput!
    $condition: ModelAnimeConditionInput
  ) {
    deleteAnime(input: $input, condition: $condition) {
      id
      isSeen
      isWatchList
      createdAt
      updatedAt
      __typename
    }
  }
`;
