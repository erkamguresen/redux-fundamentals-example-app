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
        },
      },
    },

    filters: {
      type: 'object',
      description: 'different filters for todo items',
    },
  },
}
