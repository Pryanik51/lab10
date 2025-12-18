// Адрес вашего развернутого контракта
const contractAddress = '0x72caB69A43248253F1fB5Df6BD3285Bd00dE7170';

// ABI вашего контракта (можно взять тот набор, который формирует Remix)
const contractAbi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_message",
                "type": "string"
            }
        ],
        "name": "setMessage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMessage",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// При подключении к MetaMask
if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    
    document.getElementById('setMessageButton').onclick = async () => {
        const message = document.getElementById('messageInput').value;
        await contract.setMessage(message);
        alert('Сообщение установлено!');
    };
    
    document.getElementById('getMessageButton').onclick = async () => {
        const message = await contract.getMessage();
        document.getElementById('messageDisplay').innerText = message;
    };
} else {
    alert('Установите MetaMask или другой кошелек.');

}

