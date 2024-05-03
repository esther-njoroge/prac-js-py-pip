# Step 1: which data structure for user preferences
user_preferences = {}

def add_user(user_id, preferred_categories):
    user_preferences[user_id] = preferred_categories
    
def get_recommendations(user_id):
    preferred_categories = user_preferences.get(user_id, [ ])
    print('preferred item',preferred_categories)
    if not preferred_categories:
        return []
    
    recommendations = []
    for category in preferred_categories:
        recommendations.append(f"Top item in {category}")
    return recommendations
# Exa
add_user("user01", ["appliances", "clothes"])
add_user("user02", ["groceries"])
print(f"Recommendations for user01: {get_recommendations('user01')}")
print(f"Recommendations for user02: {get_recommendations('user02')}")