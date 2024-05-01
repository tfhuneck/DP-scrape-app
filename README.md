# D&P Cards Scrape Application

This Electron application is designed for scraping data from various online sources related to sports cards prices. It provides functionalities to scrape, save, delete, and print data in both PDF and CSV formats.

## Features

- **Scraping**: Automatically fetches data from specified URLs for basketball, baseball, football, and other sports cards.
- **Data Management**: Allows saving and deleting scraped data, providing flexibility in managing the dataset.
- **Export**: Enables exporting data in both PDF and CSV formats for easy sharing and analysis.
- **Backup and Recovery**: Provides functionality to backup data and recover it if needed.

## Setup

1. Clone this repository to your local machine.
2. Install dependencies using npm:

```bash
npm install

```

# Usage

## Running the Application

```bash
npm start
```

## Functionality Overview

- **Scraping**: Scrapes prices for basketball, baseball, football, and other cards. The scraped data is updated in respective JSON files.
- **Data Management**: Provides options to save, delete, and export scraped data.
- **Print to PDF**: Generates PDF reports for scraped data.
- **Print to CSV**: Exports data to CSV format for analysis.
- **Backup**: Backs up all data to a specified directory for safekeeping.
- **Recovery**: Allows recovering backed-up data if needed.

## Dependencies

- [Electron](https://www.electronjs.org/): Framework for building cross-platform desktop applications.
- [Axios](https://axios-http.com/): Promise-based HTTP client for making requests.
- [Cheerio](https://cheerio.js.org/): Fast, flexible, and lean implementation of core jQuery for the server.
- [Selenium WebDriver](https://www.selenium.dev/documentation/en/webdriver/): Provides a programming interface for automating interactions with web browsers.
- [Electron Print](https://github.com/springernature/electron-print): Library for printing PDF documents in Electron applications.
- [Electron Dialog](https://www.electronjs.org/docs/api/dialog): Module to display native system dialogs for opening and saving files.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
