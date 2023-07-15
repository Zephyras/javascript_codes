// var greeting = 'hello';
// console.log(greeting);

// var greeting = 'hi';
// console.log(greeting);

// greeting = "how are you?"
// console.log(greeting);

// let greeting = 'hello';
// console.log(greeting);

// let greeting = 'hi';
// console.log(greeting);

// greeting = 'hi';
// console.console(greeting);

//중복선언x 재할당x
// const greeting = 'hello';
// console.log(greeting);

// greeting= 'hi';
// console.log(greeting);

//유효한 참조 범위
//var => 함수 레벨 스코프
//함수레벨 스코프는 함수안에서 로직이 다 적용되는 상황
// function func() {
//   if(true){
//     var a = 'a';
//     console.log(a);
//   }
//   console.log(a);
  
// }
// func();

//let, const => block 레벨 스코프
// function func(){
//   if(true){
//     let a = 'a';
//     //const a = 'a';
//     console.log(a);  
//   }
//   console.log(a);  //블록범위가 아니라서 에러발생!!
// }
// func();

//호이스틴(Hoisting)
//호이스트의 뜻
func();
function func(){
  console.log('hoisting test')
}