const useUtilFunctions = () => {
	const stripHtml = (data) => {
		if (data) {
			const regex = /(<([^>]+)>)/gi;
			const result = data.replace(regex, "");
			return result;
		}
	};

	const formatDate = (date) => {
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sept",
			"Oct",
			"Nov",
			"Dec",
		];
		if (date) {
			const splitted = date.split("-");
			const newDate = `${months[splitted[1] - 1]} ${splitted[2]}, ${
				splitted[0]
			}`;
			return newDate;
		}
	};

	return { stripHtml, formatDate };
};

export default useUtilFunctions;
