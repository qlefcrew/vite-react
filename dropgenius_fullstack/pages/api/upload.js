
export const config = {
  api: {
    bodyParser: false,
  },
};

import formidable from 'formidable';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Upload error' });
        return;
      }

      const file = files.file;
      console.log('Uploaded file:', file.originalFilename);

      // Replace this with actual cloud upload logic
      // await fetch('XXXXXX', { method: 'POST', body: fs.createReadStream(file.filepath) });

      res.status(200).json({ success: true, message: 'File uploaded' });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
