var nomor = 1; //conts isinya tetap, var dan let variabel dinamis
const hasil = document.querySelector('#bodyTable');
const button = document.querySelector('#button');
let namaUser = document.querySelector('#nama');
let tempat = document.querySelector('#tempat');
var tgl = document.querySelector('#ttl');
let jenisKelamin = document.querySelectorAll('input[name="jeniskelamin"]')
let alamat = document.querySelector('#alamat');
let hobby = document.querySelectorAll('.hobby');
let agama = document.querySelector('#agama');
var updatedIndex = -1;
let limit = 4;
let currentPage = 1;
const page = document.querySelector('#page');
let people = [{
        no: nomor++,
        nama: "lulu",
        tempat: "Monaco",
        tgl: "1990-01-01",
        age: getAge("1990-01-01"),
        jenisKelamin: "Wanita",
        hobby: "Bersepeda, Berenang",
        agama: "Islam",
        alamat: "Depok"
    },
    {
        no: nomor++,
        nama: "lala",
        tempat: "Tokya",
        tgl: "2000-01-01",
        age: getAge("2000-01-01"),
        jenisKelamin: "Wanita",
        hobby: "Berenang",
        agama: "Islam",
        alamat: "Cina"
    },
    {
        no: nomor++,
        nama: "lili",
        tempat: "Medan",
        tgl: "2010-01-01",
        age: getAge("2010-01-01"),
        jenisKelamin: "Wanita",
        hobby: "Futsal, Jogging",
        agama: "Katolik",
        alamat: "Belanda"
    },
    {
        no: nomor++,
        nama: "pooh",
        tempat: "Aceh",
        tgl: "1996-01-01",
        age: getAge("1996-01-01"),
        jenisKelamin: "Pria",
        hobby: "Jogging",
        agama: "Katolik",
        alamat: "Paris"
    },
    {
        no: nomor++,
        nama: "Lele",
        tempat: "Bandung",
        tgl: "1995-01-01",
        age: getAge("1995-01-01"),
        jenisKelamin: "Pria",
        hobby: "Jogging",
        agama: "Hindu",
        alamat: "Roma"
    }
];

function getAge(tgl) {
    var date = tgl
    var today = new Date();
    var ttl = new Date(date);
    var year = 0;
    if (today.getMonth() < ttl.getMonth()) {
        year = 1;
    } else if ((today.getMonth() == ttl.getMonth()) && today.getDate() < ttl.getDate()) {
        year = 1;
    }
    var age = today.getFullYear() - ttl.getFullYear() - year;

    if (age < 0) {
        age = 0;
    }
    return age;
}

function ubahJk() {
    let jk;
    jenisKelamin.forEach(element => {
        if (element.checked == true) {
            jk = element.value;

        }

    });
    return jk;
}

function inputPerson() {
    console.log("INPUT")
    let jk = ubahJk()
    console.log(jk);
    let hobbyList = []
    hobby.forEach(element => {
        if (element.checked == true) {
            hobbyList.push(element.value);
        }
    });
    let person = {
        no: nomor++,
        nama: namaUser.value,
        tempat: tempat.value,
        tgl: tgl.value,
        age: getAge(tgl.value),
        jenisKelamin: jk,
        hobby: hobbyList.join(", "),
        agama: agama.value,
        alamat: alamat.value
    };

    people.push(person);
    showData();
    nama.value = "";
    tempat.value = "";
    ttl.value = "";
    jenisKelamin.forEach(element => {
        element.checked = false;
    });
    hobby.forEach(element => {
        element.checked = false;
    });
    agama.value = "";
    alamat.value = "";
}

