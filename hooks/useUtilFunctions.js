const useUtilFunctions = () => {
	const stripHtml = (data) => {
		if (data) {
			const regex = /(<([^>]+)>)/gi;
			const result = data.replace(regex, "");
			return result;
		}
	};

	const calculateAge = (birthdate) => {
		const currentDate = new Date();
		const birthDate = new Date(birthdate);
		let age = currentDate.getFullYear() - birthDate.getFullYear();
		const month = currentDate.getMonth() - birthDate.getMonth();
		if (
			month < 0 ||
			(month === 0 && currentDate.getDate() < birthDate.getDate())
		) {
			age--;
		}
		return age;
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

	return { stripHtml, formatDate, calculateAge };
};

export default useUtilFunctions;
