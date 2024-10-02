async function getprodect() {
    
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();

    const recipes = data.recipes;
    const count = recipes.length;
    console.log(`Found ${count} recipes:`);

    document.querySelector('.count').textContent = count;



    const result = recipes.map(function(recipes) {
        return `
            <div class"recipes">
             <h3>${recipes.title}</h3>
               
                    <img src="${recipes.image_url}" alt="${recipes.title}" />
                
            </div>
        `;
    }).join('');
    
    document.querySelector(".recipes .row").innerHTML = result;


}

getprodect();