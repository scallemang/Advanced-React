const Mutations = {
	async createItem( parent, args, ctx, info ) {
		// TO DO: Check if they are logged in

		const item = await ctx.db.mutation.createItem({
			data: {
				...args
			}
		}, info);

		return item;
	}
};

module.exports = Mutations;
