import { assign, setup } from "xstate";

export const checkoutMachine = setup({
  types: {
    context: {} as {deliveryAddress:unknown},
    events: {} as
      | { type: "address" }
      | { type: "complete" }
      | { type: "skip_payment" }
      | { type: "skip_shipping" }
      | { type: "select_payment" }
      | { type: "select_shipping", value:string },
  },
  schemas: {
    events: {
      address: {
        type: "object",
        properties: {},
      },
      complete: {
        type: "object",
        properties: {},
      },
      skip_payment: {
        type: "object",
        properties: {},
      },
      skip_shipping: {
        type: "object",
        properties: {},
      },
      select_payment: {
        type: "object",
        properties: {},
      },
      select_shipping: {
        type: "object",
        properties: {},
      },
    },
  },
}).createMachine({
  context: {
    deliveryAddress:{street: '', city: '', country: ''}
  },
  id: "checkout",
  initial: "cart",
  states: {
    cart: {
      on: {
        'address': 'addressed'
      },
    },
    addressed: {
      on: {
        // 'select_shipping': {
        //   actions: assign({
        //     deliveryAddress: ({ event }) => event.value
        //   })},
        'select_shipping': 'shipping_selected',
        'skip_shipping': 'shipping_skipped',
      },
    },
    shipping_selected: {
      on: {
        'select_payment': 'payment_selected',
        'skip_payment': 'payment_skipped',
        'address': 'addressed'
      },
    },
    shipping_skipped: {
      on: {
        'address': 'addressed',
        'select_payment': 'payment_selected', 
        'skip_payment': 'payment_skipped'
    },
  },
    payment_selected: {
      on: {
        'address': 'addressed',
        'select_payment': 'shipping_selected'
      },
    },
    payment_skipped: {
      on: {
        complete: {
          target: "completed",
        },
        address: {
          target: "addressed",
        },
        select_shipping: {
          target: "shipping_selected",
        },
        skip_payment: {
          target: "shipping_skipped",
        },
      },
    },
    completed: {},
  },
});

