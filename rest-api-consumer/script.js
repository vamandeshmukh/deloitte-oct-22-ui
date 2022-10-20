
const url = 'http://localhost:8082/emp/get-all-emps';

const getAllEmps = () => {
    console.log('getAllEmps');
    fetch(url)
        .then((data) => data.json())
        .then((json) => {
            console.log(json);
            document.getElementById('empList').innerHTML = json;
        })
        .catch((error) => {
            console.log(error.message);
        });

};