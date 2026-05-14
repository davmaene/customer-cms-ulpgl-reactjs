---
name: testing-dynamic-data
description: Test the public website's dynamic API data integration. Use when verifying that pages fetch from the backend API instead of static data, and that fallback works when the backend is down.
---

# Testing Dynamic API Data Integration

## Prerequisites

1. **Backend running** on `http://localhost:8001` (MyCMS backend with MySQL + Sequelize)
2. **Frontend running** on `http://localhost:3000`
3. **MySQL database** seeded with `npm run seed` (from backend repo)
4. **Environment**: `.env` file with `REACT_APP_BACKEND_URL=http://localhost:8001`

## Devin Secrets Needed

No secrets required — the backend uses local MySQL with credentials in `.env`.

## How to Start Services

```bash
# Backend (MyCMS)
cd /home/ubuntu/MyCMS/backend
source .env && export DB_HOST DB_PORT DB_USER DB_PASSWORD DB_NAME JWT_SECRET ADMIN_EMAIL ADMIN_PASSWORD PORT
node index.js

# Frontend
cd /home/ubuntu/customer-cms-ulpgl-reactjs
PORT=3000 npm start
```

## Key Testing Strategy: Count Differences

The strongest way to prove data comes from the API (not static fallback) is to compare item counts:

| Entity | API Seed Count | Static Fallback Count |
|--------|---------------|----------------------|
| FAQs | 5 | 12 |
| Key Facts | 6 | 8 |
| Domains | varies (initially 6, may be fewer after cascade deletes) | 6 |
| Categories | 5 | 6 |

**FAQ count (5 vs 12) is the strongest differentiator.**

Also check specific text content:
- API FAQ #4: "Quels programmes sont offerts ?" 
- Static FAQ #4: "Quels documents sont requis pour l'inscription ?"

## Test Procedure

### Test 1: FAQ Page Dynamic Data
1. Navigate to `http://localhost:3000/app/faq`
2. Count FAQ items — should be **5** (not 12)
3. Verify FAQ #4 text is "Quels programmes sont offerts ?"

### Test 2: About Page Key Facts  
1. Navigate to `http://localhost:3000/about`
2. Count key fact cards — should be **6** (not 8)
3. Look for values: 1985, 5000+, 2, 6, 11, 200+

### Test 3: Network Verification
1. Open DevTools → Network tab → filter XHR
2. Reload any page
3. Verify 10 requests to `localhost:8001/api/*` (posts, staff, centers, domains, faculties, filieres, faqs, key-facts, activities, categories)
4. All should return HTTP 200

### Test 4: Fallback Behavior
1. Stop the backend server (Ctrl+C or kill process on port 8001)
2. Hard-reload the FAQ page (Ctrl+Shift+R)
3. Page should show **12** FAQ items (static fallback)
4. Browser console should show warning: "API unavailable, using static fallback data"

### Test 5: Navigation Mega-Menu
1. Restart the backend
2. Navigate to `http://localhost:3000/accueil`
3. Hover over "Domaines" in the nav bar
4. Count domain entries in dropdown — should match API count (not 6 static)

## Architecture Notes

- **DataContext** (`src/contexts/DataContext.tsx`): Central state management, loads all 10 endpoints via `Promise.all()` on mount
- **API layer** (`src/utils/api.ts`): Axios client with JWT interceptor, 10 fetch functions
- **Fallback**: On any API error, `DataContext` catches and loads from `src/utils/utils.statiquedata.ts`
- **Data transformation**: `mapStaff()`, `mapCenter()`, `assembleDomains()` convert API responses to TypeScript interfaces

## Common Issues

- If MySQL Docker container is stopped, run `docker start mysql-cms` first
- If seed data is missing, run `npm run seed` from the backend directory with env vars exported
- The backend `.env` must have correct `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
- Admin credentials for dashboard: `admin@ulpgl.net` / `Admin@123`
