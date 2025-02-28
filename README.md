## Repro For Svelte Kit-Rainlang package

### Prerequisites
First, we need the rainlanguage-orderbook dependency to be present in the project root. There is already a rainlanguage-orderbook dependency present in the project root. But incase anybody wants to to have the latest version:
- Clone the rainlanguage-orderbook repo : https://github.com/rainlanguage/rain.orderbook and install the dependencies(follow the instructions in the readme).
- Navigate to `/packages/orderbook` and run `npm pack` to create a tarball and copy it to the root of the project.

### Steps to run the project
- Clone the repo : 
```
git clone https://github.com/Siddharth2207/svelte-error.git
```

- Enter nix shell : 
```
nix develop && npm install
```

- Run the project : 
```
npm run dev
```
and check the error in the browser and the terminal.


