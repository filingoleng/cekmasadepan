const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();
  if (userInputValue!== '') {
    // AI logic goes here
    const response = getAIResponse(userInputValue);
    chatLog.innerHTML += `<p>You: ${userInputValue}</p><p>AI: ${response}</p>`;
    userInput.value = '';
  }
});

function getAIResponse(input) {
  // Simple AI logic: respond with a random message
  const responses = [
    'sempurna',
    'ganteng',
    'cantik',
    'kaya',
    'model',
    'multitelenta',
    'pemberani',
    'cerdas',
    'pendiem',
    'introvet',
    'suka marah',
    'bau',
    'autis',
    'gila',
    'jelek',
    'miskin',
    'Bijaksana',
    'Mandiri',
    'Sabar',
     'Humoris',
'Kreatif',
'Integritas',
'Kritis',
'Idealis',
'Kejujuran',
'Dermawan',
'Setia',
'Hormat',
'Adil',
'Pemaaf',
'Murah Hati',
 'Sopan',
'Optimis',
'Tekun',
'Rajin',
'Disiplin', 
'Penyayang',
'Bertanggungjawab',
'Percaya Diri',
'Bersyukur',
'Ceria',
'Sombong',
'Labil',
'Minder',
'Caper',
'Pendendam',
'Perfeksionis',
'Hard To Please',
'Sensitif',
'Penyendiri',
'Moody',
'Egois',
'Pesimis',
'Bossy',
'Pembangkang',
'Pelit',
'Ambisius',
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}