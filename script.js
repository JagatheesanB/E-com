// products
let listedProducts = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "iphone 15",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  },
];
// adminID
let adminUsers = [
  { id: 1, email: "admin@gmail.com", password: "admin@123" },
  { id: 2, email: "jg@gmail.com", password: "123456" },
  { id: 3, email: "user@gmail.com", password: "7878789" },
];
console.log(adminUsers);
// day - 7/8/9/10 -jf
window.addEventListener("load", () => {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(listedProducts));
  }

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(adminUsers));
  }

  if (location.pathname === "/E-com/index.html") {
    loadHomePage();
  }

  if (location.pathname === "/E-com/Aindex.html") {
    adminHomePage();
  }

  if (location.pathname === "/E-com/cart.html") {
    loadCartProduct();
  }
   
  if(location.pathname ===  "/E-com/cart.html" ||
  location.pathname ===  "/E-com/index.html" ||
  location.pathname ===  "/E-com/order.html" 
   ){
    updateCartCount();
   }

  console.log(location.pathname);

  // if(location.href="/admin/add_product.html"){
  //   let params = new URL(document.location).searchParams;
  //   let productId = params.get(id);
  //   if (productId){
  //     const products = JSON.parse(localStorage.getItem("products"));
  //     const product = products.find(
  //       (product) => product.id === parseInt(productId)
  //     );
  //     populateProduct(products);
  //   }

  // }
});

