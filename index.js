const personSchema = new mongoose.Schema({ name: { type: String, required: true
}, // name is required age: Number, // age is optional favoriteFoods: [String],
// an array of strings }); // Model for the schema const Person =
mongoose.model('Person', personSchema);
