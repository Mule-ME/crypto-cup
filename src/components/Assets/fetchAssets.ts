export const fetchAssets = async () => {
  try {
    const res = await fetch(`${process.env.API_ROUTE}/api/assets`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch assets');
    }
    return res.json();
  } catch (error) {
    console.log('Error loading assets: ', error);
  }
};
