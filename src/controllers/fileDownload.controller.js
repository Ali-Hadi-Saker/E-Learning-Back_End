import { Class } from "../models/class.model.js";
import path from 'path';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const downloadFile = async (req, res) => {
    try {
        const { classId, filename } = req.params;

        // Fetch the class document from the database
        const classDoc = await Class.findById(classId);
        if (!classDoc) {
            return res.status(404).json({ message: "Class not found" });
        }

        // Check if the file exists in the class's files
        const fileInfo = classDoc.files.find(file => file.filename === filename);
        if (!fileInfo) {
            return res.status(404).json({ message: "File not found" });
        }

        // Resolve the full file path
        const fileUrl = new URL(fileInfo.fileUrl);
        const filePath = path.join(__dirname, '..', '..', fileUrl.pathname);
        
        // Debugging output
        console.log(`Resolved file path: ${filePath}`);

        // Check if the file exists on the server
        if (fs.existsSync(filePath)) {
            return res.download(filePath, filename, (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error downloading file' });
                }
            });
        } else {
            return res.status(404).json({ message: "File not found on server" });
        }
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};
