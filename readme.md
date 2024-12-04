# Region and City Seeder

This repository contains a script for seeding regions and cities to an API. The script reads region and city data from a JSON file and sends POST requests to the specified API to create regions and their respective cities.

## Requirements

- Node.js >= 14
- npm (or yarn)
- Axios library for making HTTP requests

## Setup

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/region-city-seeder.git
    cd region-city-seeder
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

    Or, if you're using yarn:

    ```bash
    yarn install
    ```

3. Prepare your JSON data file (`data.json`).

   The JSON file should follow this structure:

    ```json
    [
        {
            "name": {
                "ru": "Region Name in Russian",
                "uz": "Region Name in Uzbek",
                "cy": "Region Name in Cyrillic"
            },
            "cities": [
                {
                    "name": {
                        "ru": "City Name in Russian",
                        "uz": "City Name in Uzbek",
                        "cy": "City Name in Cyrillic"
                    }
                },
                ...
            ]
        },
        ...
    ]
    ```

4. Add your API token to the script.

    Open the `index.ts` file and replace the `TOKEN` constant with your actual API token:

    ```typescript
    const TOKEN = 'your-token-here'; // Replace with your real API token
    ```

5. Run the script:

    ```bash
    npm run seed
    ```

    Or, if you're using yarn:

    ```bash
    yarn seed
    ```

## How It Works

- The script reads region and city data from `data.json`.
- It first creates each region using a POST request to `http://localhost:3000/v1/region`.
- After successfully creating a region, it creates cities within that region by sending a POST request to `http://localhost:3000/v1/city` for each city.
- The script uses the provided `Authorization` token in the request headers for authentication.

## License

This project is licensed under the MIT License.

