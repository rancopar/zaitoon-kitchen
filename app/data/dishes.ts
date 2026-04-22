export type Dish = {
  name: string;
  desc: string;
  price: string;
  tag: string | null;
  category: string;
  image: string;
};

export const allDishes: Dish[] = [
  // ── Starters ──
  { name: "Mezze Board", desc: "Hummus, mutabal, muhammara, pickles and fresh bread", price: "₹550", tag: "Vegetarian", category: "Starters", image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=600&q=80" },
  { name: "Kozhikodan Kibbeh", desc: "Spiced lamb croquettes, Malabar-style, tahini dip", price: "₹620", tag: null, category: "Starters", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80" },
  { name: "Fattoush Salad", desc: "Crisp greens, pomegranate, sumac dressing, toasted bread", price: "₹420", tag: "Vegetarian", category: "Starters", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" },
  { name: "Prawn Crudo", desc: "Raw tiger prawns, coconut milk, lime, green chilli", price: "₹680", tag: "Chef's Pick", category: "Starters", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80" },
  { name: "Lentil Soup", desc: "Slow-cooked red lentils, cumin, lemon, crispy onion", price: "₹320", tag: "Vegetarian", category: "Starters", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80" },
  { name: "Stuffed Vine Leaves", desc: "Rice, herbs, pine nuts, served with yoghurt", price: "₹480", tag: "Vegetarian", category: "Starters", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&q=80" },
  { name: "Chicken Liver Pâté", desc: "Spiced with Malabar pepper, served with flatbread", price: "₹520", tag: null, category: "Starters", image: "https://images.unsplash.com/photo-1607116667981-ff148a6a0c3f?w=600&q=80" },
  { name: "Burrata & Tomato", desc: "Fresh burrata, heirloom tomatoes, za'atar, olive oil", price: "₹580", tag: null, category: "Starters", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80" },

  // ── Seafood ──
  { name: "Malabar Bouillabaisse", desc: "Slow-cooked fish stew, kokum, fennel, saffron aioli", price: "₹780", tag: "Chef's Pick", category: "Seafood", image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&q=80" },
  { name: "Prawn Chermoula", desc: "Tiger prawns, North African herb marinade, grilled flatbread", price: "₹920", tag: "Popular", category: "Seafood", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80" },
  { name: "Grilled Hamour", desc: "Whole grilled fish, chermoula, preserved lemon, herbs", price: "₹1,200", tag: null, category: "Seafood", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" },
  { name: "Squid Ink Rice", desc: "Arroz negro, grilled squid, aioli, Malabar spice oil", price: "₹850", tag: null, category: "Seafood", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80" },
  { name: "Crab Mashawi", desc: "Grilled Malabar crab, garlic butter, charred lemon", price: "₹1,350", tag: "Chef's Pick", category: "Seafood", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { name: "Fish Chermoula", desc: "Seared kingfish, North African spice crust, tahini", price: "₹880", tag: null, category: "Seafood", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" },
  { name: "Lobster Bisque", desc: "Rich lobster broth, cream, brandy, Malabar pepper", price: "₹950", tag: null, category: "Seafood", image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80" },
  { name: "Mussel Tagine", desc: "Mussels in saffron broth, tomato, fennel, crusty bread", price: "₹720", tag: "Popular", category: "Seafood", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },

  // ── Meat ──
  { name: "Lamb Ouzi", desc: "Slow-roasted lamb shoulder, fragrant rice, caramelised onion", price: "₹1,100", tag: null, category: "Meat", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
  { name: "Tharavu Musakhan", desc: "Duck confit, sumac-spiced onion, taboon bread", price: "₹950", tag: null, category: "Meat", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80" },
  { name: "Beef Kofta", desc: "Chargrilled beef and lamb mince, harissa, mint yoghurt", price: "₹880", tag: "Popular", category: "Meat", image: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?w=600&q=80" },
  { name: "Chicken Musakhkhan", desc: "Roasted chicken, sumac, onion, taboon, pine nuts", price: "₹820", tag: null, category: "Meat", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=600&q=80" },
  { name: "Lamb Mansaf", desc: "Lamb in fermented yoghurt sauce, saffron rice, almonds", price: "₹1,200", tag: "Chef's Pick", category: "Meat", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80" },
  { name: "Grilled Quail", desc: "Spatchcock quail, ras el hanout, pomegranate molasses", price: "₹980", tag: null, category: "Meat", image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80" },
  { name: "Shawarma Platter", desc: "Slow-roasted lamb, garlic sauce, pickles, flatbread", price: "₹850", tag: "Popular", category: "Meat", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80" },
  { name: "Rack of Lamb", desc: "French-trimmed rack, pistachio crust, pomegranate jus", price: "₹1,450", tag: "Chef's Pick", category: "Meat", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80" },

  // ── Vegetarian ──
  { name: "Moussaka", desc: "Layered aubergine, spiced lentil, béchamel, tomato", price: "₹680", tag: "Vegetarian", category: "Vegetarian", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80" },
  { name: "Shakshuka", desc: "Eggs poached in spiced tomato, peppers, feta, fresh herbs", price: "₹520", tag: "Vegetarian", category: "Vegetarian", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&q=80" },
  { name: "Cauliflower Steak", desc: "Whole roasted cauliflower, chermoula, raisins, almonds", price: "₹620", tag: "Vegetarian", category: "Vegetarian", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80" },
  { name: "Mujadara", desc: "Lentils and rice, crispy onions, cumin yoghurt", price: "₹480", tag: "Vegetarian", category: "Vegetarian", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80" },
  { name: "Halloumi Grill", desc: "Grilled halloumi, watermelon, mint, pomegranate", price: "₹580", tag: "Vegetarian", category: "Vegetarian", image: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&q=80" },
  { name: "Beetroot Hummus", desc: "Roasted beetroot hummus, za'atar, olive oil, flatbread", price: "₹420", tag: "Vegetarian", category: "Vegetarian", image: "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?w=600&q=80" },
  { name: "Spinach Fatayer", desc: "Baked pastry parcels, spinach, feta, sumac", price: "₹460", tag: "Vegetarian", category: "Vegetarian", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80" },
  { name: "Stuffed Peppers", desc: "Bell peppers, spiced rice, herbs, tomato sauce", price: "₹540", tag: "Vegetarian", category: "Vegetarian", image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&q=80" },

  // ── Rice & Bread ──
  { name: "Malabar Biryani", desc: "Fragrant rice, caramelised onion, whole spices, raita", price: "₹720", tag: "Popular", category: "Rice & Bread", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80" },
  { name: "Taboon Bread", desc: "Stone-baked flatbread, za'atar oil, sea salt", price: "₹220", tag: null, category: "Rice & Bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80" },
  { name: "Saffron Rice", desc: "Basmati rice, saffron, golden raisins, toasted nuts", price: "₹320", tag: null, category: "Rice & Bread", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&q=80" },
  { name: "Khubz", desc: "Traditional Arabic flatbread, warm from the oven", price: "₹180", tag: null, category: "Rice & Bread", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80" },

  // ── Desserts ──
  { name: "Umm Ali", desc: "Egyptian bread pudding, cream, pistachios, rose water", price: "₹420", tag: "Popular", category: "Desserts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80" },
  { name: "Baklava", desc: "Layers of filo, pistachios, honey syrup, orange blossom", price: "₹380", tag: null, category: "Desserts", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80" },
  { name: "Malabi", desc: "Rose water milk pudding, pomegranate, crushed pistachios", price: "₹360", tag: "Chef's Pick", category: "Desserts", image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=600&q=80" },
  { name: "Knafeh", desc: "Shredded pastry, sweet cheese, orange blossom syrup", price: "₹440", tag: "Popular", category: "Desserts", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80" },
  { name: "Halva Ice Cream", desc: "House-made halva ice cream, sesame brittle, date syrup", price: "₹390", tag: null, category: "Desserts", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80" },
  { name: "Sfouf", desc: "Turmeric semolina cake, pine nuts, aniseed, tahini cream", price: "₹350", tag: null, category: "Desserts", image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80" },

  // ── Drinks ──
  { name: "Jallab", desc: "Rose water, grape juice, pine nuts, crushed ice", price: "₹280", tag: null, category: "Drinks", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80" },
  { name: "Tamarind Cooler", desc: "House tamarind, ginger, mint, sparkling water", price: "₹260", tag: "Popular", category: "Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80" },
  { name: "Saffron Lemonade", desc: "Fresh lemon, saffron syrup, rose water, ice", price: "₹300", tag: null, category: "Drinks", image: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=600&q=80" },
  { name: "Mint Tea", desc: "Moroccan-style fresh mint tea, served in traditional glass", price: "₹220", tag: null, category: "Drinks", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
  { name: "Oud Coffee", desc: "Arabic coffee, cardamom, saffron, served with dates", price: "₹240", tag: "Chef's Pick", category: "Drinks", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80" },
  { name: "Ayran", desc: "Chilled yoghurt drink, salt, dried mint", price: "₹200", tag: null, category: "Drinks", image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80" },
];

// First 6 for home page
export const featuredDishes = allDishes.slice(0, 6);
