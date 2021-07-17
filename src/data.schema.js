export const schema = {
  title: 'todo App Data',
  description: `state of the app is 
    as follows: todos contain each todo item 
    and filters has the filter values`,
  type: 'object',
  required: [],

  properties: {
    todos: {
      type: 'array',
      description: 'Array of the todo items',

      required: [],

      items: {
        type: 'object',
        description: 'single todo item',

        properties: {
          id: {
            type: 'number',
            description: 'Unique Id of the todo item',
          },

          text: {
            type: 'string',
            description: 'explanation of the todo item',
          },

          isCompleted: {
            type: 'boolean',
            description: 'completement status of the todo item',
          },

          color: {
            type: 'string',
            description: 'An optional color category',
          },
        },
      },
    },

    filters: {
      type: 'object',
      description: 'different filters for todo items',

      properties: {
        status: {
          type: 'string',
          description: 'one of three values: All, Active, or Completed',
        },
        colors: {
          type: 'array',
          description: 'array of different possible color badges for the items',

          items: {
            type: 'object',
            description: 'name of the color',
          },
        },
      },
    },
  },
}
