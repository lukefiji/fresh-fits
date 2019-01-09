const { forwardTo } = require('prisma-binding');

const Query = {
  // If there is no auth requried, you can forward from Prisma
  items: forwardTo('db')
  // async items(parent, args, ctx, info) {
  //   // This query is available in prisma.graphql
  //   // It's fine to return a promise in a resolver
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
