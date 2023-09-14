
import $ from 'jquery';
export const baseUrl = 'https://www.devbuzzservers.com'

export async function register(userData) {
  await $.ajax({
    type: "POST",
    async: true,
    url: `${baseUrl}/register`,
    cache: false,
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(userData),
    success: function (data) {

      console.log("Ajax success");
      console.log(data);
    },
    failure: function () {
      console.log("Ajax Failure.");
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert(xhr.responseText);
      alert(thrownError);
    },
  });
}

// export async function login(data) {
//   await $.ajax({
//     type: "POST",
//     async: true,
//     url: `${baseUrl}/login`,
//     cache: false,
//     mode: 'no-cors',
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     data: JSON.stringify(data),
//     success: function (data) {
//       console.log("Ajax success");
//       console.log(data);
//       userDetails=data ;
//       return true;
//     },
//     failure: function () {
//       console.log("Ajax Failure.");
//     },
//     error: function (xhr, ajaxOptions, thrownError) {
//       alert(xhr.responseText);
//       alert(thrownError);
//     },
//   });
// }



// const abc= async (data)=>{
// const response = await fetch(`${baseUrl}/login`, {
//   method: "POST",
//   mode: 'no-cors',
//   cache: "no-cache",
//   credentials: "same-origin",
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//   },
//   body: JSON.stringify(data),
// });
// return response.json();
// }