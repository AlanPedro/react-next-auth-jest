import { GetServerSidePropsContext, NextPage } from "next";
import { NextAuthOptions, unstable_getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]";
import { useRouter } from "next/router";
import React from "react";

const FormPage: NextPage = () => {
  const router = useRouter();
  // const pageRef = router.query.pageRef as string;
  return <div>WOof</div>;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const errorQuery = context.query.error;

  const errors = errorQuery ? [errorQuery].flat() : null;

  console.log(errors);

  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions as NextAuthOptions
  );
  const { pageRef } = context.query;

  return {
    props: {},
  };
};
export default FormPage;
