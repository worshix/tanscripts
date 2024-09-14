export default async function handler(req, res) {
  // Ensure this is a POST request from Prismic Webhook
  if (req.method === 'POST') {
    try {
      console.log(req.body);
      // Revalidate specific pages or paths
      await res.revalidate('/'); // Revalidate the homepage
      await res.revalidate('/engineering');
      // You can add more revalidation paths for different pages if needed
      return res.json({ revalidated: true });
    } catch (err) {
      return res.status(500).send('Error revalidating');
    }
  } else {
    console.log("Not a post method");
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