// SIGN IN
const signIn = () => {
  const Remail = document.getElementById("email");
  const Rpassword = document.getElementById("password");
  const Rerror = document.getElementById("error");

  if (Remail.value.length === 0) {
    Rerror.innerText = "Email field is empty";
    return;
  }

  if (!validateEmail(Remail.value)) {
    Rerror.innerText = "Not a email valid address";
    return;
  }

  if (Rpassword.value.length === 0) {
    Rerror.innerText = "Password cannot be empty";
    return;
  }

  if (Rpassword.value.length <= 3) {
    Rerror.innerText = "Minimum 8 Characters";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
  const loggedInUser = users.find(
    (user) => user.email === Remail.value && user.password === Rpassword.value
    // console.log(users);
  );

  if (!loggedInUser) {
    Rerror.innerText = "Invalid Details";
    return;
  } else {
    sessionStorage.setItem("userId", loggedInUser.id);
    if (Remail.value === "admin@gmail.com")
      location.replace("/E-com/Aindex.html");
    else location.replace("/E-com/index.html");
  }
};

const validateEmail = (email) => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

//logout
const userLogOut = () => {
  location.replace("/E-com/login.html");
};

// random number
const getRandomNumber = (max = 1000) => {
  return Math.floor(Math.random() * max);
};

// creating user id
const getRandomId = (type = "users") => {
  let jsonArray = JSON.parse(localStorage.getItem(type));
  for (let i = 0; i < 10000; i++) {
    const randomId = getRandomNumber();

    const checkingId = jsonArray.find((obj) => obj.id === randomId);
    if (!checkingId) {
      return randomId;
    }
  }
};

//SIGN UP
const signUp = () => {
  const nameref = document.getElementById("Rname");
  const emailref = document.getElementById("Remail");
  const passwordref = document.getElementById("Rpassword");
  const Confirmpasswordref = document.getElementById("Confirm password");
  const errorref = document.getElementById("error");

  if (emailref.value.length === 0) {
    errorref.innerText = "Email field is empty";
    return;
  }

  if (!validateEmail(emailref.value)) {
    errorref.innerText = "Not a email valid address";
    return;
  }

  if (passwordref.value.length === 0) {
    errorref.innerText = "Password cannot be empty";
    return;
  }

  if (Confirmpasswordref.value.length === 0) {
    errorref.innerText = " Confirm Password cannot be empty";
    return;
  }

  if (passwordref.value.length <= 3) {
    errorref.innerText = "Minimum 8 Characters";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users"));
  users.push({
    id: getRandomId(),
    email: emailref.value,
    password: passwordref.value,
  });

  // let adminUsers = JSON.parse(localStorage.getItem("adminUsers"));
  // adminUsers.push({
  //   id: getRandomId(),
  //   email: emailref.value,
  //   password: passwordref.value,
  // });

  localStorage.setItem("users", JSON.stringify(users));
  location.href = "/E-com/login.html";
};

const loadHomePage = () => {
  const Rproducts = document.getElementById("productsRow");
  const products = JSON.parse(localStorage.getItem("products"));
  console.log(products);

  let body = " ";
  for (let product of products) {
    body += `<div class="col-3 mt-4">
    <div
      class="border rounded p-2 bg-primary-subtle border-primary-subtle w-100 d-flex flex-column"
    >
       <img src="${product.thumbnail}" alt="image" style="min-width:200px;height:200px" />
      <p class="fs-5 my-1 mt-2 text-center">${product.title}</p>
      <p class="fs-4 my-1 mb-2 text-center">₹ ${product.price}</p>
      <button class="btn btn-success" onClick="addToCartHandler(${product.id})">Add to Cart</button>
    </div>
  </div>`;
  }

  Rproducts.innerHTML = body;
};

const addToCartHandler = (productId) => {
  console.log(productId);
};

// load admin page

const adminHomePage = () => {
  const Rproducts = document.getElementById("productsTable");
  const products = JSON.parse(localStorage.getItem("products"));
  console.log(products);

  let body = "";
  for (let product of products) {
    body += `<tr>
    <td><img src="${
      product.thumbnail
    }" alt="image" class="img-fluid img-thumbnail" style="width:100px;height:"50px;"/></td>
    <td>${product.title}</td>
    <td>${product.description.substring(0, 50)}...</td>
    <td> ₹ ${product.price}</td>
    <td class="d-flex justify-content-center">
      <button class="btn btn-dark me-2" onClick="editProduct(${
        product.id
      })">Edit</button>
      <button class="btn btn-danger" onClick="deleteProduct(${
        product.id
      })">Delete</button>
    </td>
  </tr>`;
  }

  Rproducts.innerHTML = body;
};

// delete product

const deleteProduct = (id) => {
  const products = JSON.parse(localStorage.getItem("products"));
  const fProducts = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(fProducts));
  adminHomePage();
};

// edit product

const editProduct = (id) => {
  location.href = `/E-com/add_product.html?id=${id}`;
};

const UpdateHandler = () => {
  const Rname = document.getElementById("name");
  const Rid = document.getElementById("id");
  const Rprice = document.getElementById("price");
  const Rdescription = document.getElementById("description");
  const Rimage = document.getElementById("image");
  // const toastRef = document.getElementById("toast");
  // const toastMessRef = document.getElementById("toastMess");

  let products = JSON.parse(localStorage.getItem("products"));

  let id = Rid.value;
  if (id) {
    const product = products.find((product) => product.id === parseInt(id));

    products = products.filter((product) => product.id !== parseInt(id));
    products.push({
      ...product,
      title: Rname.value,
      description: Rdescription.value,
      price: Rprice.value,
      thumbnail: Rimage.value,
    });

    // toastMessRef.innerText = "Product added updatedfully!!!";
  } else {
    products.push({
      id: getRandomId("products"),
      title: Rname.value,
      description: Rdescription.value,
      price: Rprice.value,
      thumbnail: Rimage.value,
    });

    // toastMessRef.innerText = "Product added successfully!!!";
  }
  // toastRef.classList.add("fade", "show");

  // setTimeout(() => {
  //   toastRef.classList.remove("fade", "show");
  // }, 2000);

  localStorage.setItem("products", JSON.stringify(products));
  location.href = "/Aindex.html";
};
// populateProduct
const populateProduct = (product) => {
  const Rname = document.getElementById("name");
  const Rprice = document.getElementById("price");
  const Rdescription = document.getElementById("description");
  const Rimage = document.getElementById("image");
  const Rid = document.getElementById("id");
  const Rtitle = document.getElementById("title");
  const Rbtn = document.getElementById("btn");

  Rid.value = product.id;
  Rname.value = product.title;
  Rprice.value = product.price;
  Rdescription.value = product.description;
  Rimage.value = product.thumbnail;
  Rtitle.innerText = "Edit Product";
  Rbtn.innerText = "Update Product";
};

// add to cart

const addToCart = (id) => {
  let products = JSON.parse(localStorage.getItem("products"));
  // console.log(products)
  const product = products.find((product) => product.id === parseInt(id));
  // console.log(product)

  if (!sessionStorage.getItem("userId")) {
    location.href = "/E-com/login.html";
  } else {
    let userId = parseInt(sessionStorage.getItem("userId"));
    // console.log(userId)
    let cart = [];
    if (!localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.setItem("cart"));
      // console.log(cart)
    }
    // console.log(cart)
    const cartProduct = cart.find(
      (c) => c.userId === parseInt(userId) && c.id === parseInt(id)
    ); 
    // console.log(cartProduct)
    if (cartProduct) {
      cart = cart.map((c) => {
        if (c.id === parseInt(id) && c.userId === parseInt(userId)) {
          // console.log(cart)
          return { ...c, count: c.count + 1 };

    
        } else {
          return c;
        }
      });
    } else {
      cart.push({ userId: parseInt(userId), count: 1, ...product });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }
};

// updating cart
const updateCartCount = () => {
  const cartCountRef = document.getElementById("cartCount");
  // console.log(cartCountRef)
  if (sessionStorage.getItem("userId")) {
    const userId = parseInt(sessionStorage.getItem("userId"));
    // console.log(userId)
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      // console.log(cart)
      const userCart = cart.filter((c) => c.userId === userId);
      // console.log(userCart)

      if (userCart.length > 0) {
        const cartCount = userCart.reduce((acc, curr) => {
          acc += curr.count;
          // console.log(cartCount)
          return acc;
        }, 0);
        cartCountRef.innerText = `Cart - ${cartCount}`;
      } else cartCountRef.innerText = `Cart`;
    }
  } else location.href = "/E-com/login.html";
};

// loadCartPage
const loadCartProduct = () => {
  const cartTableRef = document.getElementById("cartTable");
  const totalRef = document.getElementById("total");
  const emptyCartRef = document.getElementById("emptyCart");
  const tableRef = document.getElementById("table");

  if (localStorage.getItem("cart")) {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (sessionStorage.getItem("userId")) {
      const userId = parseInt(sessionStorage.getItem("userId"));
      const userCart = cart.filter((c) => c.userId === userId);

      if (userCart.length > 0) {
        tableRef.classList.remove("visually-hidden");
        emptyCartRef.classList.add("visually-hidden");
      } else {
        emptyCartRef.classList.remove("visually-hidden");
        tableRef.classList.add("visually-hidden");
      }

      let body = "";
      let total = 0;
      for (let cartItem of userCart) {
        total = total + parseInt(cartItem.count) * parseInt(cartItem.price);
        const count = cartItem.count * cartItem.price;
        body += `<tr>
                  <td>${cartItem.title}</td>
                  <td>${cartItem.count}</td>
                  <td>${cartItem.price}</td>
                  <td>₹ ${count}</td>
                </tr>`;
      }
      cartTableRef.innerHTML = body;
      totalRef.innerText = `Total - ₹ ${total}`;
    } else {
      location.href = "/E-com/login.html";
    }
  }
};
