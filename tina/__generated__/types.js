export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const ActualitesPartsFragmentDoc = gql`
    fragment ActualitesParts on Actualites {
  __typename
  title
  pubDate
  author
  image {
    __typename
    url
    alt
  }
  tag
  body
}
    `;
export const ActualitesDocument = gql`
    query actualites($relativePath: String!) {
  actualites(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ActualitesParts
  }
}
    ${ActualitesPartsFragmentDoc}`;
export const ActualitesConnectionDocument = gql`
    query actualitesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ActualitesFilter) {
  actualitesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ActualitesParts
      }
    }
  }
}
    ${ActualitesPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    actualites(variables, options) {
      return requester(ActualitesDocument, variables, options);
    },
    actualitesConnection(variables, options) {
      return requester(ActualitesConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
