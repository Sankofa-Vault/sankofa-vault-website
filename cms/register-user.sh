#!/bin/bash
# Simple script to register a new admin user

echo "=== Sankofa Vault CMS - Register Admin User ==="
echo ""

# Default credentials (you can change these)
EMAIL="${1:-admin@sankofavault.org}"
PASSWORD="${2:-admin123}"

echo "Registering user: $EMAIL"
echo ""

# Make the registration request
RESPONSE=$(curl -s -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\"}")

echo "Response: $RESPONSE"
echo ""

# Check if successful
if echo "$RESPONSE" | grep -q "successfully"; then
  echo "✅ User registered successfully!"
  echo ""
  echo "Login credentials:"
  echo "  Email: $EMAIL"
  echo "  Password: $PASSWORD"
  echo ""
  echo "You can now login at the admin console."
else
  echo "❌ Registration failed. Check the response above for details."
fi
