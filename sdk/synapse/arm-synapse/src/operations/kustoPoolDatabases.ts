/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/kustoPoolDatabasesMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a KustoPoolDatabases. */
export class KustoPoolDatabases {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a KustoPoolDatabases.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns the list of databases of the given Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.KustoPoolDatabasesListByKustoPoolResponse>
   */
  listByKustoPool(resourceGroupName: string, workspaceName: string, kustoPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.KustoPoolDatabasesListByKustoPoolResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param callback The callback
   */
  listByKustoPool(resourceGroupName: string, workspaceName: string, kustoPoolName: string, callback: msRest.ServiceCallback<Models.DatabaseListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByKustoPool(resourceGroupName: string, workspaceName: string, kustoPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatabaseListResult>): void;
  listByKustoPool(resourceGroupName: string, workspaceName: string, kustoPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DatabaseListResult>, callback?: msRest.ServiceCallback<Models.DatabaseListResult>): Promise<Models.KustoPoolDatabasesListByKustoPoolResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        kustoPoolName,
        options
      },
      listByKustoPoolOperationSpec,
      callback) as Promise<Models.KustoPoolDatabasesListByKustoPoolResponse>;
  }

  /**
   * Returns a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.KustoPoolDatabasesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, kustoPoolName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.KustoPoolDatabasesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, kustoPoolName: string, databaseName: string, callback: msRest.ServiceCallback<Models.DatabaseUnion>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, kustoPoolName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatabaseUnion>): void;
  get(resourceGroupName: string, workspaceName: string, kustoPoolName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DatabaseUnion>, callback?: msRest.ServiceCallback<Models.DatabaseUnion>): Promise<Models.KustoPoolDatabasesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        kustoPoolName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.KustoPoolDatabasesGetResponse>;
  }

  /**
   * Creates or updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param parameters The database parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.KustoPoolDatabasesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, kustoPoolName: string, databaseName: string, parameters: Models.DatabaseUnion, options?: msRest.RequestOptionsBase): Promise<Models.KustoPoolDatabasesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,workspaceName,kustoPoolName,databaseName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.KustoPoolDatabasesCreateOrUpdateResponse>;
  }

  /**
   * Updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param parameters The database parameters supplied to the Update operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.KustoPoolDatabasesUpdateResponse>
   */
  update(resourceGroupName: string, workspaceName: string, kustoPoolName: string, databaseName: string, parameters: Models.DatabaseUnion, options?: msRest.RequestOptionsBase): Promise<Models.KustoPoolDatabasesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,workspaceName,kustoPoolName,databaseName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.KustoPoolDatabasesUpdateResponse>;
  }

  /**
   * Deletes the database with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, kustoPoolName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,workspaceName,kustoPoolName,databaseName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param parameters The database parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, workspaceName: string, kustoPoolName: string, databaseName: string, parameters: Models.DatabaseUnion, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        kustoPoolName,
        databaseName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param parameters The database parameters supplied to the Update operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, workspaceName: string, kustoPoolName: string, databaseName: string, parameters: Models.DatabaseUnion, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        kustoPoolName,
        databaseName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the database with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, workspaceName: string, kustoPoolName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        kustoPoolName,
        databaseName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByKustoPoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName,
    Parameters.databaseName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Database
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName,
    Parameters.databaseName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Database,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Database
    },
    201: {
      bodyMapper: Mappers.Database
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName,
    Parameters.databaseName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Database,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Database
    },
    202: {
      bodyMapper: Mappers.Database
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName,
    Parameters.databaseName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};