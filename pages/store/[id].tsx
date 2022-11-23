import { Box } from "@mui/system";
import Head from "next/head";

import { BackToStoreButton } from "../../components/Buttons/BackToStore";
import { Silkbg } from "../../components/Silkbg";
import StoreImageDescription from "../../components/StoreImageDescription/StoreImageDescription";

export async function getStaticPaths() {
  const data = await (await fetch(`https://fakestoreapi.com/products`)).json();

  const paths = data.map((item: any) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  let data = await (
    await fetch(`https://fakestoreapi.com/products/${params.id}`)
  ).json();

  return {
    props: data,
  };
}

import silkbg from "../../public/images/home/silkbg.png";
export default function StoreItemPage(data: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingTop: "35px",
        position: "relative",
      }}
    >
      <Head>
        <title>{data.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <StoreImageDescription
        id={data.id}
        image={data.image}
        title={data.title}
        description={data.description}
        price={data.price}
      />

      <Silkbg img={silkbg} top="-80px" left="" right="0px" />
      <BackToStoreButton />
    </Box>
  );
}
