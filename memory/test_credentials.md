# Identifiants de Test — ULPGL-Goma

## Comptes administrateur (créés automatiquement par le seed)

### 1. Super Admin
- **Email** : `admin@ulpgl.net`
- **Mot de passe** : `Admin@2026`
- **Rôle** : `super_admin`
- **Permissions** : Validation des contenus, gestion des utilisateurs, lecture newsletter & messages, publication directe.

### 2. Publieur Faculté
- **Email** : `publisher@ulpgl.net`
- **Mot de passe** : `Publisher@2026`
- **Rôle** : `faculty_publisher`
- **Faculté** : Faculté Sciences et Technologies (première faculté du seed)
- **Permissions** : Création d'articles/événements/activités → soumis en `pending` pour validation.

## Endpoints d'authentification
- `POST {REACT_APP_BACKEND_URL}/api/auth/login` — corps `{ email, password }` → renvoie `{ token, user }`
- `GET {REACT_APP_BACKEND_URL}/api/auth/me` — header `Authorization: Bearer <token>`
- `POST {REACT_APP_BACKEND_URL}/api/auth/register` — réservé `super_admin` (création de compte)

## Routes frontend protégées
- `/login` — page de connexion
- `/dashboard` — tableau de bord (redirige vers `/login` si non authentifié)

## Base de données MySQL/MariaDB
- **Host** : `127.0.0.1:3306`
- **Database** : `ulpgl_db`
- **User** : `ulpgl`
- **Password** : `ulpgl_pass_2026`
