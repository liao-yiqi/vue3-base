// export {};
// import "./style.css";
// import { StudentType } from "./index";
// import { add, point } from "./add";
// /* const formatTime = (date?: string | Date | number): string => {
//   // 处理没有参数
//   if (!date) date = new Date();
//   //处理参数为数组时间戳或者年月日字符串
//   if (typeof date === "string" || typeof date === "number") date = new Date(+date);
//   console.log(date);
//   //将时间转成时分秒
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   return `${hours}:${minutes}:${seconds}`;
// };
// console.log(formatTime());
// console.log(formatTime(1678905342313));
// const myDate = new Date("2023-12-12");
// console.log(formatTime(myDate)); */

// const formatTime = (date?: string | number | Date): string => {
//   if (!date) date = new Date();
//   if (typeof date === "string" || typeof date === "number") date = new Date(+date);
//   const hour = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   return `${hour}:${minutes}:${seconds}`;
// };
// console.log(formatTime());
// // 定义一个记录数据类型
// type record = {
//   count: number;
//   time: string;
// };
// // 获取旧数据的函数
// const getHistory = (): record[] => {
//   return JSON.parse(localStorage.getItem("history") || "[]");
// };
// // 定义插入新数据数据的函数(先取出旧数据, 在此基础上拼接)
// const updateHistory = () => {
//   const list = getHistory();
//   const newData = {
//     count: list.length + 1,
//     time: formatTime(),
//   };
//   console.log(list.length);

//   list.push(newData);
//   localStorage.setItem("history", JSON.stringify(list));
// };
// // 用来将本地储存里面的数据渲染在页面上
// const render = () => {
//   const list = getHistory();
//   //拼接字符串
//   let html = "";
//   list.forEach((item) => {
//     html += `<h3>次数${item.count},时间${item.time}</h3>`;
//   });
//   const dom = document.querySelector("#app") as Element;
//   dom.innerHTML = html;
// };
// updateHistory();
// render();
// const student: StudentType = {
//   name: "张三",
//   age: 18,
//   gender: "男",
// };
// console.log(student);
// add(3, 10);

// point({ x: 100, y: 200 });
