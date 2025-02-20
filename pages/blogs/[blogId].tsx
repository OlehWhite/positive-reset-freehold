import Head from "next/head";
import { OtherHeader } from "../../components/Layout/OtherHeader/OtherHeader";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { IBlog, Website } from "../../services/types";
import Image from "next/image";
import Button from "@mui/material/Button";
import { CURRENT_WEBSITE, WEBSITE_TITLE } from "../../services/constants";
import { fetchProjects } from "../../services/getInfo";
import { Title } from "../../components/FormFields/styled";

export const getServerSideProps = async (context) => {
  const { blogId } = context.params;
  const data = await fetchProjects();

  const project = data[0]?.[
    CURRENT_WEBSITE.POSITIVE_RESET_FREEHOLD
  ] as Website;
  const blog = project?.blogs.find((blog) => blog.id === blogId);
  return {
    props: {
      blog: blog || null,
    },
  };
};

const BlogId = ({ blog }: { blog: IBlog }) => {
  const router = useRouter();

  const [description, setDescription] = useState("");

  useEffect(() => {
    if (blog?.text) {
      const stripHtmlTags = (html: any) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
      };

      setDescription(stripHtmlTags(blog?.text));
    }
  }, [blog]);

  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Blog</title>
        <meta name="description" content={description}/>
        <meta property="og:title" content={blog?.title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={blog?.image}/>
        <meta
          property="og:url"
          content={`https://positiveresetfreehold.com/blogs/${blog?.id}`}
        />
        <meta name="twitter:title" content={blog?.title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={blog?.image}/>
      </Head>

      <OtherHeader/>

      <Title>BLOG</Title>

      <Box mb={5} borderBottom="1px solid #BEBEBE"/>

      <Stack width={1} maxWidth={1100} margin="0 auto 40px" position="relative">
        <Button
          sx={{position: "absolute"}}
          variant="contained"
          onClick={() => router.push("/blogs")}
        >
          Back to blogs
        </Button>

        <Stack gap={2} justifyContent="center" alignItems="center">
          <Stack
            sx={{
              position: "relative",
              width: 1,
              maxWidth: 380,
              height: 253,
              mb: 1,
              mt: 6,
            }}
          >
            {blog?.image ? (
              <Image
                src={blog?.image}
                alt={blog?.title}
                title={blog?.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <Stack
                width={1}
                height={1}
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress size={70} />
              </Stack>
            )}
          </Stack>

          <Typography
            fontStyle="italic"
            fontWeight={300}
            color="#a8a8a8"
            fontSize={16}
          >
            {blog?.date}
          </Typography>
        </Stack>

        <Stack>
          <Box fontSize={28} fontWeight={600} component="h2">
            {blog?.title}
          </Box>

          <div dangerouslySetInnerHTML={{ __html: blog?.text }} />
        </Stack>
      </Stack>
    </>
  );
};

export default BlogId;
