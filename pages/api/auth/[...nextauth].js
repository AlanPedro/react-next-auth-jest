import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
// import jwt_decode from "jwt-decode";

const AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: "ps-ui",
      clientSecret: "z2eLdA1W3RO4GQIGF1r6iZGizAmTHWWm",
      issuer: "http://localhost:8180/realms/AlphaPublicSector",
    }),
  ],
};

export default NextAuth(AuthOptions);

module.exports = { AuthOptions };
