
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    console.log(`Email captured: ${email}`);
    // await fetch('XXXXXX', { method: 'POST', body: JSON.stringify({ email }) });

    res.status(200).json({ success: true, message: 'Subscribed successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
