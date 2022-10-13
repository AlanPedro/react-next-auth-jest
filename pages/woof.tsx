import { GetServerSidePropsContext } from "next/types";
import { FormWrapper } from "../components/Elements";

const TestPage = () => {
  return <FormWrapper></FormWrapper>;
};
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const errorQuery = context.query.error;

  // const errors = errorQuery ? [errorQuery].flat() : null;

  console.log("Run");

  // const session = await unstable_getServerSession(context.req, context.res, authOptions as NextAuthOptions)
  // const cookies = new Cookies(context.req, context.res)
  // const { pageRef } = context.query

  return {
    notFound: true,
  };
};

export default TestPage;
