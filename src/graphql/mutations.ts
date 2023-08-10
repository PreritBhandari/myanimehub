/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMyAnimeHub = /* GraphQL */ `
  mutation CreateMyAnimeHub(
    $input: CreateMyAnimeHubInput!
    $condition: ModelMyAnimeHubConditionInput
  ) {
    createMyAnimeHub(input: $input, condition: $condition) {
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
export const updateMyAnimeHub = /* GraphQL */ `
  mutation UpdateMyAnimeHub(
    $input: UpdateMyAnimeHubInput!
    $condition: ModelMyAnimeHubConditionInput
  ) {
    updateMyAnimeHub(input: $input, condition: $condition) {
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
export const deleteMyAnimeHub = /* GraphQL */ `
  mutation DeleteMyAnimeHub(
    $input: DeleteMyAnimeHubInput!
    $condition: ModelMyAnimeHubConditionInput
  ) {
    deleteMyAnimeHub(input: $input, condition: $condition) {
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
