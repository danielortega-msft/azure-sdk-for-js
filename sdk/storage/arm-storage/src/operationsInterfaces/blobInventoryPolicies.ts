/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  BlobInventoryPolicy,
  BlobInventoryPoliciesListOptionalParams,
  BlobInventoryPolicyName,
  BlobInventoryPoliciesGetOptionalParams,
  BlobInventoryPoliciesGetResponse,
  BlobInventoryPoliciesCreateOrUpdateOptionalParams,
  BlobInventoryPoliciesCreateOrUpdateResponse,
  BlobInventoryPoliciesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BlobInventoryPolicies. */
export interface BlobInventoryPolicies {
  /**
   * Gets the blob inventory policy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: BlobInventoryPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<BlobInventoryPolicy>;
  /**
   * Gets the blob inventory policy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param blobInventoryPolicyName The name of the storage account blob inventory policy. It should
   *                                always be 'default'
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    blobInventoryPolicyName: BlobInventoryPolicyName,
    options?: BlobInventoryPoliciesGetOptionalParams
  ): Promise<BlobInventoryPoliciesGetResponse>;
  /**
   * Sets the blob inventory policy to the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param blobInventoryPolicyName The name of the storage account blob inventory policy. It should
   *                                always be 'default'
   * @param properties The blob inventory policy set to a storage account.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    blobInventoryPolicyName: BlobInventoryPolicyName,
    properties: BlobInventoryPolicy,
    options?: BlobInventoryPoliciesCreateOrUpdateOptionalParams
  ): Promise<BlobInventoryPoliciesCreateOrUpdateResponse>;
  /**
   * Deletes the blob inventory policy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param blobInventoryPolicyName The name of the storage account blob inventory policy. It should
   *                                always be 'default'
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    blobInventoryPolicyName: BlobInventoryPolicyName,
    options?: BlobInventoryPoliciesDeleteOptionalParams
  ): Promise<void>;
}