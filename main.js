quick_draw_data_set = ["airpane", "aarm clock", "ambulance", "angel", "apple", "basketball", "bed", "honey bee", "cycle", "book", "binoculars", "bow", "tree", "bus", "butterfly", "cactus", "phone", "camera", "camel", "car", "violin", "guitar", "clock", "screw", "crab", "crown", "diamond", "dolphin", "ear", "envelope", "elephant", "eye", "fish", "flower", "UFO", "golf", "burger", "hat", "headphones", "helicopter", "horse", "ice cream", "key", "laptop", "leaf", "light bulb", "lion", "lightning", "lipstick", "monkey", "moon", "mountain", "mustache", "mushroom", "panda", "pencil", "pizza", "rabit", "rainbow", "star", "wheel", "teeth", "sheep", "snake", "pineapple", "spider", "watch"];
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);

Element_of_array = quick_draw_data_set[random_number];
document.getElementById("sketch_to_drawn").innerHTML = "Sketch to be drawn: "+ Element_of_array;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;