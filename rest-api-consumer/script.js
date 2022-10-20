
const url = 'http://localhost:8082/emp/get-all-emps';

// const getAllEmps = () => {
//     console.log('getAllEmps');
//     fetch(url)
//         .then((data) => data.json())
//         .then((json) => {
//             console.log(json);
//             document.getElementById('empList').innerHTML = json;
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// };


const getAllEmps = () => {
    console.log('getAllEmps');
    fetch(url)
        .then((data) => data.json())
        .then((json) => {
            console.log(json);
            let table = document.createElement('empTable');
            for (let i = 0; i < json.length; i++) {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');

                let eid = document.createTextNode(json[i].employeeId);
                let fName = document.createTextNode(json[i].firstName);
                let sal = document.createTextNode(json[i].salary);

                td1.appendChild(eid);
                td2.appendChild(fName);
                td3.appendChild(sal);

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                table.appendChild(tr);
            }
            document.body.appendChild(table);
            document.getElementById('empData').innerHTML = empTable;
        })
        .catch((error) => {
            console.log(error.message);
        });

};


const getEmpById = (eid) => {};

const getEmpByFirstName = (fName) => {};

const addEmp = (emp) => {};

const updateEmp = (emp) => {};

const deleteEmp = (eid) => {};
