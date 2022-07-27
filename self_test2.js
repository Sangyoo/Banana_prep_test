// 예시 문제 2
// Object 관련 메소드 사용 금지

function inverse (collection) {
  if(collection.a !== undefined) {
    collection[collection.a] = "a"
    delete collection.a;
    collection[collection.b] = "b"
    delete collection.b;
    collection[collection.c] = "c"
    delete collection.c;
     }
  else{
    collection[collection.name] = "name"
    console.log(collection);
    delete collection.name;
    collection[collection.age] = "age"
    console.log(collection);
    delete collection.age;
    collection[collection.city] = "city"
    delete collection.city;
  }
 
  return collection;
}

// 아래에 주어진 케이스에 대응할 수 있도록 `inverse` 함수를 작성해주세요.
// 주어진 두 가지 케이스 외에는 대응하지 않아도 됩니다.
const data1 = { a: 1, b: 2, c: 5 };
const data2 = { name: "ken", age: 30, city: "seoul" };

const result1 = inverse(data1);
const result2 = inverse(data2);

console.log(result1); // { '1': 'a', '2': 'b', '5': 'c' }
console.log(result2); // { 'ken': 'name', '30': 'age', 'seoul': 'city' }