
import $ from 'jquery';


const register_url = "http://13.232.109.80:3000/register";
const userData = {
  username: "Nikhi More",
  email: "xyz123@gmail.com",
  password: "xyz@123",
  shortBio: "",
  gender: "male",
  mobile: "9356974175",
  dob: "07/12/1992",
  identity: "Salaried",
};
export async function register(userData){
   
    const response = await fetch('http://13.232.109.80:3000/register', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(userData), // body data type must match "Content-Type" header
      });
      console.log(response.json());



    // await $.ajax({
    //     type: "POST",
    //     async: true,
    //     url:register_url,
    //     cache: false,
    //     mode:'no-cors',
    //     headers:{
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     data:JSON.stringify(userData),
    //     success: function (data) {
          
    //       console.log("Ajax success");
    //       console.log(data);
    //     },
    //     failure: function () {
    //       console.log("Ajax Failure.");
    //     },
    //     error: function (xhr, ajaxOptions, thrownError) {
    //       alert(xhr.responseText);
    //       alert(thrownError);
    //     },
    //   });
}
