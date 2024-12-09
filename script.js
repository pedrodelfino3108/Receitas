document.getElementById("addRecipeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturar os dados do formulário
    const name = document.getElementById("recipeName").value.trim();
    const ingredients = document.getElementById("recipeIngredients").value.trim();
    const steps = document.getElementById("recipeSteps").value.trim();

    // Criar elemento de receita
    const recipeItem = document.createElement("li");
    recipeItem.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Ingredientes:</strong> ${ingredients}</p>
        <p><strong>Modo de Preparo:</strong> ${steps}</p>
    `;

    // Adicionar ao DOM
    document.getElementById("recipes").appendChild(recipeItem);

    // Limpar o formulário
    document.getElementById("addRecipeForm").reset();
});
