import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
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
      <StoreImageDescription
        id={data.id}
        image={data.image}
        title={data.title}
        description={data.description}
        price={data.price}
      />
      <Silkbg img={silkbg} top="-80px" left="" right="0px" />
      <Link href={"/store"} style={{ margin: "60px 0", alignSelf: "center" }}>
        <Button
          color="secondary"
          variant="contained"
          sx={{
            width: "180px",
            height: "50px",
            border: "solid thin ",
            borderColor: "primary.main ",
            zIndex: 10,
          }}
        >
          Back To Store
        </Button>
      </Link>
    </Box>
  );
}
