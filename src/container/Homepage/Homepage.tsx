import React, { useState } from 'react';
import { FullPost } from '../../domain/posts/post';
import Header from '../../components/Header/Header';
import PostCard from '../../components/Cards/PostCard';
import LatestPost from './components/LatestPost';
import Banners from '../../components/Banners/Banners';
import MorePosts from '../../components/MorePosts/MorePosts';
import Footer from '../../components/Footer/Footer';
import { FullCategory } from '../../domain/categories/categories';
import Ad from '../../components/Ad/Ad';

export type HomeProps = {
  posts: FullPost;
  categories: FullCategory;
};

export default function Homepage({ posts, categories }: HomeProps) {
  const [number, setNumber] = useState<number>(5);

  const lastPostData = posts.data[0].attributes;
  const renderPosts = posts.data.slice(0, number);
  return (
    <>
      <Header />
      <main className="block h-full w-full bg-white dark:bg-darkbg ">
        <div className="my-0 mx-auto max-w-[1200px] p-2 tablets:px-10 tablets:pt-10">
          <Ad />
          <section className="block gap-10 banners:grid banners:grid-cols-sections">
            <section>
              <div className="mb-20">
                <LatestPost
                  lastPostUrl={lastPostData.cover.data.attributes.formats.large.url}
                  lastPostTitle={lastPostData.title}
                  lastSlug={lastPostData.slug}
                  lastCategory={lastPostData.category.data.attributes.name}
                  lastPostAlt={lastPostData.cover.data.attributes.alternativeText}
                />
              </div>
              <div className="mb-10 block">
                {renderPosts.map((post) => {
                  return (
                    <PostCard
                      key={post.id}
                      thumbmail={post.attributes.cover.data.attributes.formats.thumbnail.url}
                      title={post.attributes.title}
                      author={post.attributes.author.data.attributes.name}
                      authorSlug={post.attributes.author.data.attributes.slug}
                      date={post.attributes.publishedAt}
                      description={post.attributes.description}
                      slug={post.attributes.slug}
                      category={post.attributes.category.data.attributes.name}
                      categorySlug={post.attributes.category.data.attributes.slug}
                      alt={post.attributes.cover.data.attributes.alternativeText}
                    />
                  );
                })}
              </div>
            </section>
            <section className="hidden banners:block">
              <div className="h-full w-full">
                <Banners categories={categories} />
              </div>
            </section>
          </section>
          <MorePosts morePosts={number} setMorePosts={setNumber} />
        </div>
        <Footer />
      </main>
    </>
  );
}
