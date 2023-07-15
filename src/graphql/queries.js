/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      books {
        items {
          id
          book_id
          order_id
          createdAt
          updatedAt
          bookOrdersId
          orderBooksId
          bookOrderBookId
          bookOrderOrderId
          customer
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookOrdersByBook_id = /* GraphQL */ `
  query BookOrdersByBook_id(
    $book_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookOrdersByBook_id(
      book_id: $book_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        book_id
        order_id
        book {
          id
          title
          description
          image
          author
          featured
          price
          createdAt
          updatedAt
          __typename
        }
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
          customer
          __typename
        }
        createdAt
        updatedAt
        bookOrdersId
        orderBooksId
        bookOrderBookId
        bookOrderOrderId
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookOrdersByOrder_id = /* GraphQL */ `
  query BookOrdersByOrder_id(
    $order_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookOrdersByOrder_id(
      order_id: $order_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        book_id
        order_id
        book {
          id
          title
          description
          image
          author
          featured
          price
          createdAt
          updatedAt
          __typename
        }
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
          customer
          __typename
        }
        createdAt
        updatedAt
        bookOrdersId
        orderBooksId
        bookOrderBookId
        bookOrderOrderId
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByUser = /* GraphQL */ `
  query OrdersByUser(
    $user: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUser(
      user: $user
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user
        date
        total
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          book_id
          order_id
          createdAt
          updatedAt
          bookOrdersId
          orderBooksId
          bookOrderBookId
          bookOrderOrderId
          customer
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
