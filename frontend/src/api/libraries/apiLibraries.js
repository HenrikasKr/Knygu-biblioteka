//  All erros need to put in front
// Libraries
import axiosClient from "../apiUsers";
import swal from "sweetalert";

// GET method allUsers
export async function getAllUsersData() {
  const res = await axiosClient.get("/");
  return res;
}
// GET user by ID
export async function getUserById(id) {
  const res = await axiosClient.get(`/${id}`);
  return res;
}

// find user By email
export async function getUsersByEmail(email) {
  console.log(email);
  const res = await axiosClient.post(`/userByEmail`, JSON.stringify(email));
  return res;
}

// update user by id
export async function updateUserById(data) {
  const res = await axiosClient
    .post(`/updateUser`, JSON.stringify(data))
    .then((result) => {
      swal({
        text: "Įrašas išsaugotas!",
        button: "Gerai",
        icon: "success",
        timer: 1500,
      });
    })
    .catch((error) => {
      swal({
        text: "Klaida!",
        icon: "error",
        button: "Gerai",
        timer: 1500,
      });
    });

  return res;
}

// UPDATE user data income
export async function findIncomeDataAndUpdate(data, id, subID) {
  const res = await axiosClient
    .patch(`/${id}/income/${subID}`, JSON.stringify(data))
    .then((result) => {
      swal({
        text: "Įrašas išsaugotas!",
        button: "Gerai",
        icon: "success",
        timer: 1500,
      });
    })
    .catch((error) => {
      swal({
        text: "Klaida!",
        icon: "error",
        button: "Gerai",
        timer: 1500,
      });
    });

  return res;
}

// delete USer by Id
export async function deleteUserById(id) {
  const res = await axiosClient
    .delete(`/deleteUser/${id}`)
    .then((result) => {});
  return res;
}

// Register
export async function createUser(data) {
  const res = await axiosClient
    .post("/register", JSON.stringify(data))
    .then((result) => {
      swal({
        text: "Registracija sėkmingai, dabar galite prisijungti",
        icon: "success",
        button: "Puiku",
        timer: 2000,
      });
    })
    .catch((error) => {
      swal({
        text: "Toks vartotojas jau egzistuoja",
        icon: "error",
        button: "Gerai",
        timer: 5000,
      });
    });
}

// Login
export async function loginUser(data) {
  let response;
  const res = await axiosClient
    .post("/login", JSON.stringify(data))
    .then((result) => {
      response = result;
      swal({
        text: "Pavyko prisijungti!",
        icon: "success",
        button: "Puiku",
        timer: 5000,
      });
    })
    .catch((error) => {
      swal({
        text: "Neteisingai suvestas vartotojo vardas arba slaptažodis",
        icon: "error",
        button: "Gerai",
        timer: 1500,
      });
    });

  return response;
}

// find email
export async function getUserEmail(email) {
  const res = await axiosClient.post(`/email?email=${email}`);
  return res.data.data.users;
}


// Create log
export async function addLog(data) {
  const res = await axiosClient.post(`/add/log`, JSON.stringify(data));
  return res;
}

// Get logs
export async function getLogs() {
  const res = await axiosClient.get("/logs");
  return res;
}

// Get books
export async function getBooks() {
  const res = await axiosClient.get("/book");
  return res;
}

// Add book
export async function addBook(data) {
  const res = await axiosClient.post(`/add/book`, JSON.stringify(data));
  return res;
}

// Delete book
export async function deleteBook(id) {
  const res = await axiosClient.delete(`/book/delete/${id}`)
  return res;
}


