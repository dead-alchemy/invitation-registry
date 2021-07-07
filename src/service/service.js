import axios from "axios";
const url = getUrl();

function getUrl() {
	if (window.location.origin.toString() === "http://localhost:3000") {
		return "http://localhost:4000/api";
	} else {
		// @Todo
	}
}

class api {
	get_guests() {
		return new Promise((resolve, reject) => {
			axios
				.get(`${url}/get_guests`, {
					headers: {"Access-Control-Allow-Origin": "*"},
				})
				.then((res) => {
					resolve(res.data);
				});
		});
	}
}

export default new api();
