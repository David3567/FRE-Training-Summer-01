//* ~~~~~~~~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~~~~~~~~*/
export const Api = (() => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const todospath = "todos";

	const getTodos = () =>
		fetch([baseUrl, todospath].join("/")).then((response) => response.json());

	const deleteTodo = (id) =>
		fetch([baseUrl, todospath, id].join("/"), {
			method: "DELETE",
		});

	const addTodo = (newtodo) =>
		fetch([baseUrl, todospath].join("/"), {
			method: "POST",
			body: JSON.stringify(newtodo),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json());

	return {
		getTodos,
		deleteTodo,
    addTodo
	};
})();