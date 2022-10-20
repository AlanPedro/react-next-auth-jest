import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { getServerSideProps } from "../pages/form/[woof]";

const fakeContext = {
  params: { id: "12345" } as ParsedUrlQuery,
} as GetServerSidePropsContext;

describe("form/[PageRef] Test", () => {
  it("redirects to 404 if no page found", async () => {
    const w = await getServerSideProps(fakeContext);

    expect(w).toStrictEqual({ notFound: true });
  });
});
