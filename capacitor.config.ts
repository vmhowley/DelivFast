import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.benito.delivfast',
  appName: 'delifast',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
