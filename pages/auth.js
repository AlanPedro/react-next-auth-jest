import KeycloakProvider from "next-auth/providers/keycloak";

const AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: "ps-ui",
      clientSecret: "z2eLdA1W3RO4GQIGF1r6iZGizAmTHWWm",
      issuer: "http://localhost:8180/realms/AlphaPublicSector",
    }),
  ],
};

module.exports = { AuthOptions };
