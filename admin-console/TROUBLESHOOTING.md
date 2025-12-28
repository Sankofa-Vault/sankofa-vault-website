# Admin Console Troubleshooting

## Recent Fixes Applied

### 1. Fixed Router Imports (✅ COMPLETED)
The router was importing editor pages from the old path. Fixed in `src/router/config.tsx`:
- Changed from: `../pages/dashboard/pages/home/page`
- Changed to: `../pages/editors/home/page`

### 2. Improved Login Error Handling (✅ COMPLETED)
Added better logging and error messages in `src/pages/login/page.tsx`:
- Console logs for debugging
- Token validation before login
- Better error messages

### 3. Added AuthContext Logging (✅ COMPLETED)
Added console logs in `src/contexts/AuthContext.tsx` to track navigation

## How to Debug the 404 Issue

### Step 1: Check if CMS Backend is Running
```bash
# From the project root
cd cms
go run main.go
```

Expected output: `Server running on port 8080`

### Step 2: Verify User Exists
Register a user if needed:
```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@sankofavault.org","password":"password123"}'
```

Expected: `{"message":"User registered successfully"}`

### Step 3: Test Login API Directly
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@sankofavault.org","password":"password123"}'
```

Expected: `{"token":"eyJhbGc..."}`

### Step 4: Start Admin Console with Debug Mode
```bash
# From project root
cd admin-console
npm run dev
```

Expected output:
```
VITE ready in Xms
➜  Local:   http://localhost:3000/
```

### Step 5: Check Browser Console
1. Open admin console at `http://localhost:3000`
2. Open browser DevTools (F12)
3. Go to Console tab
4. Try to login and watch for logs:
   - "Login response: {token: '...'}"
   - "AuthContext: Logging in with token: ..."
   - "AuthContext: Navigating to /dashboard"

## Common Issues

### Issue: "404 when navigating to /dashboard"
**Symptom**: Login succeeds but page shows 404

**Possible Causes**:
1. Admin console dev server not running
2. Base path misconfigured
3. Route definition issue

**Solution**:
- Ensure `npm run dev` is running in `admin-console/` directory
- Check browser URL - should be `http://localhost:3000/dashboard`
- Check router config in `src/router/config.tsx`

### Issue: "Network Error" or "CORS Error"
**Symptom**: Login fails with network/CORS error

**Possible Causes**:
1. CMS backend not running
2. Wrong API URL in `src/utils/api.ts`
3. CORS not configured for localhost:3000

**Solution**:
- Start CMS backend: `cd cms && go run main.go`
- Check API_BASE_URL in `src/utils/api.ts` (should be `http://localhost:8080/api`)
- Check CORS config in `cms/main.go` (should include `localhost:3000`)

### Issue: "Invalid credentials"
**Symptom**: Login shows "Invalid credentials" error

**Possible Causes**:
1. User doesn't exist in database
2. Wrong email/password
3. Database connection issue

**Solution**:
- Register user first (see Step 2 above)
- Check email/password match what you registered
- Verify Turso connection in `cms/.env`

### Issue: "No token received from server"
**Symptom**: Login shows this specific error

**Possible Causes**:
1. Backend returning wrong response format
2. API response structure mismatch

**Solution**:
- Check backend `auth.go` returns `{"token": "..."}`
- Check `authAPI.login` in `src/utils/api.ts` returns `response.data`
- Look at Console logs for actual response structure

## Checking File Structure

The admin console should now have this structure:
```
admin-console/src/pages/
├── NotFound.tsx
├── dashboard/
│   ├── page.tsx          # Dashboard home
│   ├── global/
│   │   └── header/
│   │       └── page.tsx
│   └── media/
│       └── page.tsx
├── editors/              # ✅ NEW STRUCTURE
│   ├── home/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   └── team/
│       └── page.tsx
└── login/
    └── page.tsx
```

## Still Having Issues?

1. Clear browser cache and localStorage:
   ```javascript
   // In browser console
   localStorage.clear();
   location.reload();
   ```

2. Check all three services are running:
   - Main website: `http://localhost:5173`
   - Admin console: `http://localhost:3000`
   - CMS backend: `http://localhost:8080`

3. Look for errors in:
   - Browser Console (F12 → Console)
   - CMS backend terminal output
   - Admin console terminal output
