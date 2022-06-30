import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { FullPost } from '../../domain/posts/post'

export type HomeProps = {
  posts: FullPost;
}

export default function Homepage({ posts }: HomeProps) {

  return (
    <div>
      <Head>
        <title>Personal blog with Nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {<div>
          {posts.data.map((post) => (
            <h2 key={post.id}>{post.attributes.title}</h2>
          ))}
        </div>}
      </main>
    </div>
  )
}
