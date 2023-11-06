// this makes the project more complicated, but I'll just leave it as it is..
// Function to calculate the Levenshtein distance between two strings
 export const calculateLevenshteinDistance = (a, b) => {
    const distanceMatrix = Array.from({ length: a.length + 1 }, (_, i) =>
      Array.from({ length: b.length + 1 }, (_, j) =>
        i === 0 ? j : j === 0 ? i : 0
      )
    );
  
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        distanceMatrix[i][j] = Math.min(
          distanceMatrix[i - 1][j] + 1, // Deletion
          distanceMatrix[i][j - 1] + 1, // Insertion
          distanceMatrix[i - 1][j - 1] + cost // Substitution
        );
      }
    }
  
    return distanceMatrix[a.length][b.length];
  }
  
// Function to find products with a Levenshtein distance less than or equal to a threshold
 export const findMatchingProducts = (searchTerm, products, threshold) => {
    searchTerm = searchTerm.toLowerCase();
    const matchingProducts = [];
  
    for (const product of products) {
      const productTitle = product.title.toLowerCase();
      const distance = calculateLevenshteinDistance(searchTerm, productTitle);


  
      if (productTitle.includes(searchTerm) || distance <= threshold) {
        matchingProducts.push(product);
      }

      console.log(productTitle)
      console.log(searchTerm)
    }
    

    return matchingProducts;
  }