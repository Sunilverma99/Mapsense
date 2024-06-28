# MapSense Frontend Application

## Overview

MapSense is a frontend web application built using React that provides information about postal services based on user input. This application utilizes a government API to fetch and display data related to post offices in India, including their names, types, locations, and other details.

## Features

- Collects user information (first name, last name, pincode, and email) on the homepage.
- Displays a table of post office details based on the user's pincode.
- Allows users to search for post office data by state name, district name, or pincode.

## Installation and Setup

Follow these steps to set up and run the application:

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/mapsense.git
    ```

2. Navigate to the project directory:
    ```bash
    cd mapsense
    ```

3. Install the necessary dependencies by running:
    ```bash
    npm install
    ```

4. Start the application by running:
    ```bash
    npm run dev
    ```

## Data Source

This application uses the All India Pincode Directory API provided by the Indian government. The API provides fields such as `officename`, `pincode`, `officetype`, `statename`, `districtname`, `longitude`, and `latitude`.

- **API Source**: [All India Pincode Directory](https://api-url-goes-here)

## Pages and Components

### Homepage

- **Form**: Collects the user's first name, last name, pincode, and email.
- **Table**: Displays post office details based on the pincode provided by the user.

### Search Service

Allows users to search for post office data by:
- State Name
- District Name
- Pincode

## Project Structure
public/ # Contains public assets like index.html
src/ # Contains the source code for the application
├── components/ # Contains React components used throughout the application
├── services/ # Contains functions to fetch data from the API
├── App.js # Main component that sets up routing and layout
└── index.js # Entry point for the React application


## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.

## Usage

1. Navigate to the homepage.
2. Enter your first name, last name, pincode, and email.
3. Submit the form to view post office details related to your pincode.
4. Use the search feature to find post office data by state name, district name, or pincode.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## Contact

For any questions or feedback, please contact [Your Name] at [your-email@example.com].
