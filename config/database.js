module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: `mongodb+srv://strapi-ma:12131211@cluster0.545wc.mongodb.net/strapi?retryWrites=true&w=majority`,
      },
      options: {
        ssl: true,
      },
    },
  },
});