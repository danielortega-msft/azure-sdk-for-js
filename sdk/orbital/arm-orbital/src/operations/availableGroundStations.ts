/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AvailableGroundStations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureOrbitalContext } from "../azureOrbitalContext";
import {
  AvailableGroundStation,
  Enum6,
  AvailableGroundStationsListByCapabilityNextOptionalParams,
  AvailableGroundStationsListByCapabilityOptionalParams,
  AvailableGroundStationsListByCapabilityResponse,
  AvailableGroundStationsGetOptionalParams,
  AvailableGroundStationsGetResponse,
  AvailableGroundStationsListByCapabilityNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AvailableGroundStations operations. */
export class AvailableGroundStationsImpl implements AvailableGroundStations {
  private readonly client: AzureOrbitalContext;

  /**
   * Initialize a new instance of the class AvailableGroundStations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureOrbitalContext) {
    this.client = client;
  }

  /**
   * Returns list of available ground stations
   * @param capability Ground Station Capability
   * @param options The options parameters.
   */
  public listByCapability(
    capability: Enum6,
    options?: AvailableGroundStationsListByCapabilityOptionalParams
  ): PagedAsyncIterableIterator<AvailableGroundStation> {
    const iter = this.listByCapabilityPagingAll(capability, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByCapabilityPagingPage(capability, options);
      }
    };
  }

  private async *listByCapabilityPagingPage(
    capability: Enum6,
    options?: AvailableGroundStationsListByCapabilityOptionalParams
  ): AsyncIterableIterator<AvailableGroundStation[]> {
    let result = await this._listByCapability(capability, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByCapabilityNext(
        capability,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByCapabilityPagingAll(
    capability: Enum6,
    options?: AvailableGroundStationsListByCapabilityOptionalParams
  ): AsyncIterableIterator<AvailableGroundStation> {
    for await (const page of this.listByCapabilityPagingPage(
      capability,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns list of available ground stations
   * @param capability Ground Station Capability
   * @param options The options parameters.
   */
  private _listByCapability(
    capability: Enum6,
    options?: AvailableGroundStationsListByCapabilityOptionalParams
  ): Promise<AvailableGroundStationsListByCapabilityResponse> {
    return this.client.sendOperationRequest(
      { capability, options },
      listByCapabilityOperationSpec
    );
  }

  /**
   * Gets the specified  available ground station
   * @param groundStationName Ground Station name
   * @param options The options parameters.
   */
  get(
    groundStationName: string,
    options?: AvailableGroundStationsGetOptionalParams
  ): Promise<AvailableGroundStationsGetResponse> {
    return this.client.sendOperationRequest(
      { groundStationName, options },
      getOperationSpec
    );
  }

  /**
   * ListByCapabilityNext
   * @param capability Ground Station Capability
   * @param nextLink The nextLink from the previous successful call to the ListByCapability method.
   * @param options The options parameters.
   */
  private _listByCapabilityNext(
    capability: Enum6,
    nextLink: string,
    options?: AvailableGroundStationsListByCapabilityNextOptionalParams
  ): Promise<AvailableGroundStationsListByCapabilityNextResponse> {
    return this.client.sendOperationRequest(
      { capability, nextLink, options },
      listByCapabilityNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByCapabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/availableGroundStations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableGroundStationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.capability],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/availableGroundStations/{groundStationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableGroundStation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groundStationName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByCapabilityNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableGroundStationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.capability],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};