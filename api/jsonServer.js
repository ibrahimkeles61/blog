import axios from "axios";

export default axios.create({
	baseURL: "http://10.0.2.2:3000/",
});

// export default axios.create({
// 	baseURL: "http://localhost:3000/",
// });
