// async function returns promise
async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        // console.log(data); // returns json
        return data;
    } catch (err) {
        console.log(err);
    }
}

(async function () {
    const result = await getData();
    console.log(result);
})();

let users = getData().then((data) => console.log(data));

// const users = [];

const loadData = async () => {
    try {
        const url1 = "https://jsonplaceholder.typicode.com/todos/1";
        const url2 = "https://jsonplaceholder.typicode.com/todos/1";
        const url3 = "https://jsonplaceholder.typicode.com/todos/1";

        // const res1 = await fetch(url1);
        // const data1 = await res1.json();

        // const res2 = await fetch(url2);
        // const data2 = await res2.json();

        // const res3 = await fetch(url3);
        // const data3 = await res3.json();

        const results = await Promise.all([
            fetch(url1),
            fetch(url2),
            fetch(url3),
        ]);
        const data = results.map((result) => result.json());

        console.log(results, await Promise.all(data));
        // console.log(data1, data2, data3);
        // return [data1, data2, data3];
    } catch (err) {
        console.log(err);
    }
};

(async () => {
    const result = await loadData();
    console.log(result);
})();

// console.log(data);

// data = loadData();
// console.log(data);
// setTimeout(() => console.log(data), 1000);
