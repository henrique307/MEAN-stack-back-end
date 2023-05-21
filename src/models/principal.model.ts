import mongoose from "mongoose";

const principalSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String }
});

const principalModel = mongoose.model("principal", principalSchema);

export { principalSchema, principalModel };