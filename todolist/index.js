import { Api } from './api/api.js';

//* ~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~*/
const View = (() => {
	const domstr = {
		todolist: "#todolist_container",
		deletebtn: ".deletebtn",
    inputbox: ".todolist__input"
	};

	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};
	const createTmp = (arr) => {
		let tmp = "";
		arr.forEach((todo) => {
			tmp += `
        <li>
          <span>${todo.id}-${todo.title}</span>
          <button class="deletebtn" id="${todo.id}">X</button>
        </li>
      `;
		});
		return tmp;
	};

	return {
		render,
		domstr,
		createTmp,
	};
})();
//* ~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~*/
const Model = ((api, view) => {
	const { getTodos, deleteTodo, addTodo } = api;

  class Todo {
    constructor(title) {
      this.userId = 4;
      this.title = title;
      this.completed = false;
    }
  }

	class State {
		#todolist = [];

		get todolist() {
			return this.#todolist;
		}
		set todolist(newlist) {
			this.#todolist = [...newlist];

			const ulcontainer = document.querySelector(view.domstr.todolist);
			const tmp = view.createTmp(this.#todolist);
			view.render(ulcontainer, tmp);
		}
	}

	return {
		getTodos,
		deleteTodo,
    addTodo,
		State,
    Todo
	};
})(Api, View);
//* ~~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~~*/
const Controller = ((model, view) => {
	const state = new model.State();

	const deleteTodo = () => {
		const ulcontainer = document.querySelector(view.domstr.todolist);
		ulcontainer.addEventListener("click", (event) => {
			if (event.target.className === "deletebtn") {
				state.todolist = state.todolist.filter(
					(ele) => +ele.id !== +event.target.id
				);
				model.deleteTodo(event.target.id);
			}
		});
	};

	const addTodo = () => {
    const inputbox = document.querySelector(view.domstr.inputbox);
    inputbox.addEventListener('keyup', event => {
      if (event.code === 'Enter' && event.target.value.trim() !== '') {
        const newtodo = new model.Todo(event.target.value.trim());
        model.addTodo(newtodo).then(todofrombe => {
          state.todolist = [todofrombe, ...state.todolist];
        });
        event.target.value = '';
      }
    });
  };

	const init = () => {
		model.getTodos().then((todos) => {
			state.todolist = todos.reverse();
		});
	};

	const bootstrap = () => {
		init();
		deleteTodo();
		addTodo();
	};

	return {
		bootstrap,
	};
})(Model, View);

Controller.bootstrap();
