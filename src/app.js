const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_URL = 'http://localhost:3000/v1'; 
const TOKEN = ''; 


const regions = JSON.parse(fs.readFileSync(path.join('src', 'data', 'index.json'), 'utf-8'));

const headers = {
    'accept': '*/*',
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
};


async function createRegion(region) {
    try {
        const response = await axios.post(`${API_URL}/region`, region, { headers });
        console.log(`Region created: ${region.name.ru}`);

        return response.data.result.id; 
    } catch (error) {
        console.error(`Error creating region ${region.name.ru}:`, error);
        return null;
    }
}


async function createCity(regionId, city) {
    try {
        const response = await axios.post(`${API_URL}/city`, {
            regionId,
            name: city.name,
        }, { headers });
        console.log(`City created: ${city.name.ru}`);
    } catch (error) {
        console.error(`Error creating city ${city.name.ru}:`, error);
    }
}


async function seedData() {
    for (const region of regions) {
        const regionId = await createRegion(region);
        if (regionId) {
            for (const city of region.cities) {
                await createCity(regionId, city);
            }
        }
    }
    console.log('successfully finished');
}


seedData();
