import { defineConfig } from "sanity";
import { schemaTypes } from "./schemas";

const config = defineConfig({
  title: "tomiwa_code_api",
  projectId: "tpr1dl0v",
  dataset: "production",
  basePath: "/tomiwacodesadmin",
  apiVersion: "2023-10-31",
  schema: {
    types: schemaTypes,
  },
});

export default config;
