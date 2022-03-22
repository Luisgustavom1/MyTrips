import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetPageBySlugQuery, Get_PagesQuery } from 'graphql/generated/graphql'

export default function AboutPage({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback)
    return <p>TA NO FALLBACK, CARREGANDO A PAGINA GETSTATICPATHS</p>

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<Get_PagesQuery>(GET_PAGES, {
    first: 3
  })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
