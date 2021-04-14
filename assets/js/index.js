/*1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4)*/
function sum(countElem) {
  if(countElem<0){
    throw new RangeError();
  }
  result = 0;
  for (let i = 1; i <= countElem; i++) {
    result += i;
  }
  return result;
}
/*
.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, который содержит свойства, о факультете и кафедре.
2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
2.4 Реализовать функцию выводит на экран всю информацию о студенте
*/
class Faculty {
  constructor(facultyName, department) {
    this.facultyName = facultyName;
    this.department = department;
  }
  set facultyName(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError();
    }
    this._facultyName = newValue;
  }
  set department(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError();
    }
    this._department = newValue;
  }
  get facultyName() {
    return this._facultyName;
  }
  get department() {
    return this._department;
  }
  toString(){
    return `\nFaculty:${this._facultyName}\nDepartment:${this._department}`
  }
}

class Student {
  constructor(name, surname, isMale, contacts, studentFaculty) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contacts = contacts;
    this.studentFaculty = studentFaculty;
  }
  set name(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError();
    }
    this._name = newValue;
  }
  set surname(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError();
    }
    this._surname = newValue;
  }
  set isMale(newValue) {
    if (typeof newValue !== 'boolean') {
      throw new TypeError();
    }
    this._isMale = newValue;
  }
  set contacts(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError();
    }
    this._contacts = newValue;
  }
  set studentFaculty(newValue) {
    if (!newValue instanceof Faculty) {
      throw new TypeError("");
    }
    this._studentFaculty = newValue;
  }
  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  get isMale() {
    return this._isMale;
  }
  get contacts() {
    return this._contacts;
  }
  get studentFaculty() {
    return this._studentFaculty;
  }

  set facultyName(newValue) {
    this._studentFaculty._facultyName = newValue;
  }
  set department(newValue) {
    this._studentFaculty._department = newValue;
  }
  get facultyName() {
    return this._studentFaculty._facultyName;
  }
  get department() {
    return this._studentFaculty._department;
  }
}
const faculty = new Faculty("test", "test");
const student = new Student("Denis", "Kostyukov", true, "0984130968", faculty);

function getObj(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
/*3.1 Создать числовой массив и проинициализировать его из 25 элементов.
3.1*Инициализация с помощью случайных чисел
3.2 Вывести элементы с четными индексами
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы нулевых элементов (элемент равен нулю)
3.5 Подсчитать количество нулевых элементов */
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function arrayFunc(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array[i] = getRandom(0, 10);
  }
  return array;
}
const arr = arrayFunc(25);

function isEvenIndex(array) {
  let newArray = array.filter((elem, index) => {
    if (index % 2 === 0) {
      return elem;
    }
  })
  return newArray;
}

function isEvenElement(array) {
  let newArray = array.filter((elem) => {
    if (elem % 2 === 0) {
      return elem;
    }
  })
  return newArray;
}

function zeroElement(array) {
  const newArray = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      newArray.push(i);
      count++
    }
  }
  return {
    zeroElemIndex: newArray,
    countZeroElement: count,
  };
}
/*4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
4.1 Для каждого поля создать get и set с проверкой типов.*/
class Book {
  constructor(author, bookName, year, publishingHouse) {
    this.author = author;
    this.bookName = bookName;
    this.year = year;
    this.publishingHouse = publishingHouse;
  }
  set author(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError();
    }
    this._author = newValue;
  }
  set bookName(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError();
    }
    this._bookName = newValue;
  }
  set year(newValue) {
    if (typeof newValue !== 'number') {
      throw new TypeError();
    }
    this._year = newValue;
  }
  set publishingHouse(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError();
    }
    this._publishingHouse = newValue;
  }
  get author() {
    return this._author;
  }
  get bookName() {
    return this.bookName;
  }
  get year() {
    return this._year;
  }
  get publishingHouse() {
    return this._publishingHouse;
  }
}
class Electronic extends Book {
  constructor(author, bookName, year, publishingHouse, format, id) {
    super(author, bookName, year, publishingHouse)
    this.format = format;
    this.id = id;
  }
  set format(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError();
    }
    this._format = newValue;
  }
  set id(newValue) {
    if (typeof newValue !== 'number') {
      throw new TypeError();
    }
    this._id = newValue;
  }
  get format() {
    return this._format;
  }
  get id() {
    return this._id;
  }
}
const el = new Electronic("Достоевский", "Преступление и наказание", 1866, "some house", "pdf", 123);

/*5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;*/
function replacement(value) {
  const arr = [];
  for (let i = 1; i <= value; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arr[i] = "fizzbuzz";
    } else if (arr[i] % 3 === 0) {
      arr[i] = "fizz";
    } else if (arr[i] % 5 === 0) {
      arr[i] = "buzz";
    }
  }
}