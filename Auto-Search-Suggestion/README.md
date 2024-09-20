# Auto Suggest Search 
This project implements a dynamic search suggestion feature for colleges based on user input for country and college name. As the user types, the suggestions update in real-time, highlighting the matching parts of the college names.

## Features
* Dynamic search suggestions that update as the user types
* Highlights the matching parts of the college names
* Uses the Universities API to fetch data

## Technology Stack
* **HTML5**: For structuring the carousel.
* **CSS3**: For styling and animations, including smooth transitions and responsive design.
* **JavaScript (ES6+)**: For controlling the sliding logic, navigation, and automatic transitions.
* **Axios**: Axios Library used for retrieving JSON data from API endpoint.

## Getting Started
To use the Search Suggestion locally, follow these steps:

1. Clone the repository:
``` bash
git clone https://github.com/yourusername/auto-search-suggestion.git
```
2. Navigate to the project folder:
```bash
cd auto-search-suggestion
```
3. Open index.html in your browser.
```perl
index.html
```

## API Endpoint
The project utilizes the following API endpoint to fetch college data:

``` sql
GET http://universities.hipolabs.com/search
```

## Future Features
1. Faster Search Algorithm: Implement an optimized search algorithm to improve the speed and efficiency of suggestions.
2. Caching: Introduce caching mechanisms to reduce API calls and speed up subsequent searches.
3. User Interface Improvements: Refine the UI for better usability and aesthetics.

## Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request. Any improvements or suggestions are welcome!

## License
This project is open-source and available under the MIT License.

## Acknowledgments
Hipolabs for providing the universities API.

Happy Coding!