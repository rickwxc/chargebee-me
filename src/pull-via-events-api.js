async function *eventsPull(chargeBeeObj, query = {limit : 1, "sort_by[asc]" : "occurred_at", "occurred_at[after]" : 0}){
	do{
		let data = await chargeBeeObj.event.list(query).request();
		if(!data.next_offset){
			return data;
		}
		query = {
			...query,
			offset: data.next_offset
		}

		yield data
	}while(true)
}
module.exports = eventsPull
