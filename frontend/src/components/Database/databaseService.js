const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  email: String,
  file: String, // This could be a path to the file or the file data itself
  key: String,
  location: String
});

const File = mongoose.model('File', FileSchema);

exports.saveFile = async (email, file, key, location) => {
  const newFile = new File({ email, file, key, location });
  await newFile.save();
};

exports.getFile = async (email) => {
  const file = await File.findOne({ email });
  return file;
};

exports.getLocation = async (_id) => {
  const file = await File.findById(_id);
  return file ? file.location : null;
};