import { GetServerSidePropsContext } from "next/types";
import { NextAuthOptions, unstable_getServerSession } from "next-auth";
import { FormWrapper } from "../components/Elements";
import AuthOptions from "../pages/auth";

const TestPage = () => {
  return <FormWrapper></FormWrapper>;
};
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const errorQuery = context.query.error;

  // const errors = errorQuery ? [errorQuery].flat() : null;

  // const session = await unstable_getServerSession(
  //   context.req,
  //   context.res,
  //   AuthOptions as NextAuthOptions
  // );

  console.log("Run");

  // const session = await unstable_getServerSession(context.req, context.res, authOptions as NextAuthOptions)
  // const cookies = new Cookies(context.req, context.res)
  // const { pageRef } = context.query

  return {
    notFound: true,
  };
};

export default TestPage;
function KeycloakProvider(arg0: {
  clientId: string;
  clientSecret: string;
  issuer: string;
}) {
  throw new Error("Function not implemented.");
}
