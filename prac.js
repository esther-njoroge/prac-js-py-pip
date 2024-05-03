const userPreference = {};
function addUser(userId, preferredCategories){
    userPreference[userId] = preferredCategories;
}
function getRecommendations(userId){
    const preferredCategories = userPreference[userId];
    if (!preferredCategories) return [];
    const recommendations = []
    preferredCategories.forEach (category =>{
        recommendations.push(`Item: ${category}`);
        recommendations.push(`Item: ${category}`);
    });
    return recommendations;
}

addUser("user1", ["milk, sugar, juice, flour"]);
addUser("user2", ["washing powder, lotion, soap, tooothpaste"])
console.log(`Recommendations for user1: ${getRecommendations("user1")}`);
console.log(`Recommendations for user2: ${getRecommendations("user2")}`);
