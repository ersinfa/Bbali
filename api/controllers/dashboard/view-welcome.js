module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
     viewTemplatePath: 'pages/dashboard/welcome',
      description: 'adf'
    },

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
