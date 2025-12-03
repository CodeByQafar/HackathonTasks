const baseUrl = "http://13.61.183.66:5000/api"



async function getCategories() {
    try {
        let reponse = await fetch(baseUrl + '/categories')
        let result = await reponse.json()
        console.log(result.data)
        createCardCategories(result.data)
    } catch (error) {
        console.log(error)
    }
}



getCategories()


function createCardCategories(data) {
    let cardSection = document.querySelector(".categories-cards")
    data.forEach(cardData => {
        cardSection.innerHTML += `   
          <div class="card" ;">
            <div class="card-body">
            <p class="card-text"><b>name:</b>${cardData.name}</p>
            <p class="card-text"><b>id:</b>${cardData.id}</p>
            </div>`

    });
}

async function createCategory(name) {

    try {
        const response = await fetch(baseUrl + '/Categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name })
        });

        const result = await response.json();

        if (result.isSuccess) {
            console.log('Category created:', result.data);
            return result.data;
        } else {
            console.error('Error:', result.errors);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
};




let createCtegoryform = document.getElementById('create-category-form')

createCtegoryform.addEventListener('submit', async (e) => {
    e.preventDefault();
    let categoryName = document.getElementById("InputName").value
    createCategory(categoryName)

})



deleteCategory

async function deleteCategory(id) {

    try {
        console.log(baseUrl + '/Categories' + id)
        const response = await fetch(baseUrl + '/Categories/' + id, {
            method: 'DElETE',

        });

        const result = await response.json();

        if (result.isSuccess) {
            console.log('Category deleted:', result.data);
            return result.data;
        } else {
            console.error('Error:', result.errors);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
};



let deleteteCagoryform = document.getElementById('delete-category-form')

deleteteCagoryform.addEventListener('submit', async (e) => {
    e.preventDefault();
    let categoryName = document.getElementById("InputId").value
    deleteCategory(categoryName)

})



async function createProduct(productData) {
    try {
        const response = await fetch(baseUrl + '/Products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData)
        });

        const result = await response.json();

        if (result.isSuccess) {
            console.log('Product created:', result.data);
            return result.data;
        } else {
            console.error('Error:', result.errors);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
};



let createProductForm = document.getElementById('product-form');

createProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let productName = document.getElementById("ProductName").value;
    let productDesc = document.getElementById("ProductDesc").value;
    let productPrice = parseFloat(document.getElementById("ProductPrice").value);
    let productCategoryId = document.getElementById("ProductCategoryId").value;

    let newProduct = {
        name: productName,
        description: productDesc,
        price: productPrice,
        categoryId: productCategoryId
    };
    console.log(newProduct)
    createProduct(newProduct);
});