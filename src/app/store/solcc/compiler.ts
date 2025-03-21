interface AbiIO {
    indexed?: boolean;
    internalType: string;
    name: string;
    type: string;
}

interface Abi {
    inputs: AbiIO[];
    outputs: AbiIO[];
    name: string;
    stateMutability: string;
    type: string;
    anonymous?: boolean;
}

interface ContractData {
    contractName: string;
    byteCode: string;
    abi: Abi[];
}

// Function to compile Solidity code using the Web Worker
export const compile = (contractCode: string): Promise<ContractData[]> => {
    return new Promise((resolve, reject) => {
        // Create a new Web Worker instance
        const worker = new Worker(
            new URL("./solc.worker.ts", import.meta.url), { type: "module" }
        );

        // Handle successful compilation
        worker.onmessage = (e: MessageEvent) => {
            const { output, error } = e.data;

            if (error) {
                reject(`Compilation error: ${error}`);
                return;
            }

            if (!output.contracts || !output.contracts['contract']) {
                reject("Invalid Solidity source code");
                return;
            }

            const result: ContractData[] = [];

            for (const contractName in output.contracts['contract']) {
                const contract = output.contracts['contract'][contractName];
                result.push({
                    contractName,
                    byteCode: contract.evm.bytecode.object,
                    abi: contract.abi,
                });
            }

            resolve(result);
        };

        // Handle compilation errors
        worker.onerror = (e) => {
            reject(`Worker error: ${e.message}`);
        };

        // Send Solidity code to the worker
        worker.postMessage({ contractCode });
    });
};
