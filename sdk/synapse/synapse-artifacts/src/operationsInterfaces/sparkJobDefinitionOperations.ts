/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SparkJobDefinitionResource,
  SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceOptionalParams,
  SparkJobDefinitionCreateOrUpdateSparkJobDefinitionOptionalParams,
  SparkJobDefinitionCreateOrUpdateSparkJobDefinitionResponse,
  SparkJobDefinitionGetSparkJobDefinitionOptionalParams,
  SparkJobDefinitionGetSparkJobDefinitionResponse,
  SparkJobDefinitionDeleteSparkJobDefinitionOptionalParams,
  SparkJobDefinitionExecuteSparkJobDefinitionOptionalParams,
  SparkJobDefinitionExecuteSparkJobDefinitionResponse,
  ArtifactRenameRequest,
  SparkJobDefinitionRenameSparkJobDefinitionOptionalParams,
  SparkJobDefinitionDebugSparkJobDefinitionOptionalParams,
  SparkJobDefinitionDebugSparkJobDefinitionResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SparkJobDefinitionOperations. */
export interface SparkJobDefinitionOperations {
  /**
   * Lists spark job definitions.
   * @param options The options parameters.
   */
  listSparkJobDefinitionsByWorkspace(
    options?: SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<SparkJobDefinitionResource>;
  /**
   * Creates or updates a Spark Job Definition.
   * @param sparkJobDefinitionName The spark job definition name.
   * @param sparkJobDefinition Spark Job Definition resource definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdateSparkJobDefinition(
    sparkJobDefinitionName: string,
    sparkJobDefinition: SparkJobDefinitionResource,
    options?: SparkJobDefinitionCreateOrUpdateSparkJobDefinitionOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        SparkJobDefinitionCreateOrUpdateSparkJobDefinitionResponse
      >,
      SparkJobDefinitionCreateOrUpdateSparkJobDefinitionResponse
    >
  >;
  /**
   * Creates or updates a Spark Job Definition.
   * @param sparkJobDefinitionName The spark job definition name.
   * @param sparkJobDefinition Spark Job Definition resource definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdateSparkJobDefinitionAndWait(
    sparkJobDefinitionName: string,
    sparkJobDefinition: SparkJobDefinitionResource,
    options?: SparkJobDefinitionCreateOrUpdateSparkJobDefinitionOptionalParams
  ): Promise<SparkJobDefinitionCreateOrUpdateSparkJobDefinitionResponse>;
  /**
   * Gets a Spark Job Definition.
   * @param sparkJobDefinitionName The spark job definition name.
   * @param options The options parameters.
   */
  getSparkJobDefinition(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionGetSparkJobDefinitionOptionalParams
  ): Promise<SparkJobDefinitionGetSparkJobDefinitionResponse>;
  /**
   * Deletes a Spark Job Definition.
   * @param sparkJobDefinitionName The spark job definition name.
   * @param options The options parameters.
   */
  beginDeleteSparkJobDefinition(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionDeleteSparkJobDefinitionOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a Spark Job Definition.
   * @param sparkJobDefinitionName The spark job definition name.
   * @param options The options parameters.
   */
  beginDeleteSparkJobDefinitionAndWait(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionDeleteSparkJobDefinitionOptionalParams
  ): Promise<void>;
  /**
   * Executes the spark job definition.
   * @param sparkJobDefinitionName The spark job definition name.
   * @param options The options parameters.
   */
  beginExecuteSparkJobDefinition(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionExecuteSparkJobDefinitionOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SparkJobDefinitionExecuteSparkJobDefinitionResponse>,
      SparkJobDefinitionExecuteSparkJobDefinitionResponse
    >
  >;
  /**
   * Executes the spark job definition.
   * @param sparkJobDefinitionName The spark job definition name.
   * @param options The options parameters.
   */
  beginExecuteSparkJobDefinitionAndWait(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionExecuteSparkJobDefinitionOptionalParams
  ): Promise<SparkJobDefinitionExecuteSparkJobDefinitionResponse>;
  /**
   * Renames a sparkJobDefinition.
   * @param sparkJobDefinitionName The spark job definition name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  beginRenameSparkJobDefinition(
    sparkJobDefinitionName: string,
    request: ArtifactRenameRequest,
    options?: SparkJobDefinitionRenameSparkJobDefinitionOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Renames a sparkJobDefinition.
   * @param sparkJobDefinitionName The spark job definition name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  beginRenameSparkJobDefinitionAndWait(
    sparkJobDefinitionName: string,
    request: ArtifactRenameRequest,
    options?: SparkJobDefinitionRenameSparkJobDefinitionOptionalParams
  ): Promise<void>;
  /**
   * Debug the spark job definition.
   * @param sparkJobDefinitionAzureResource Spark Job Definition resource definition.
   * @param options The options parameters.
   */
  beginDebugSparkJobDefinition(
    sparkJobDefinitionAzureResource: SparkJobDefinitionResource,
    options?: SparkJobDefinitionDebugSparkJobDefinitionOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SparkJobDefinitionDebugSparkJobDefinitionResponse>,
      SparkJobDefinitionDebugSparkJobDefinitionResponse
    >
  >;
  /**
   * Debug the spark job definition.
   * @param sparkJobDefinitionAzureResource Spark Job Definition resource definition.
   * @param options The options parameters.
   */
  beginDebugSparkJobDefinitionAndWait(
    sparkJobDefinitionAzureResource: SparkJobDefinitionResource,
    options?: SparkJobDefinitionDebugSparkJobDefinitionOptionalParams
  ): Promise<SparkJobDefinitionDebugSparkJobDefinitionResponse>;
}