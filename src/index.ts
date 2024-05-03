import axios from 'axios';

// Define your API key here (normally you would keep this secure and not hard-code it)
const API_KEY = 'your_crossmint_api_key';

// Set up the axios instance with Crossmint API configuration
const crossmintAPI = axios.create({
    baseURL: 'https://www.crossmint.com/api',
    headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
    }
});

// Define the data for the new NFT collection
const collectionData = {
    chain: 'ethereum', // Choose the blockchain you want to deploy to
    metadata: {
        name: 'Sample NFT Collection',
        imageUrl: 'https://www.crossmint.com/assets/crossmint/logo.png',
        description: 'This is a sample NFT collection',
        symbol: 'XMINT' // Symbol is only for EVM chains
    },
    fungibility: 'non-fungible', // Set to 'semi-fungible' if needed
    supplyLimit: 1000, // Set the maximum number of tokens
    payments: {
        price: '0.01', // Set the price per token in the native currency
        recipientAddress: '0xYourWalletAddress' // Set the recipient wallet address
    },
    reuploadLinkedFiles: true // If true, linked files in metadata will be reuploaded to IPFS
};

// Function to create a new NFT collection
async function createCollection() {
    try {
        const response = await crossmintAPI.post('/2022-06-09/collections/', collectionData);
        console.log('Collection created successfully:', response.data);
    } catch (error) {
        console.error('Failed to create collection:', error.response?.data || error.message);
    }
}

// Call the function to create the collection
createCollection();
