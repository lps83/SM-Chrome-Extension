# Plane Preference Chrome Extension

## Description

The Plane Preference Chrome Extension allows users of ScheduleMaster.com to personalize their experience by marking aircraft with customized icons. It enhances the usability of the website by enabling users to quickly identify and categorize aircraft based on their preferences. The extension supports four distinct icons:
- Neutral (default)
- Like
- Dislike
- Favorite

These icons can be toggled by clicking on them directly in the aircraft scheduling interface, allowing users to visually manage their preferences directly from the scheduling page.

## Features

- **Personalization**: Users can assign one of four icons to any aircraft to indicate their preference or status.
- **Easy Toggle**: Simple click to toggle through icons: Neutral -> Like -> Dislike -> Star -> Neutral.
- **Persistent Settings**: Preferences are saved locally using Chrome's storage API, ensuring that users see their personalized icons every time they visit the site.

## Installation

1. **Clone the Repository**: Download the code to your local machine by cloning this repository.
    ```bash
    git clone https://github.com/lps83/SM-Chrome-Extension.git
    ```
2. **Load the Extension in Chrome**:
    - Open Google Chrome and navigate to `chrome://extensions/`.
    - Enable Developer Mode by toggling the switch at the top-right.
    - Click on "Load unpacked" and select the directory where you cloned the extension.

3. **Visit ScheduleMaster.com**: Navigate to ScheduleMaster.com and start using the extension. Icons should appear next to each aircraft listing.

## Usage

Click on the icon next to any aircraft to toggle through the different statuses (Neutral, Like, Dislike, Star). The icon for each aircraft will persist across visits and page refreshes, reflecting your preferences every time you access the site.

## Contributing

Contributions are welcome! If you'd like to improve the Plane Preference Chrome Extension, please fork the repository and submit a pull request.

1. **Fork the Repository**
2. **Create a Feature Branch**
    ```bash
    git checkout -b feature/YourFeature
    ```
3. **Commit Your Changes**
    ```bash
    git commit -am 'Add some feature'
    ```
4. **Push to the Branch**
    ```bash
    git push origin feature/YourFeature
    ```
5. **Open a Pull Request**

## License

This project is licensed under the MIT License 