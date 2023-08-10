/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMyAnimeHubInput = {
  id?: string | null,
  title?: string | null,
  isSeen?: string | null,
  isWatchList?: string | null,
};

export type ModelMyAnimeHubConditionInput = {
  title?: ModelStringInput | null,
  isSeen?: ModelStringInput | null,
  isWatchList?: ModelStringInput | null,
  and?: Array< ModelMyAnimeHubConditionInput | null > | null,
  or?: Array< ModelMyAnimeHubConditionInput | null > | null,
  not?: ModelMyAnimeHubConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type MyAnimeHub = {
  __typename: "MyAnimeHub",
  id: string,
  title?: string | null,
  isSeen?: string | null,
  isWatchList?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMyAnimeHubInput = {
  id: string,
  title?: string | null,
  isSeen?: string | null,
  isWatchList?: string | null,
};

export type DeleteMyAnimeHubInput = {
  id: string,
};

export type ModelMyAnimeHubFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  isSeen?: ModelStringInput | null,
  isWatchList?: ModelStringInput | null,
  and?: Array< ModelMyAnimeHubFilterInput | null > | null,
  or?: Array< ModelMyAnimeHubFilterInput | null > | null,
  not?: ModelMyAnimeHubFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMyAnimeHubConnection = {
  __typename: "ModelMyAnimeHubConnection",
  items:  Array<MyAnimeHub | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMyAnimeHubFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  isSeen?: ModelSubscriptionStringInput | null,
  isWatchList?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMyAnimeHubFilterInput | null > | null,
  or?: Array< ModelSubscriptionMyAnimeHubFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateMyAnimeHubMutationVariables = {
  input: CreateMyAnimeHubInput,
  condition?: ModelMyAnimeHubConditionInput | null,
};

export type CreateMyAnimeHubMutation = {
  createMyAnimeHub?:  {
    __typename: "MyAnimeHub",
    id: string,
    title?: string | null,
    isSeen?: string | null,
    isWatchList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMyAnimeHubMutationVariables = {
  input: UpdateMyAnimeHubInput,
  condition?: ModelMyAnimeHubConditionInput | null,
};

export type UpdateMyAnimeHubMutation = {
  updateMyAnimeHub?:  {
    __typename: "MyAnimeHub",
    id: string,
    title?: string | null,
    isSeen?: string | null,
    isWatchList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMyAnimeHubMutationVariables = {
  input: DeleteMyAnimeHubInput,
  condition?: ModelMyAnimeHubConditionInput | null,
};

export type DeleteMyAnimeHubMutation = {
  deleteMyAnimeHub?:  {
    __typename: "MyAnimeHub",
    id: string,
    title?: string | null,
    isSeen?: string | null,
    isWatchList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMyAnimeHubQueryVariables = {
  id: string,
};

export type GetMyAnimeHubQuery = {
  getMyAnimeHub?:  {
    __typename: "MyAnimeHub",
    id: string,
    title?: string | null,
    isSeen?: string | null,
    isWatchList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMyAnimeHubsQueryVariables = {
  filter?: ModelMyAnimeHubFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMyAnimeHubsQuery = {
  listMyAnimeHubs?:  {
    __typename: "ModelMyAnimeHubConnection",
    items:  Array< {
      __typename: "MyAnimeHub",
      id: string,
      title?: string | null,
      isSeen?: string | null,
      isWatchList?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMyAnimeHubSubscriptionVariables = {
  filter?: ModelSubscriptionMyAnimeHubFilterInput | null,
};

export type OnCreateMyAnimeHubSubscription = {
  onCreateMyAnimeHub?:  {
    __typename: "MyAnimeHub",
    id: string,
    title?: string | null,
    isSeen?: string | null,
    isWatchList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMyAnimeHubSubscriptionVariables = {
  filter?: ModelSubscriptionMyAnimeHubFilterInput | null,
};

export type OnUpdateMyAnimeHubSubscription = {
  onUpdateMyAnimeHub?:  {
    __typename: "MyAnimeHub",
    id: string,
    title?: string | null,
    isSeen?: string | null,
    isWatchList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMyAnimeHubSubscriptionVariables = {
  filter?: ModelSubscriptionMyAnimeHubFilterInput | null,
};

export type OnDeleteMyAnimeHubSubscription = {
  onDeleteMyAnimeHub?:  {
    __typename: "MyAnimeHub",
    id: string,
    title?: string | null,
    isSeen?: string | null,
    isWatchList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