function showData() {
    let endPage = currentPage * limit;
    let offSet = endPage - limit; //startnya darimana
    hasil.innerHTML = ''
    for (let index = offSet; index < endPage; index++) {
        if (index < people.length) {
            hasil.innerHTML += `
            <tr>
             <td class="tdCenter"><b>${index+1}</b></td>
             <td style="tdCenter">${people[index].nama}</td>
             <td style="tdCenter">${people[index].age} Tahun</td>
             <td style="tdCenter">${people[index].jenisKelamin}</td>
             <td style="tdCenter">${people[index].hobby}</td>
             <td style="tdCenter">${people[index].agama}</td>
             <td style="tdCenter">${people[index].alamat}</td>
             <td class="tdAction">
                <button class="button" type="button" onclick="deleteClicked(${people[index].no}">Delete</button>
                <button class="button" type="button" onclick="updateClicked(${people[index].no})">Update</button>
             </td>
            </tr>
             `
        }
    }
    // people.forEach((person, index) => {
    //     // console.log(person);
    // })
    pagination()
}

showData();


function validateData() {
    console.log(jenisKelamin);

    if (nama.value.length > 0 && alamat.value.length > 0) {
        if (button.innerHTML == "Submit") {
            console.log("Sumbit");
            inputPerson();
        } else {
            console.log("Update");
            updatePerson();
        }

    } else {
        alert("Silahkan isi data");
    }


}

function deleteClicked(no) {
    if (confirm(`Apakah Anda yakin ingin menghapus data ${people[no].nama}`)) {
        people.splice(no, 1);
    }
    showData();
}


function updateClicked(no) {
    const index = people.findIndex(function (ini) {
        return ini.no === no;
    })
    updatedIndex = index;
    button.innerHTML = "Update";
    // nomor.value = people[index]+1;
    nama.value = people[index].nama;
    tempat.value = people[index].tempat;
    tgl.value = people[index].tgl;
    jenisKelamin.forEach(element => {
        if (element.value == people[index].jenisKelamin) { // == cuma untuk if
            element.checked = true;
        }
    });
    let hobbies = people[index].hobby.split(", ");
    hobbies.forEach(element => {
        hobby.forEach(element2 => {
            if (element2.value == element) {
                element2.checked = true;
            }
        })
    });
    agama.value = people[index].agama;
    alamat.value = people[index].alamat;
}

function updatePerson() {
    let jk = ubahJk()
    let hobbyList = []
    hobby.forEach(element => {
        if (element.checked == true) {
            hobbyList.push(element.value);
        }
    });
    let person = {
        no: nomor++,
        nama: namaUser.value,
        tempat: tempat.value,
        tgl: tgl.value,
        age: getAge(),
        jenisKelamin: jk,
        hobby: hobbyList.join(", "),
        agama: agama.value,
        alamat: alamat.value

    };
    console.log(person);
    people.splice(updatedIndex, 1, person); //urutannya : data yg dihapus, banyak data, data baru
    button.innerHTML = "Submit";
    updatedIndex = -1;
    nama.value = "";
    tempat.value = "";
    ttl.value = "";
    jenisKelamin.forEach(element => {
        element.checked = false;
    });
    hobby.forEach(element => {
        element.checked = false;
    });
    agama.value = "";
    alamat.value = "";
    showData();
    alert("Data berhasil diupdate!");
}



function searchName() {
    var input, filter, table, th, td, i, txtValue;

    input = document.querySelector('#myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById("bodyTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function pagination() {
    let totalPage = Math.ceil(people.length / limit);
    // console.log(page);
    page.innerHTML = ''
    for (let index = 1; index <= totalPage; index++) {
        if (index == currentPage) {
            page.innerHTML += `
        <a href="javascript:void(0)">${index}</a> 
        `
        } else if (index > currentPage) {
            page.innerHTML += `
            <a href="javascript:void(0)" onclick="clickedPage(${index})">${index}</a> 
            `
        } else if (index < currentPage) {
            page.innerHTML += `
        <a href="javascript:void(0)" onclick="clickedPage(${index})">${index}</a> 
        `
        }

        // const element = array[index];
        // javascript:void(0) agar membatalkan link

    }
    // console.log(page.innerHTML);
}

function clickedPage(index) {
    currentPage = index;
    showData()


}