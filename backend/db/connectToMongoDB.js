import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://saloniigavde2002:jRB81no8T19C92cI@cluster0.48cvb.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0');

		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;