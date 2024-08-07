import gql from "graphql-tag";

const ADD_TO_CART = gql`
  mutation ($input: AddToCartInput!) {
    addToCart(input: $input) {
      cart {
        appliedCoupons {
          code
        }
        contents {
          nodes {
            key
            product {
              node {
                id
                databaseId
                name
                type
                featuredImage {
                  node {
                    id
                    sourceUrl
                  }
                }
              }
            }
            variation {
              node {
                id
                databaseId
                name
                description
                type
                onSale
                price
                regularPrice
                salePrice
                featuredImage {
                  node {
                    id
                    sourceUrl
                  }
                }
                attributes {
                  nodes {
                    id
                    name
                    value
                  }
                }
              }
            }
            quantity
            total
            subtotal
            subtotalTax
          }
        }
        subtotal
        subtotalTax
        shippingTax
        shippingTotal
        total
        totalTax
        feeTax
        feeTotal
        discountTax
        discountTotal
      }
    }
  }
`;

export default ADD_TO_CART;
