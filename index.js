const customers = document.getElementById("customers");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const btn = document.getElementById("btn");
const id = document.getElementById("id");


// Fetch Get

// fetch('https://northwind.vercel.app/api/customers')
// .then(res => res.json())
// .then(data => {
//     data.forEach(item => {
//         const p = document.createElement('p')
//         p.textContent = `${'Contact Name:' + item.contactName} --- ${'Company Name:' + item.companyName} --- ${'id:' + item.id}`
//         customers.appendChild(p)
//         console.log(item);
//     })
// })

// Fetch Post

// btn.addEventListener('click', function () {
//     fetch('https://northwind.vercel.app/api/customers', {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: i1.value,
//             description: i2.value
//            }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("data gonderildi" + data);
//           });
// })


// Fetch Delete

// function FetchDel() {
//         let tr = `https://northwind.vercel.app/api/customers/${id.value}`;

//         fetch(tr, {
//           method: "DELETE",
//         }).then((res) => console.log(res));
//       }

// btn.addEventListener('click', FetchDel)




// Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios-----------------Axios




// AXIOS GET MEthod

// axios.get("https://northwind.vercel.app/api/customers/")
// .then((data) => {
//       console.log(data.data);
//     });



// AXIOS POST method


    // function fetchPost () {
    //         axios.post("https://northwind.vercel.app/api/customers/", {
    //             name: i1.value,
    //             description: i2.value
    //         }).then(res => {
    //                 console.log(res);
    //             })
    //             }
                
                
    //             btn.addEventListener('click', fetchPost)


// AXIOS Delete method


//     function axiosDelete () {
//     axios.delete(`https://northwind.vercel.app/api/customers/${id.value}`)
// }
// btn.addEventListener('click', axiosDelete)
