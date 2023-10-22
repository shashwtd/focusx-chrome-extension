# focusx-chrome-extension
FocusX is a chrome extension that aims to help reduce distraction and increase your workflow by blocking your access to the websites that you get distracted by.

## Install Directly Without Building
Yes, you can also directly install skip to the Installing part without having to build the extension

## How to Build this extension?

(skip this part if you are using the focusX.zip file)

- Clone the github repositiory using `git clone https://github.com/shashwtt/focusx-chrome-extension`
- Open the repository folder by `cd ./focusx-chrome-extension`
- Install the required Packages `npm install` or `yarn add`
- To build the chrome extension run `npm run build` (this will create a /dist folder inside project's root directory)

## How to Install this chrome extension on your device?
- Visit `chrome://extensions/` on your chromium based browswer
- Enable Developer Mode by selecting the button on top right of screen. <br>
![image](https://github.com/shashwtt/focusx-chrome-extension/assets/69616790/0a345833-0625-459d-ad58-56fce348747a)

<br>
- Find the Load Unpacked button and select the `/dist` folder that we just generated or `focusX.zip` file. <br>

  ![image](https://github.com/shashwtt/focusx-chrome-extension/assets/69616790/1e348fac-6c05-4f21-baee-ff0f89c5565e)

- And Viola! The extension should be installed. You can click on the extension icon to view it.
