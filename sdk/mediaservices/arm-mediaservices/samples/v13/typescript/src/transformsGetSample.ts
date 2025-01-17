/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a Transform.
 *
 * @summary Gets a Transform.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/transforms-get-by-name.json
 */
async function getATransformByName() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "contosoresources";
  const accountName = "contosomedia";
  const transformName = "sampleTransform";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.transforms.get(
    resourceGroupName,
    accountName,
    transformName
  );
  console.log(result);
}

getATransformByName().catch(console.error);
