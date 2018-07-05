export const array = {
	groupValueByKey
}

function groupValueByKey(array, key){
	let result = []
	if(array.length > 0)
		array.map(function(item, index){
			if(item[key])
				result.push(item[key])
		})

	return result
}
