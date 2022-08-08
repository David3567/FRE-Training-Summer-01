// let a: number = 3;

// const arr: [string, number, boolean] = ["str", 3, false];

// type arrtype = typeof arr;
// const arr1: arrtype = [...arr, true];

// const arr1: Array<string> = [];

// let b: any = "12";
// let c: unknown = 12;
// c = true;

// //* never vs void
// function foo(): never {
//   // while (true) {}
//   throw new Error;
// }
// console.log(foo());

// interface Todo {
// 	id: number;
// 	title: string;
// }
// class Todo {
// 	id: number;
// 	title: string;
// }
// type fnType = (todo: Todo) => Todo;

// //* as
// function foo<Todo extends { id: number; title: string }>(todo: Todo): Todo {
// 	return {
// 		id: 12,
// 		title: "hello",
// 	} as Todo;
// }

// const getTodo: fntype = function (todo) {
//   return {
//     id: 45,
//     title: 'hello'
//   }
// }

//* generic type
// function getNumber(x: number, y: number): number[] {
// 	return [x, y];
// }
// function getString(x: string, y: string): string[] {
// 	return [x, y];
// }
// function getData<T, R>(x: T, y: T, z: R): [T, T, R] {
// 	return [x, y, z];
// }
// console.log(getData<number, string>(5, 5, '6'));

// interface Queue<T> {
//     enqueue(item: T): void;
//     dequeue() : T;
//     getqueue(): T[];
// }
// class MyQueue<T> implements Queue<T> {
//     queue: T[];

//     enqueue(item: T): void {}
//     dequeue(): T {
//         throw new Error("Method not implemented.");
//     }
//     getqueue(): T[] {
//         throw new Error("Method not implemented.");
//     }
// }

// type enqueue =  <T>(item: T) => void;

// //* SOLID

// interface Radio {
//     openRadio(): void;
// }
// interface Battery extends Radio {
//     batteryStatus: () => void;
// }
// interface Keys {
//     shift: string;
//     enter: string;
// }

// class Mobile implements Battery, Keys {
//     openRadio(): void {
//       throw new Error("Method not implemented.");
//     }
//     shift: string;
//     enter: string;
//     batteryStatus: () => void;
// }

// interface AA {
//   bb: [{
//     id: number,
//     title: string
//   }]
// }
// interface CC {

// }

// class Person {}

// class Emplyee extends Person {}
// class AAA extends Person {}
// class BBB extends AAA {}

// const p: Person = new BBB();

//* enum
// enum UserRole {
// 	Super = "Super",
// 	Newsletter = 'News',
// 	Magazine,
// 	Book,
// }
// console.log(PrintMedia.Book);

// enum Status {
//   Success = 200,
//   Info = 100,
//   ClientError = 404
// }
// Status[404]

// function getMedia(mediaName: string): PrintMedia {
//     if (mediaName === "Forbes" || mediaName === "Outlook") {
//         return PrintMedia.Book;
//     }
// }
// const output: PrintMedia = getMedia('Forbes');

// type str = string;

// const thisStr: str = 'world';

// //* union
// // let userRole: 'Super' | 'Admin' | number | string[] | Promise<string> = 'Admin';

// const helloworld: () => Promise<number> = async () => {
// 	const res = await Promise.resolve(3);
// 	return res;
// };
// console.log(helloworld());

function component(obj: { name: string; age: number }) {
	return function (target: Function, name: any, descriptor: {value: Function}) {
    let fn = descriptor.value = function(...args: any) {
      const result = fn.apply(this, args);
      return result;
    }
    return descriptor;
	};
}

@component({
  name: 'Dio', 
  age: 200,
})
function foo() {
  console.log(this.name);
}

// @component({
// 	name: "Jojo",
// 	age: 20,
// })
// class AAAA {
// 	id: number;
// 	obj: { name: string; age: number };
// 	constructor() {}
// 	printId() {
// 		console.log(this.obj);
// 	}
// }

// const aaaa = new AAAA();
// aaaa.printId();
