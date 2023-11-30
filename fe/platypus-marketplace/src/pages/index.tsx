import React, { ReactElement, useEffect, useState } from "react";
import UserLayout from "@/components/Layout/UserLayout";
import ProductCard from "@/components/Card/ProductCard";
import CategoryIcon from "@/components/CategoryIcon/CategoryIcon";
import { GetServerSideProps } from "next";
import { ratingFormat, setOthersToLast } from "@/utils/uniUtils";
import JumboTronCarousel from "@/components/Carousel/JumboTronCarousel";
import { Skeleton } from "@/components/ui/skeleton";
import CategoriesSekeleton from "@/components/Skeleton/CategoriesSekeleton";
import HeaderLined from "@/components/Header/HeaderLined";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export interface IProduct {
  id: number;
  merchant_id: number;
  title: string;
  photo: string;
  videos: string;
  total_sold: number;
  city: string;
  favorite_count: number;
  average_rating: number;
  total_stock: number;
  category_lv1_id: string;
  category_lv2_id: string;
  category_lv3_id: string;
  min_price: string;
  created_at: string;
  updated_at: string;
}

export interface ICategory {
  id: string;
  name: string;
  icon: string;
  category_lv_2: [
    {
      id: string;
      name: string;
      category_lv_1_id: number;
      category_lv_3: [
        {
          id: string;
          name: string;
          category_lv_2_id: number;
        },
      ];
    },
  ];
}

export interface IHomeProps {
  productsServer: IProduct[];
  category: ICategory[];
}

const Home = ({ productsServer, category }: IHomeProps) => {
  const [categories, setCategories] = useState<ICategory[]>(category);
  const [products, setProducts] = useState<IProduct[]>(productsServer);
  const router = useRouter();
  useEffect(() => {
    const getCategoriesProduct = async () => {
      const responseProducts = await fetch(
        `${process.env.BASE_API_URL}/products?limit=18`,
      );
      const resultJSONProducts = await responseProducts.json();
      const products = resultJSONProducts.data;
      const responseCategory = await fetch(
        `${process.env.BASE_API_URL}/categories`,
      );
      const resultJSONCategory = await responseCategory.json();
      const category = resultJSONCategory.data;

      setCategories(category);
      setProducts(products);
    };
    if (!productsServer || !category) {
      getCategoriesProduct();
    }
  }, []);

  if (!products || !categories) {
    return (
      <>
        <Head>
          <title>The most exciting ecommerce | Platypus</title>
          <meta name="platypus" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/vm4/favicon.ico" />
        </Head>
        <main className="min-w-screen flex min-h-screen flex-col items-center pt-12 md:px-28 md:pt-28 2xl:px-72">
          <div className="mb-5 mt-5 items-center md:flex md:w-full md:justify-between">
            <hr className="invisible flex-1 md:visible" />
            <div className="md:rounded-full md:border">
              <h2 className="text-lg font-medium md:px-2">Deals</h2>
            </div>
            <hr className="invisible flex-1 md:visible" />
          </div>
          <Skeleton className=" h-80 min-w-full rounded-lg object-cover transition-transform duration-500" />
          <div className="mb-10 mt-5 w-full">
            <div className="mb-5 items-center md:flex md:w-full md:justify-between">
              <hr className="invisible flex-1 md:visible" />
              <div className=" md:rounded-full md:border">
                <h2 className="text-lg font-medium md:px-2">
                  Product Categories
                </h2>
              </div>
              <hr className="invisible flex-1 md:visible" />
            </div>
            <div className="grid grid-cols-3 gap-2 gap-y-3 p-5 shadow-lg md:grid-cols-5 md:gap-y-10 md:p-10 xl:grid-cols-7">
              <CategoriesSekeleton />
            </div>
          </div>
        </main>
      </>
    );
  }

  setOthersToLast(categories);
  return (
    <>
      <Head>
        <title>The most exciting ecommerce | Platypus</title>
        <meta name="platypus" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vm4/favicon.ico" />
      </Head>
      <main className="min-w-screen flex min-h-screen flex-col items-center pt-12 md:px-28 md:pt-28 2xl:px-72">
        <div className="w-[93%] md:w-full">
          <div className="mb-10 mt-10 w-full">
            <HeaderLined className="mb-5">Deals</HeaderLined>
            <JumboTronCarousel
              images={[
                "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/11/6/a0953aa5-6054-4bea-8b65-bd1d753a013a.jpg.webp?ect=4g",
                "https://images.tokopedia.net/img/cache/1200/NXCtjv/2023/11/14/24249245-f0be-4b97-a8b4-a819f971979d.jpg",
                "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/11/14/b5ca3ba8-acf9-43ab-b158-b7f74dc254a0.jpg.webp?ect=4g",
                "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/11/14/b5ca3ba8-acf9-43ab-b158-b7f74dc254a0.jpg.webp?ect=4g",
              ]}
            />
          </div>
          <div className="mb-10 mt-5 w-full">
            <HeaderLined className="mb-5">Product Categories</HeaderLined>
            <div className="grid grid-cols-3 gap-2 gap-y-3 p-5 shadow-lg md:grid-cols-5 md:gap-y-10 md:p-10 xl:grid-cols-7">
              <CategoryIcon label="See All" id="" />
              {categories.map((item: ICategory) => {
                return (
                  <CategoryIcon
                    key={item.id}
                    label={item.name}
                    icon={item.icon}
                    id={item.id}
                  />
                );
              })}
            </div>
          </div>
          <div className="mb-10 mt-5 w-full">
            <HeaderLined className="mb-5">Recommended Products</HeaderLined>
            <div className="xl:grid-cols-6-prod-card grid min-w-[348px] grid-cols-2-prod-card justify-evenly gap-2 gap-y-3 md:grid-cols-4-prod-card md:gap-y-10 md:py-10">
              {products.length == 0 && (
                <p className="md:px-1">No products to show.</p>
              )}
              {products.map((item: IProduct) => {
                return (
                  <ProductCard
                    id={item.id}
                    url={item.photo}
                    key={item.id}
                    name={item.title}
                    price={parseInt(item.min_price)}
                    city={item.city}
                    rating={ratingFormat(item.average_rating)}
                    sold={item.total_sold}
                  />
                );
              })}
            </div>
            <div className="mt-5 flex w-full justify-center md:mt-0">
              <Button onClick={() => router.push("/search")}>
                Show All Products
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const responseProducts = await fetch(
    `${process.env.BASE_API_URL}/products?limit=18`,
  );
  const responseCategory = await fetch(
    `${process.env.BASE_API_URL}/categories`,
  );

  const resultJSONProducts = await responseProducts.json();
  const productsServer = resultJSONProducts?.data;
  const resultJSONCategory = await responseCategory.json();
  const category = resultJSONCategory?.data;
  return {
    props: {
      productsServer,
      category,
    },
  };
};

export default Home;
