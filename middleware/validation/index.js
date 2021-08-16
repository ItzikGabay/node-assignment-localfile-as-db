// Schema


const itemsSchemaGet = {
  query: {
    type: "object",
    additionalProperties: true,
    properties: {
      priceIsGreater: {
        type: ["number", "string"],
        minimum: 0,
        maximum: 1,
        required: false,
      },
    },
  },
};


const ItemBody = {
  body: {
    type: "object",
    additionalProperties: true,
    properties: {
      item: {
        type: "object",
        additionalProperties: true,
        properties: {
          id: {
            type: "string",
            required: false,
          },
          price: {
            type: "number",
            minimum: 0,
            maximum: 100,
            required: true,
          },
          text: {
            type: "string",
            required: true,
            minLength: 3,
            maxLength: 20,
          },
          size: {
            type: "object",
            required: false,
          },
        },
      },
    },
  },
};

const itemSchemaParams = {
  params: {
    type: "object",
    required: true,
  },
};

const itemsSchemaPost = {
  body: {
    type: "number",
    additionalProperties: true,
    properties: {
      item: {
        type: "object",
        additionalProperties: true,
        properties: {
          price: {
            type: "number",
            minimum: 0,
            maximum: 100,
            required: false,
          },
        },
      },
    },
  },
};

module.exports = {
  itemsSchemaGet,
  itemsSchemaPost,
  itemSchemaParams,
  ItemBody,
};