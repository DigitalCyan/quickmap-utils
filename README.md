# Quickmap Utils

Quickmap Utils is a program for an easier setup of my [`quickmap`](https://github.com/DigitalCyan/quickmap) program. It helps the user generate the `config.json` without having to know anything about `json` files.

<h2 style="color: red;"> ! THIS IS NOT A STANDALONE PIECE OF SOFTWARE !</h2>

## Building the software and making sure it actually does the job:

1. Clone `quickmap`

   ```
   git clone https://github.com/DigitalCyan/quickmap`
   ```

2. Clone `quickmap-utils`
   ```
   git clone https://github.com/DigitalCyan/quickmap-utils
   ```
3. Enter `quickmap-utils` root folder
   ```
   cd quickmap-utils
   ```
4. Package `quickmap-utils`
   ```
   npm run package
   ```
5. Move the program into the `quickmap` root folder

   Packaging the app should create a `out` folder in the root of the project. Open it and move the folder with the packaged app into the root folder of `quickmap` so the path looks something like:

   ```
   .../quckmap/<packaged_quickmap-utils_folder>
   ```

After doing this you're pretty much set. If you have trouble setting up the core please reffer to `quickmap`'s [readme file](https://github.com/DigitalCyan/quickmap/blob/master/README.md)
