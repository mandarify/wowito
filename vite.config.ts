// Vite

import path from "path";

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({

   plugins: [react()],

   resolve: {
      alias: {

         '@app': path.resolve(__dirname, './src/01_App'),
         '@pages': path.resolve(__dirname, './src/02_Pages'),
         '@widgets': path.resolve(__dirname, './src/03_Widgets'),
         '@entities': path.resolve(__dirname, './src/04_Entities'),
         '@features': path.resolve(__dirname, './src/05_Features'),
         '@shared': path.resolve(__dirname, './src/06_Shared'),

         '@assets': path.resolve(__dirname, './src/01_App/01_assets'),
         '@styles': path.resolve(__dirname, './src/01_App/02_styles'),

         '@ui': path.resolve(__dirname, './src/01_App/06_Shared/01_ui'),
      },
   },

});
