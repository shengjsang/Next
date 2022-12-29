let isDone: boolean = false;

let createByNewBoolean: Boolean = new Boolean(1);

let createByBoolean: boolean = Boolean(1);

console.log(createByNewBoolean)

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

let binaryLiteral: number = 0b1010;

let octalLiteral: number = 0o744;

let notANumber: number = NaN;

let infinityNumber: number = Infinity;

let myName: string = "Tom";

function alertName(): void {
    alert('My name is Tom');
}

let unuseable: void = undefined;

let u: undefined = undefined;
let n: null = null;


// 顾名思义,可以被任何值赋值
let anyThing: any = 'hello';
console.log(anyThing)
let anyThinga: any = 888;
let anyThingb: any = true;
let anyThingc: any = null;
let anyThingd: any = undefined;

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let any;
any =true;
