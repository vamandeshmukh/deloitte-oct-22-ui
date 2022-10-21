
const restApi = `http://localhost:8082/emp`;

const getAllEmps = () => {
    console.log(`getAllEmps`);
    fetch(`${restApi}/get-all-emps`)
        .then(data => data.json())
        .then((json) => {
            console.log(json);
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empList").innerHTML = response;
        })
        .catch(() => {
            document.getElementById("empList").innerHTML = 'Something is wrong!';
        });
}

