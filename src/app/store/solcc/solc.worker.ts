declare function importScripts(...urls: string[]): void;

// Load the Solidity WebAssembly compiler dynamically
importScripts('https://binaries.soliditylang.org/bin/soljson-latest.js');

import wrapper from 'solc/wrapper';

// Main worker event listener
self.onmessage = (event) => {
    const contractCode = event.data.contractCode;

    const sourceCode = {
        language: 'Solidity',
        sources: {
            contract: { content: contractCode },
        },
        settings: {
            outputSelection: { '*': { '*': ['*'] } },
        },
    };

    // Ensure the Solidity compiler is available
    const compiler = wrapper((self as any).Module);

    try {
        const output = JSON.parse(compiler.compile(JSON.stringify(sourceCode)));
        console.log("COMPILER OUTPUT", output)
        self.postMessage({ output });
    } catch (error: any) {
        self.postMessage({ error: error.message });
    }
};
