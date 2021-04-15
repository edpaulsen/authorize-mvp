/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      orders {
        items {
          id
          status
          price
          userId
        }
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      orders {
        items {
          id
          status
          price
          userId
        }
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      orders {
        items {
          id
          status
          price
          userId
        }
        nextToken
      }
    }
  }
`;
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts {
    onCreateProducts {
      id
      name
      price
      description
      images {
        bucket
        region
        key
        localUri
        mimeType
      }
      orders {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts {
    onUpdateProducts {
      id
      name
      price
      description
      images {
        bucket
        region
        key
        localUri
        mimeType
      }
      orders {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts {
    onDeleteProducts {
      id
      name
      price
      description
      images {
        bucket
        region
        key
        localUri
        mimeType
      }
      orders {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      status
      price
      userId
      products {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      status
      price
      userId
      products {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      status
      price
      userId
      products {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const onCreateOrderProducts = /* GraphQL */ `
  subscription OnCreateOrderProducts {
    onCreateOrderProducts {
      id
      productId
      orderId
      product {
        id
        name
        price
        description
        images {
          bucket
          region
          key
          localUri
          mimeType
        }
        orders {
          nextToken
        }
      }
      order {
        id
        status
        price
        userId
        products {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateOrderProducts = /* GraphQL */ `
  subscription OnUpdateOrderProducts {
    onUpdateOrderProducts {
      id
      productId
      orderId
      product {
        id
        name
        price
        description
        images {
          bucket
          region
          key
          localUri
          mimeType
        }
        orders {
          nextToken
        }
      }
      order {
        id
        status
        price
        userId
        products {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteOrderProducts = /* GraphQL */ `
  subscription OnDeleteOrderProducts {
    onDeleteOrderProducts {
      id
      productId
      orderId
      product {
        id
        name
        price
        description
        images {
          bucket
          region
          key
          localUri
          mimeType
        }
        orders {
          nextToken
        }
      }
      order {
        id
        status
        price
        userId
        products {
          nextToken
        }
      }
    }
  }
`;
