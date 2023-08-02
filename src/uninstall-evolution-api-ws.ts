import nodeWindows from 'node-windows';
import path from 'path';

const svc = new nodeWindows.Service({
  name: 'EvolutionAPIServer',
  description:
    'WhatsApp-Api-NodeJs - This project is based on the CodeChat. The original project is an implementation of Baileys',
  script: path.join(__dirname, 'main.js'),
});

svc.on('uninstall', () => {
  console.log('Uninstall complete.');
  console.log('The service exists: ', svc.exists);
});

svc.uninstall();
