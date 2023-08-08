import dataProvider from "./dataProvider";
export default dataProvider;

export * as qqlQueryBuilder from "gql-query-builder";
export {
    batchRequests,
    gql,
    GraphQLClient,
    rawRequest,
    request,
    resolveRequestDocument,
} from "graphql-request";
export type {
    BatchRequestDocument,
    BatchRequestsExtendedOptions,
    BatchRequestsOptions,
    ClientError,
    GraphQLWebSocketClient,
    RawRequestExtendedOptions,
    RawRequestOptions,
    RequestDocument,
    RequestExtendedOptions,
    RequestOptions,
    Variables,
} from "graphql-request";
export * as graphqlWS from "graphql-ws";
export * from "./dataProvider";
