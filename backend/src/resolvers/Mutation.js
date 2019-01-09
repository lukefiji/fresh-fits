const Mutations = {
  // createItem returns a promise
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    // This mutation is available in prisma.graphql
    const item = await ctx.db.mutation.createItem(
      {
        data: { ...args }
      },
      // Pass query parameters to backend
      info
    );

    console.log(item);

    return item;
  }
};

module.exports = Mutations;
