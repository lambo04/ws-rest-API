const express = require('express');
const {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
} = require('../controllers/contact');
const router = express.Router();

// Définir les routes
router.get('/', getAllUsers);       // Récupérer tous les utilisateurs
router.post('/', addUser);          // Ajouter un nouvel utilisateur
router.put('/:id', updateUser);     // Modifier un utilisateur par ID
router.delete('/:id', deleteUser);  // Supprimer un utilisateur par ID

module.exports = router;
