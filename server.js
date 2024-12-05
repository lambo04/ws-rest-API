require('dotenv').config(); // Charger les variables d'environnement
const express = require('express');
const connectDB = require('./config/connectDB');
const contactRoutes = require('./routes/contact');

// Connecter à MongoDB
connectDB();

// Initialiser Express
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Utiliser les routes
app.use('/api/users', contactRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
